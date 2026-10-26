import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Drop a .md file in content/blog/ and it becomes a post at /blog/<file-name>.
// Files starting with "_" (like _template.md) are skipped.
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export type Post = PostMeta & { html: string };

const readPostFile = (slug: string) =>
  matter(fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8'));

const toMeta = (slug: string, data: Record<string, unknown>): PostMeta => ({
  slug,
  title: typeof data.title === 'string' ? data.title : slug.replace(/-/g, ' '),
  // gray-matter turns unquoted YAML dates into Date objects
  date:
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : typeof data.date === 'string'
        ? data.date
        : '',
  description: typeof data.description === 'string' ? data.description : '',
  tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
});

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => toMeta(slug, readPostFile(slug).data))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  if (!getPostSlugs().includes(slug)) return null;
  const { data, content } = readPostFile(slug);
  return { ...toMeta(slug, data), html: marked.parse(content, { async: false }) };
}

export function formatDate(date: string): string {
  if (!date) return '';
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
