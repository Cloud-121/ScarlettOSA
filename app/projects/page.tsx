'use client';
import SiteHeader from '@/components/SiteHeader';

type Project = {
  title: string;
  type: string;
  description: string;
  source: string;
  visit: string;
  image: string;
  imageFit?: 'cover' | 'contain';
  annotation?: string;
  tags?: string[];
};

export default function Projects() {
  // Fuck you Tummy, Open source is Freedom.
  const projects: Project[] = [
    {
      title: 'Gulf Coast Mesh',
      type: 'highlight',
      description:
        'Founder and Lead maintainer of Gulf Coast Mesh, a volunteer-built communications network anchored in Louisiana and growing across the US Gulf Coast using MeshCore and other mesh radio technologies.',
      tags: ['Community Management'],
      source: '',
      visit: 'https://gulfcoastmesh.org/',
      image: '/files/images/banner.jpg',
    },
    {
      title: 'The Grumpy Board',
      type: 'hardware',
      description:
        'A partnership with GrumpyMesh to design the perfect MeshCore radio. They sold out in less than six hours.',
      source: '',
      visit: 'https://grumpymesh.com/board.html',
      image: '/files/images/grumpy-board-deployed.jpg',
      annotation:
        "that's my hardware working next to the Louisiana state capitol :3",
    },
    {
      title: 'TG-Mesh',
      type: 'hardware',
      description: 'Low cost radio designed to be given out in emergencies.',
      source: '',
      visit: '',
      image: '/files/images/tg-mesh.png',
    },
    {
      title: 'LVR Low Voltage Reset Module',
      type: 'hardware',
      description:
        "Automatic shutdown module for solar repeater's preventing lockup and the loss of equitment in deployments.",
      source: '',
      visit: '',
      image: '/files/images/lvr.png',
    },
    {
      title: 'Gulf Coast Mesh App',
      type: 'software',
      description:
        'A free companion app for MeshCore LoRa mesh radios for off-grid, encrypted communication that works with no cell service, no Wi-Fi, and no internet connection required.',
      source: '',
      visit: '',
      image: '/files/images/gulfcoastmeshapp.png',
      imageFit: 'contain',
      tags: ['MeshCore', 'LoRa'],
    },
    {
      title: 'Gulf Coast Mesh Analyzer',
      type: 'software',
      description:
        'A unified backend for Gulf Coast Mesh that monitors and logs owned repeaters, detects outages, and helps us maintain the strongest mesh network in the southern US.',
      source: '',
      visit: 'https://analyzer.gulfcoastmesh.org',
      image: '/files/images/gulfcoastmeshlogo.png',
      tags: ['MeshCore', 'Monitoring', 'Infrastructure'],
    },
    {
      title: 'Meeting Assistant',
      type: 'software',
      description:
        'A custom-built tool for Gulf Coast Mesh, built to make taking meeting notes and publishing YouTube recordings of community meetings as simple as possible.',
      source: '',
      visit: '',
      image: '/files/images/meetingorganizer.png',
      tags: ['Python', 'Community'],
    },
    {
      title: 'Motionblob',
      type: 'software',
      description:
        'Bringing motion cue indicators to Unix-like platforms, currently a work in progress.',
      source: 'https://github.com/Cloud-121/Motionblob',
      visit: '',
      image: '/files/images/motionblob.png',
      tags: ['Python', 'Serial', 'Efficiency', 'Threading'],
    },
    {
      title: 'MyEntergy-API',
      type: 'software',
      description:
        'Open Source API for MyEntergy Advanced Meters to pull there "live" usage. ',
      tags: ['Python', 'Selenium'],
      source: 'https://github.com/Cloud-121/MyEntergy-API',
      visit: '',
      image: '/files/images/myentergy-api.png',
    },
    {
      title: 'MyEntergy-Bridge',
      type: 'software',
      description:
        'MyEntergy Bridge pulls your energy usage from MyEntergy-API and sends it to your preferred mqtt broker to use with homeassistant. ',
      tags: ['Python', 'MQTT', 'Docker'],
      source: 'https://github.com/Cloud-121/MyEntergy-Bridge',
      visit: '',
      image: '/files/images/myentergy-bridge.png',
    },
    {
      title: 'Web VESC XML Viewer',
      type: 'software',
      description:
        'A web viewer that formats XML files from VESC Tool for easier reading and sharing through an ID-based system.',
      tags: ['Python', 'Streamlit', 'Containers'],
      source: 'https://github.com/Cloud-121/webvescxmlviewer',
      visit: '',
      image: '/files/images/webvescxmlviewer.png',
    },
    {
      title: 'Vipper Timekeeping Discord Bot',
      type: 'software',
      description:
        "A Discord bot that helps communities with users across multiple time zones see one another's local time.",
      tags: ['Python', 'discord.py', 'Containers'],
      source: 'https://github.com/Cloud-121/Vipper-Timekeeping-discord-bot',
      visit: '',
      image: '/files/images/vipper-timekeeping-discord-bot.png',
    },
    {
      title: 'Baton Rouge RC',
      type: 'software',
      description: 'Radio control club website built with React and Node.js.',
      tags: ['React', 'Node.js'],
      source: '',
      visit: 'https://batonrougerc.com',
      image: '/files/images/batonrougerc.png',
    },
    {
      title: 'Personal Site',
      type: 'software',
      description:
        'Personal Site made with Next.js and Tailwind CSS to use as a portfolio.',
      tags: ['React', 'Node.js', 'TypeScript', 'CSS'],
      source: 'https://github.com/Cloud-121/personalsite',
      visit: 'https://lenleyngo.com',
      image: '/files/images/lnsite.png',
    },
  ];

  const ProjectCard = ({ project }: { project: Project }) => {
    const tags = project.tags ?? [];
    const hasSource = Boolean(project.source);
    const hasVisit = Boolean(project.visit);

    return (
      <div className="card card--lift flex h-full flex-col p-3">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className={`h-48 w-full rounded-[1.25rem] ${
              project.imageFit === 'contain'
                ? 'bg-[#103c4b] object-contain'
                : 'object-cover'
            }`}
            onError={(e) => {
              e.currentTarget.src =
                'https://placehold.co/600x400?text=Image+Not+Found';
            }}
          />
          {project.annotation && (
            <>
              <svg
                className="photo-note__arrow"
                viewBox="0 0 70 100"
                aria-hidden="true"
              >
                <path d="M6 96 C 8 50, 30 30, 62 22" />
                <path d="M51 14 L62 22 L52 31" />
              </svg>
              <p className="photo-note">{project.annotation}</p>
            </>
          )}
        </div>
        <div
          className={`flex flex-1 flex-col px-3 pb-3 ${
            project.annotation ? 'pt-12' : 'pt-5'
          }`}
        >
          <h3 className="font-display text-xl font-semibold">
            {project.title}
          </h3>
          <p className="text-muted mt-2 flex-grow leading-relaxed">
            {project.description}
          </p>
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {(hasSource || hasVisit) && (
            <div className="mt-5 flex flex-wrap gap-2">
              {hasSource && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-pill"
                >
                  View source
                </a>
              )}
              {hasVisit && (
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-pill"
                >
                  Visit site ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-10 sm:pt-24">
        <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
          Projects
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
          Hardware I&apos;ve designed and software I&apos;ve built, most of it
          open source.
        </p>

        <section className="mt-20" aria-labelledby="primary-heading">
          <h2
            id="primary-heading"
            className="section-title font-display text-2xl font-semibold"
          >
            Primary work
          </h2>
          {projects
            .filter((p) => p.type === 'highlight')
            .map((project) => (
              <div
                key={project.title}
                className="card mt-8 flex flex-col gap-2 p-3 md:flex-row"
              >
                <div className="md:w-2/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full max-h-72 w-full rounded-[1.25rem] object-cover md:max-h-none"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://placehold.co/600x400?text=Banner+Not+Found';
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center p-5 md:w-3/5 md:p-8">
                  <h3 className="font-display text-3xl font-semibold sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="text-muted mt-4 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {(project.tags ?? []).map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.source && (
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-pill"
                      >
                        View source
                      </a>
                    )}
                    {project.visit && (
                      <a
                        href={project.visit}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-pill button-pill--solid"
                      >
                        Visit site ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </section>

        <section className="mt-24" aria-labelledby="hardware-heading">
          <h2
            id="hardware-heading"
            className="section-title font-display text-2xl font-semibold"
          >
            Hardware design
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.type === 'hardware')
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </section>

        <section className="mt-24" aria-labelledby="software-heading">
          <h2
            id="software-heading"
            className="section-title font-display text-2xl font-semibold"
          >
            Software development
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.type === 'software')
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
