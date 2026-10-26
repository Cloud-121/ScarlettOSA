'use client';
import SiteHeader from '@/components/SiteHeader';

const skills = [
  {
    label: 'Programming languages',
    value: 'Python, JavaScript, C++, Rust, Bash, PowerShell',
  },
  { label: 'DevOps / orchestration', value: 'Kubernetes, Docker' },
  {
    label: 'Operating systems',
    value: 'Linux (Debian-based, Arch-based, and Alpine-based distributions)',
  },
  { label: 'Version control', value: 'Git & GitHub' },
  {
    label: 'Software development',
    value:
      'Plugin Development, Automation, Tool Creation, Modular Designs, Team Collaboration',
  },
  { label: 'Hardware', value: 'PCB Design, 3D Modeling, Reverse Engineering' },
  { label: 'Licenses', value: 'FCC-licensed amateur radio operator' },
];

export default function About() {
  console.log(`

                                  .            .
       .                     .                                    .
                  .

                                                               ..      .
                  .           .                                         .
                           .....     .                      .....
                            ..-...      .  .......... ......=::.. .            .
                          ......-... ......=......:=..:*......-.
                          ..:......-.*==*..-.::..::*:.-.:--...:.  .
                          ...:.  .+..=+-=:.:...-+::.=-@.=.....::
                          ......::.==+*:=..-.:. .:-..:.:*=.-*.*.
  .                         .-.=.+:=:*%#-...........=::..:-:.*..   .
                           ...=:=.+.%.:::::.*.......::+...:.#.=.
                            .-.+.=+:..+-.=-..*.==#....-=..:.:*#-..
                          ..-++=.#+....+...-=.-.+.#....=+:.::*:=..
                          ..*+:-:.=-:..--...=%.*:%--...:=.=+:===..
.                     .   ..-*%..#*.:=.....+++...:.@*=:.:.=.#=*==.
.                         ..-=@*+-#..=.......#-.%=:.%.+-...+.%:.-.        .
..       .                ..-@%+..*==....  ............:*..-+.=%..
=.                        ...=#=....... .         ......:%..+-%@+.
==..                   .:-:.*+%:.....-#%#--::=.. ...:-..:#+...*+:+..
.=+...               ...=-.+=.*=...#=-===-=+#.  ....+:.-**:%.-*.+--:.... .
..+=...          .   ......*...@+. .+-*@#@=*.. ....==+::...:#:#.+%-:.:.
 ..-==...            .....:..:..:#...@....*......%:.%-:-.::=#.#::.@.:...
  ...=+....            ...-..+....-:..::-:...=**:..*@-.:-:.#+.*:-+.%-=...
. .....**...         ....:......-...%....*+*.%:....=@-:..:+--%..#*=.=:-...       .
.    ....=*.....    ....-...=..--...-...-+@.-..:..:.@@@@:=:#.:::-+.-.:.-..     .
 .     ...--=:...  ..:-=...-.*+-..=-...*%@%.......+##%#@-#=:.--..=..-=:....    .
         ....*+#....::=.....==-....:=@-#%+:*#%@%@:+=*@#%--+.:==:*.:....:...
             ...*+*-:.....%@***+-%=*+=-%%:%=.#*##%-=-:+#....*..+*#+..+=..
            . .....+**+**:.-.:....-=+=-*:#-=#+:-*+..=:.........:.#%-=.+...
.       .       ..-....+++*=+*+:....-.:.@.-..=-...+...       ..-.::...:-:..
   .           ........+:-...-........-=+:-....-:....        ..=......-.-...
.         .     .:..:.+*........    ..-*-...++.....          ........=..-...
.             ......::##@#+*.+:.     ...:#*..              .     ...-...=.:.  .
.             ..:%...+*..#:=%-....                 .         .  ...-.   =..:..
.             ..@..+..+.:*.=#:.:..                 ..   ......+--...    =..+...
            . .-+#.#..@.:#.*%......                ..:%:...........@....=.:+... ..
              ..@--#::%+:..--...:.....             ..%...:........:.++..=.:.......
              ..#@....*@##*+-..:::::...... ..........%.+........:..-+*:.=... ...:.
              ..:%-....=@%+.:+.......-..-. ..+--:....*.%.......::..#.**.-.........
          .....-#++###+:=%+.-.:.-.-...........--..:.......#--#-.=-.*.:=+=+.:..:...
           .:.-.%=.......@--..=.:..:-..=...:..:.:........=-%--%=:*...%+.=-.......:
           ..-:.*:.:....-=:%..-. ......-.. -... .-...-...-. ..=.*@%.*..=*:...:....
.          .-..:=.........@--...-:....::...:..::..-..:.-:.....%......:..#.:..-....
  .      ..-.--:=.      ..#+#.--....:..:......:......:.........=..  .-..+.-..-..
.      ...::....+.      ...@##:=....:..:....-.:..-...:--... .%%++.  ....+-.=.:.. .
.       .:...:..+....     .***.*.....::.......... ... ...   .*%@:.  ... *=*#.-..
          ..:..:@.        .+*.-.-=...                       .#.%*.      *.++....
..       .......:=...     .:%+-.::=...          .         . +:.+%..   ..+--.:.
..  .    ....:....+..     .==.:.....:..                   ..#..#*:..  ...=:...
..       ...::...%:*.......-#-=.........                  ...%-.:%:....=:...=..
..         ...  ..#.**..:..*:...                           ...=#%==...:...:....
..              ....=@...#*+...                              ..#*@.:.....-:....

  `);

  return (
    <div className="min-h-screen w-full">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-10 sm:pt-24">
        <p className="font-display text-lg font-medium text-[var(--pink)]">
          nice to meet you!
        </p>
        <h1 className="font-display mt-2 text-5xl font-semibold leading-[1.05] sm:text-6xl">
          About me
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">
          My name is Lenley, but I often go by <strong>Scarlett</strong> online.
          I&apos;m passionate about{' '}
          <strong>open-source software and hardware</strong>, and I enjoy
          learning and pushing my boundaries in many of the fields I&apos;m in.
        </p>

        <h2 className="section-title font-display mt-20 text-2xl font-semibold">
          Current work
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          I&apos;ve partnered with companies and currently manage{' '}
          <a href="https://gulfcoastmesh.org/" className="link">
            Gulf Coast Mesh
          </a>
          , a project building a <strong>statewide mesh network</strong> that
          interconnects communities across Louisiana and the broader Gulf Coast.
          I work with volunteers and industry partners to grow resilient radio
          infrastructure using open mesh technologies like MeshCore.
        </p>

        <h2 className="section-title font-display mt-20 text-2xl font-semibold">
          Interests
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          I&apos;m a <strong>strong believer</strong> in the{' '}
          <strong>
            fundamental freedom that open-source software and hardware provide
            across all fields
          </strong>
          . I firmly believe in your right to use technology as you see fit.
          Open source has been instrumental not only in preserving my own
          freedoms but also in helping me learn and discover new technologies
          and techniques, both as a developer and as an individual.
        </p>

        <h2 className="section-title font-display mt-20 text-2xl font-semibold">
          Goals
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          My main goal is to push myself further in the{' '}
          <strong>world of open-source</strong>. I&apos;m driven to discover new
          innovations and make meaningful contributions to open-source projects,
          and seeking challenges that expand my knowledge and stregthen my
          understanding.
        </p>

        <h2 className="section-title font-display mt-20 text-2xl font-semibold">
          Skills
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          I&apos;m a <strong>tinkerer at heart</strong>, constantly exploring
          and expanding my knowledge. My passion lies in open-source software
          and hardware, where I love to build and contribute. I&apos;m always
          pushing my skills by working on many types of projects, many of which
          you can find on my GitHub.
        </p>
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.label} className="card p-5">
              <dt className="chip__label">{skill.label}</dt>
              <dd className="mt-2 leading-relaxed">{skill.value}</dd>
            </div>
          ))}
        </dl>

        <section className="note mt-20 max-w-2xl !rotate-0 !bg-[var(--pink-soft)] p-8">
          <h2 className="font-display text-3xl font-semibold">Say hi!</h2>
          <p className="mt-3 text-lg leading-relaxed">
            If you&apos;d like to reach out, feel free to email me at{' '}
            <a className="link" href="mailto:contact@lenleyngo.com">
              contact@lenleyngo.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
