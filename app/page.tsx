'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';

const testimonials = [
  {
    quote: "How the h#$$ do you get so much accomplished? It's impressive.",
    attribution: 'Collaborator, Gulf Coast Mesh',
  },
  {
    quote:
      'My Grumpy Board is preforming excellent. 100x better than the p1 pro it replaced!',
    attribution: 'Board owner and hardware operator',
  },
  {
    quote:
      "I'm new to MeshCore and this world. But I would like to thank you for everything you have been putting into this community, and I really appreciate it.",
    attribution: 'Community member, MeshCore / Discord',
  },
  {
    quote:
      'I have been amazed at how quickly the answers you have given and the calm manner you navigate it all when randomly thrown at you.',
    attribution: 'Community member, MeshCore / Discord',
  },
  {
    quote:
      "You appear to have a tremendous amount on your plate at the moment. Don't know how you do it all with such efficiency. It's impressive.",
    attribution: 'Community collaborator',
  },
  {
    quote:
      "She built and manages the group's sites. I can't lose her from the community. She's one of the smartest people I know, even more so considering her age.",
    attribution: 'Community maintainer',
  },
];

export default function App() {
  useEffect(() => {
    console.log(
      `
  ⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢢⡀⠀⠀⠀⠀⠀⣠⠊⠉⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡷⠀⡝⠖⠉⠉⢉⠉⠙⠶⣄⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⣧⣠⠔⠋⠀⠈⣉⣙⣾⣷⡈⢲⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⣿⢡⠖⠉⠁⠀⢀⡤⢌⡇⡗⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⡀⢳⣀⣀⣿⢁⡴⣲⠀⠀⢌⣦⠈⡇⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠀⠀⠀⠀⠈⠳⢆⣈⠹⣫⠉⢸⢸⠠⣿⠀⠀⠘⡿⠀⢱⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⡄⠀⣰⡇⢀⣴⠃⣀⢀⣤⣞⣡⠄⢻⡆⠸⡌⠀⠉⠀⠀⠀⠀⠀⡸⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢸⡀⢠⠏⣧⢻⢏⡼⠁⠀⠀⣰⡯⠾⠁⣷⡀⣧⣀⠀⢀⡠⠤⣤⢞⠱⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⡖⡇⣸⡷⠷⡾⢾⠅⠀⣠⠊⠀⢣⡀⠀⡿⠷⣽⣏⡽⢹⠒⠊⠁⢸⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⢳⠸⣸⡀⠐⢿⡇⢀⡜⠁⠀⢀⡄⠉⠒⠓⠛⠛⢿⡤⠃⠀⠀⠀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠘⣤⡵⣷⠚⣏⣯⠛⢄⣀⡠⠋⢀⡀⢄⠠⡄⡦⠊⠈⠒⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠈⠷⣝⣧⡞⠁⠀⣠⠞⠀⢠⣇⠷⠼⡶⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⣠⢶⡫⠋⠀⣠⠾⢥⢄⡤⢼⠇⢀⢞⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

        Hiya, I see your taking a little look at my horrible site. If you'd like to email me your complaints, please send them to contact@lenleyngo.com :3
      `
    );
  }, []);

  return (
    <div className="min-h-screen w-full">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-5 pb-8 pt-16 sm:px-10 sm:pt-24">
        <section className="max-w-3xl">
          <p className="font-display text-lg font-medium text-[var(--pink)]">
            hiya!
          </p>
          <h1 className="font-display mt-2 text-5xl font-semibold leading-[1.05] sm:text-6xl">
            I&apos;m ScarlettOSA{' '}
            <span className="heart" aria-hidden="true">
              &lt;3
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
            I&apos;m a <strong>tinkerer at heart</strong>, always eager to
            explore new technologies and push the boundaries of what&apos;s
            possible with <strong>open-source software and hardware</strong>.
          </p>
          <p className="text-muted mt-4 text-lg leading-relaxed">
            A little curious about me? My{' '}
            <Link href="/about" className="link">
              About Me
            </Link>{' '}
            page has more on my skills, interests, and goals, and everything
            I&apos;ve built lives on my{' '}
            <Link href="/projects" className="link">
              Projects
            </Link>{' '}
            page.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <a href="mailto:contact@lenleyngo.com" className="chip">
              <span className="chip__label">Email</span>
              contact@lenleyngo.com
            </a>
            <a href="https://github.com/Cloud-121" className="chip">
              <span className="chip__label">GitHub</span>
              Cloud-121
            </a>
            <a
              href="https://www.linkedin.com/in/lenley-ngo-634452268/"
              className="chip"
            >
              <span className="chip__label">LinkedIn</span>
              LenleyNgo
            </a>
          </div>
        </section>

        <section className="mt-24" aria-labelledby="feedback-heading">
          <h2
            id="feedback-heading"
            className="section-title font-display text-2xl font-semibold"
          >
            Kind words I&apos;ve received
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <figure
                key={`${testimonial.attribution}-${index}`}
                className="note flex flex-col"
              >
                <blockquote className="flex-grow leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="text-muted mt-4 text-sm font-medium">
                  — {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-16 flex w-full max-w-6xl flex-col-reverse items-start justify-between gap-6 px-5 pb-12 sm:px-10 md:flex-row md:items-end">
        <p className="text-muted max-w-md text-sm leading-relaxed">
          Made with <span className="text-[var(--pink)]">&lt;3</span>. This
          site is{' '}
          <a className="link" href="https://github.com/Cloud-121/personalsite">
            open source
          </a>{' '}
          and hosted by myself on a{' '}
          <a className="link" href="https://k3s.io/">
            K3s
          </a>{' '}
          cluster consisting of 4 nodes with a uptime of 99.9%!
        </p>
        <aside className="lines-note">
          <svg
            className="lines-note__arrow"
            viewBox="0 0 44 44"
            aria-hidden="true"
          >
            <path d="M40 40 C 30 38, 14 34, 8 8" />
            <path d="M3 17 L8 7 L15 15" />
          </svg>
          <p className="font-display text-lg font-semibold text-[var(--pink)]">
            psst! see the lines floating around?
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Each one is a real packet flowing across the Gulf Coast Mesh
            network, and its color shows what kind of packet it is :3
          </p>
          <ul className="lines-note__legend">
            {[
              ['advert', 'broadcasts'],
              ['message', 'messages'],
              ['route', 'routes'],
              ['control', 'control'],
            ].map(([category, label]) => (
              <li
                key={category}
                style={
                  { '--dot': `var(--packet-${category})` } as React.CSSProperties
                }
              >
                {label}
              </li>
            ))}
          </ul>
        </aside>
      </footer>
    </div>
  );
}
