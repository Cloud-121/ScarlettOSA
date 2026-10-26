import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/SiteHeader';
import { formatDate, getPost, getPostSlugs } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post
    ? { title: `${post.title} - Lenley Ngo`, description: post.description }
    : {};
}

export default async function BlogPost({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen w-full">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl px-5 pb-20 pt-16 sm:px-10 sm:pt-24">
        <Link href="/blog" className="link text-sm">
          ← all posts
        </Link>
        <header className="mt-6">
          {post.date && (
            <time dateTime={post.date} className="chip__label">
              {formatDate(post.date)}
            </time>
          )}
          <h1 className="font-display mt-2 text-4xl font-semibold leading-[1.1] sm:text-5xl">
            {post.title}
          </h1>
          {post.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <article
          className="blog-prose mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>
    </div>
  );
}
