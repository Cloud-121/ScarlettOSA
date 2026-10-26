import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import { formatDate, getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog - Lenley Ngo',
  description: 'Notes and write-ups from Lenley Ngo',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen w-full">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-10 sm:pt-24">
        <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
          Blog
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
          Write-ups on mesh radio, hardware, and whatever rabbit hole I&apos;m
          currently down.
        </p>

        {posts.length === 0 ? (
          <div className="note mt-14 max-w-xl !rotate-0 p-8">
            <p className="font-display text-xl font-semibold">
              Nothing here yet!
            </p>
            <p className="text-muted mt-2">
              The first post is on its way, check back soon :3
            </p>
          </div>
        ) : (
          <ul className="mt-14 grid max-w-3xl gap-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card card--lift block p-6 sm:p-8"
                >
                  {post.date && (
                    <time dateTime={post.date} className="chip__label">
                      {formatDate(post.date)}
                    </time>
                  )}
                  <h2 className="font-display mt-2 text-2xl font-semibold">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-muted mt-2 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
