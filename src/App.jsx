import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';

import tigoriCover from './assets/tigori-cover.jpg';
import sparkCover from './assets/spark-cover.png';
import finnishCover from './assets/finnish-cover.png';
import tigoriLogo from './assets/tigori-logo.png';
import tigoriPhone from './assets/tigori-phone.png';

const projectData = {
  tigori: {
    slug: 'tigori',
    kind: 'Mobile product case',
    title: 'TIGORI',
    subtitle:
      'A coach-centered wellbeing monitoring concept for youth team sports.',
    coverImage: tigoriCover,
    coverAlt: 'TIGORI project preview',
    panelColor: '#edf5f7',
    logo: tigoriLogo,
    imageType: 'logo',
    links: {
      read: '#/project/tigori',
      demo: 'https://player.vimeo.com/video/1182267883',
      demoLabel: 'Live demo',
      embedUrl: '',
    },
    quickFacts: {
      timeline: 'Bachelor’s thesis case',
      users: 'Youth coaches + players',
      scope: 'MVP',
      role: 'Product + UX + implementation',
    },
    details: {
      overview:
        'TIGORI was developed through my bachelor’s thesis as a mobile product concept for youth ice hockey. The core idea was to support a coach-facing monitoring need: helping coaches notice patterns in player wellbeing that may influence motivation, readiness, and everyday training decisions. At the same time, the player-side experience was designed to stay lightweight, understandable, and low-pressure.',
      problem:
        'Youth coaches do not always have clear visibility into what may be happening behind a player’s behaviour in training. A player may seem tired, passive, or less motivated, while the underlying reasons may relate to poor sleep, low energy, stress, or issues outside sport. The challenge was to design a realistic way to surface these signals earlier without turning reporting into another burden for young players.',
      users:
        'The product addressed a coach-centered problem, but relied on two connected user roles. Coaches were the primary beneficiaries because they needed clearer team-level visibility into wellbeing indicators linked to motivation. Players were the main day-to-day interaction users, since the system depended on short self-reported check-ins and a lightweight engagement flow designed for adolescents.',
      role: 'Product concept, discovery synthesis, MVP definition, feature prioritisation, UX/UI design, frontend and backend implementation, and pilot-based evaluation.',
      decisions: [
        'Framed the MVP around a coach-facing monitoring problem rather than a generic athlete tracking tool.',
        'Kept the player check-in flow short and low-effort so repeated use would feel realistic for adolescents.',
        'Selected sleep quality, stress or school load, and energy level as the core indicators based on coach research findings.',
        'Used gamification as a supporting engagement layer rather than the main source of product value.',
      ],
      pilot: {
        title: 'Pilot and outcome',
        text: 'The product was tested in a two-week pilot with one youth ice hockey team. 8 players and 1 coach participated. During the pilot, 61 check-ins were submitted, which suggested repeated use rather than one-time testing.',
        signals: [
          '2-week pilot with 1 youth ice hockey team',
          '8 players and 1 coach participated',
          '61 total check-ins were submitted',
          'All 8 players completed onboarding and avatar progression basics',
          'Coach feedback was positive and no major technical problems were identified',
        ],
      },
      learnings:
        'The strongest takeaway was that the product needed to balance two perspectives at once: practical value for coaches and low-friction interaction for players. The case confirmed that simplicity was more important than feature richness, and that a coach-centered product in youth sports still depends heavily on age-appropriate player UX.',
      note: '',
    },
  },

  spark: {
    slug: 'spark',
    kind: 'Research case',
    title: 'SPARK',
    subtitle: 'A clearer dating experience shaped by user research.',
    coverImage: sparkCover,
    coverAlt: 'Spark concept preview',
    panelColor: '#ebebeb',
    links: {
      read: '#/project/spark',
      demo: 'https://tanstack-start-app.vmekza-spark-app.workers.dev/',
      demoLabel: 'Open interactive prototype',
      embedUrl: '',
    },
    quickFacts: {
      timeline: 'Independent case study',
      users: '43 Hinge users',
      scope: 'Discovery → concept',
      role: 'Research + synthesis + product concept',
    },
    details: {
      overview:
        'This was an independent qualitative research case based on direct outreach to Hinge users through my personal account. The goal was to understand what users found frustrating, what they felt was missing, and where the product experience created friction.',
      problem:
        'Dating apps often optimise for quick interaction, but that can leave users with limited control, shallow compatibility signals, and low trust in the overall experience. I wanted to explore those tensions through direct user feedback and turn them into clearer product opportunities.',
      users:
        'The research included 43 male respondents between approximately 32 and 57 years old across multiple countries and cities. Because the outreach was conducted independently through a personal account, the findings should be understood as directional qualitative insight rather than representative market research.',
      role: 'Research design, question framing, direct outreach, response review, theme clustering, insight synthesis, and translation of findings into a clickable product concept.',
      recruiterSnapshot: {
        challenge:
          'Users often describe dating app frustration in broad terms, but those complaints do not automatically translate into useful product direction. I wanted to identify repeated patterns and turn them into feature opportunities.',
        outcome:
          'I synthesised 43 open-ended responses into three clear product signals and used them to shape a clickable concept focused on missing user-facing features.',
        contribution: [
          'Designed a lightweight qualitative research prompt using the same three open-ended questions for every respondent.',
          'Collected and reviewed direct responses from Hinge users.',
          'Clustered recurring frustrations into product-relevant insight themes.',
          'Translated the strongest findings into a prototype-ready feature concept.',
        ],
        relevance: [
          'Shows how I move from raw user input to structured product thinking.',
          'Demonstrates prioritisation based on repeated user pain points rather than assumptions.',
          'Makes my research and concept process easy for recruiters to scan quickly.',
        ],
      },
      decisions: [
        'Used the same three open-ended questions for every respondent to keep responses comparable.',
        'Focused on qualitative depth instead of predefined answer choices.',
        'Clustered repeated frustrations into themes before moving into concept direction.',
        'Treated the case as exploratory product discovery, not formal market research.',
      ],
      themes: [
        {
          title: 'Limited communication after matching',
          text: 'Users wanted richer and more natural ways to interact after matching, rather than feeling restricted by a narrow messaging experience.',
        },
        {
          title: 'Weak compatibility signals',
          text: 'Many users wanted stronger profile depth and better cues for compatibility beyond appearance alone.',
        },
        {
          title: 'Low control and trust',
          text: 'Respondents described frustration around filtering, discovery, paywalls, and uncertainty about how matching works.',
        },
      ],
      opportunities: [
        {
          title: 'Richer post-match interaction',
          text: 'The concept explored ways to make conversations feel more natural and less limited once a match happens.',
        },
        {
          title: 'Stronger compatibility cues',
          text: 'The prototype focused on helping users assess fit through more meaningful profile depth and compatibility-oriented signals.',
        },
        {
          title: 'Greater user control',
          text: 'The feature direction responded to frustration around filtering, discovery, and the feeling of being constrained by the product.',
        },
      ],
      learnings:
        'This case strengthened my ability to turn messy qualitative input into clearer product direction. The strongest takeaway was that users were not only asking for more features — they were asking for more control, better signals, and a more trustworthy experience.',
      note: 'This was an independent exploratory research and concept case. It was not conducted in collaboration with Hinge and should be understood as qualitative discovery work.',
    },
  },

  finnish: {
    slug: 'finnish',
    kind: 'Upcoming project',
    title: 'Conversational Finnish app',
    subtitle: 'A future product case focused on spoken Finnish learning.',
    summary:
      'A planned case around learning conversational Finnish more naturally and with better real-life relevance.',
    cardDescription:
      'An upcoming language-learning product case that I plan to add later.',
    coverImage: finnishCover,
    coverAlt: 'Conversational Finnish app preview',
    panelColor: '#edf6f4',
    links: {
      read: '#/project/finnish',
      embedUrl: '',
    },
    quickFacts: {
      timeline: 'Planned',
      users: 'Finnish learners',
      scope: 'Future case',
      role: 'To be added',
    },
    details: {
      overview:
        'This project is planned for later and is included here as part of the portfolio structure. It will focus on spoken Finnish learning and product design for language practice that feels more natural and useful in everyday situations.',
      problem:
        'Many language-learning tools are stronger in vocabulary or grammar than in realistic conversational use.',
      users:
        'People learning Finnish who want more confidence with spoken, everyday language.',
      role: 'To be added later.',
      decisions: ['Project structure reserved for future expansion.'],
      learnings: 'This case will be added later.',
      note: 'Planned project — detailed case study not added yet.',
    },
  },
};

const projectOrder = ['tigori', 'spark'];

function getCurrentRoute() {
  const hash = window.location.hash.replace(/^#/, '');

  if (hash.startsWith('/project/')) {
    return { type: 'project', slug: hash.replace('/project/', '') };
  }

  return { type: 'home' };
}

function useHashRoute() {
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getCurrentRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className='max-w-2xl'>
      <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-black/55 backdrop-blur'>
        <Sparkles className='h-3.5 w-3.5' />
        {eyebrow}
      </div>

      {title ? (
        <h2 className='text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl'>
          {title}
        </h2>
      ) : null}

      {text ? (
        <p className='mt-4 text-base leading-7 text-neutral-600 md:text-lg'>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function FloatingOrb({ className, style }) {
  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-full blur-3xl ${className}`}
      style={style}
      animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

function ProjectVisual({ project }) {
  if (project.coverImage) {
    const isSpark = project.slug === 'spark';

    return (
      <div
        className={`relative h-full min-h-[320px] overflow-hidden ${
          isSpark ? 'bg-[#FAF9F6]' : 'bg-neutral-200'
        }`}
      >
        <div
          className={`flex h-full w-full items-center justify-center ${
            isSpark ? 'p-8' : ''
          }`}
        >
          <img
            src={project.coverImage}
            alt={project.coverAlt || project.title}
            className={
              isSpark
                ? 'max-h-[320px] w-auto object-contain'
                : 'h-full w-full object-cover'
            }
          />
        </div>

        {project.slug === 'tigori' && (
          <img
            src={tigoriPhone}
            alt='TIGORI phone preview'
            className='absolute bottom-10 right-10 z-10 w-[100px] md:w-[110px] lg:w-[100px] drop-shadow-2xl'
          />
        )}
      </div>
    );
  }

  if (project.imageType === 'logo' && project.logo) {
    return (
      <div className='flex h-full min-h-[320px] items-center justify-center bg-[#f3f2f2] p-8'>
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className='w-full max-w-[250px] object-contain'
        />
      </div>
    );
  }

  return (
    <div className='flex h-full min-h-[320px] items-center justify-center bg-[#f3f2f2] p-8'>
      <span className='text-lg text-neutral-500'>{project.title}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className='overflow-hidden rounded-[22px] border border-white/60 bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl'>
      <div className='flex h-full flex-col'>
        <div className='h-[260px]'>
          <ProjectVisual project={project} />
        </div>

        <div
          className='flex flex-1 flex-col px-8 py-8'
          style={{ backgroundColor: project.panelColor || '#eef4f6' }}
        >
          <p className='text-[12px] font-medium uppercase tracking-[0.22em] text-neutral-500'>
            {project.kind}
          </p>

          <h3 className='mt-9 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl'>
            {project.title}
          </h3>

          <p className='mt-2 text-base leading-7 text-neutral-800'>
            {project.subtitle}
          </p>

          <p className='mt-3 text-sm leading-6 text-neutral-600'>
            {project.cardDescription}
          </p>

          <div className='mt-auto pt-6'>
            <a
              href={project.links.read}
              className='inline-flex items-center justify-center rounded-lg border-[2px] border-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white'
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function HomePage() {
  return (
    <>
      <section
        id='about'
        className='mx-auto max-w-6xl pt-10 pb-14 md:pt-16 lg:pb-18'
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className='text-left'
        >
          <h1 className='max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tight text-neutral-950 md:text-5xl'>
            Hello, my name is Ekaterina.
          </h1>
          <h2 className='max-w-4xl text-4xl leading-[1] tracking-tight text-neutral-950 md:text-3xl'>
            <br />I love combining technology, user experience, and product
            thinking.
          </h2>
        </motion.div>
      </section>

      <section id='projects' className='mx-auto max-w-6xl py-4'>
        <div className='mt-10 grid gap-8 md:grid-cols-2'>
          {projectOrder.map((slug) => (
            <ProjectCard key={slug} project={projectData[slug]} />
          ))}
        </div>
      </section>

      <section id='contact' className='mx-auto max-w-6xl py-24'>
        <div className='flex justify-end border-t border-black/10 pt-8'>
          <div className='flex flex-wrap items-center gap-3'>
            <a
              href='mailto:vmekza@gmail.com'
              className='inline-flex items-center rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:bg-[#9A90E6] hover:text-white'
            >
              vmekza@gmail.com
            </a>

            <a
              href='https://www.linkedin.com/in/vmekza/'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:bg-[#9A90E6] hover:text-white'
            >
              LinkedIn
              <ExternalLink className='h-4 w-4' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailBlock({ label, children }) {
  return (
    <div className='rounded-[28px] border border-white/60 bg-white/72 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl'>
      <p className='text-xs uppercase tracking-[0.22em] text-neutral-500'>
        {label}
      </p>
      <div className='mt-3 text-[15px] leading-7 text-neutral-600'>
        {children}
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className='space-y-3'>
      {items.map((item) => (
        <li key={item} className='flex gap-3'>
          <span className='mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950' />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MetaLine({ items }) {
  return (
    <div className='mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm text-neutral-600'>
      {items.map((item, index) => (
        <React.Fragment key={item}>
          <span>{item}</span>
          {index !== items.length - 1 ? (
            <span className='text-neutral-400'>•</span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

function TigoriProjectDetailPage({ project }) {
  const metaItems = [
    project.quickFacts.timeline,
    project.quickFacts.users,
    project.quickFacts.scope,
    project.quickFacts.role,
  ];

  return (
    <section className='mx-auto max-w-4xl py-10'>
      <div>
        <div className='mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neutral-600'>
          {project.kind}
        </div>

        <h1 className='text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl'>
          {project.title}
        </h1>

        <p className='mt-4 max-w-3xl text-lg leading-8 text-neutral-600'>
          {project.summary}
        </p>

        <MetaLine items={metaItems} />

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='#/'
            className='inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
          >
            All projects
            <ArrowRight className='h-4 w-4' />
          </a>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:bg-[#7A72B8] hover:text-white'
            >
              {project.links.demoLabel || 'View live demo'}
              <ExternalLink className='h-4 w-4' />
            </a>
          )}
        </div>
      </div>

      <div className='mt-8 h-px bg-black/8' />

      <div className='mt-8 space-y-6'>
        <DetailBlock label='Overview'>{project.details.overview}</DetailBlock>

        <DetailBlock label='Problem'>{project.details.problem}</DetailBlock>

        <DetailBlock label='Users'>{project.details.users}</DetailBlock>

        <DetailBlock label='My role'>{project.details.role}</DetailBlock>

        <DetailBlock label='Key decisions'>
          <BulletList items={project.details.decisions} />
        </DetailBlock>

        {project.details.pilot && (
          <DetailBlock label={project.details.pilot.title}>
            <p className='mb-4'>{project.details.pilot.text}</p>
            <BulletList items={project.details.pilot.signals} />
          </DetailBlock>
        )}

        <DetailBlock label='What I learned'>
          {project.details.learnings}
        </DetailBlock>

        {project.details.note ? (
          <DetailBlock label='Note'>{project.details.note}</DetailBlock>
        ) : null}
      </div>
    </section>
  );
}

function SparkProjectDetailPage({ project }) {
  const metaItems = [
    project.quickFacts.timeline,
    project.quickFacts.users,
    project.quickFacts.scope,
    project.quickFacts.role,
  ];

  return (
    <section className='mx-auto max-w-4xl py-10'>
      <div>
        <div className='mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neutral-600'>
          {project.kind}
        </div>

        <h1 className='text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl'>
          {project.title}
        </h1>

        <p className='mt-4 max-w-3xl text-lg leading-8 text-neutral-600'>
          {project.summary}
        </p>

        <MetaLine items={metaItems} />

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='#/'
            className='inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
          >
            All projects
            <ArrowRight className='h-4 w-4' />
          </a>

          {project.links.demo && (
            <a
              href={project.links.demo}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors duration-300 hover:bg-[#7A72B8] hover:text-white'
            >
              {project.links.demoLabel || 'Open interactive prototype'}
              <ExternalLink className='h-4 w-4' />
            </a>
          )}
        </div>
      </div>

      <div className='mt-8 h-px bg-black/8' />

      <div className='mt-8 space-y-6'>
        <DetailBlock label='Overview'>{project.details.overview}</DetailBlock>

        <DetailBlock label='Problem'>{project.details.problem}</DetailBlock>

        <DetailBlock label='Users'>{project.details.users}</DetailBlock>

        <DetailBlock label='My role'>{project.details.role}</DetailBlock>

        {project.details.recruiterSnapshot && (
          <>
            <DetailBlock label='Challenge'>
              {project.details.recruiterSnapshot.challenge}
            </DetailBlock>

            <DetailBlock label='Outcome'>
              {project.details.recruiterSnapshot.outcome}
            </DetailBlock>

            <DetailBlock label='What I did'>
              <BulletList
                items={project.details.recruiterSnapshot.contribution}
              />
            </DetailBlock>

            <DetailBlock label='Why it matters'>
              <BulletList items={project.details.recruiterSnapshot.relevance} />
            </DetailBlock>
          </>
        )}

        <DetailBlock label='Research approach'>
          <BulletList items={project.details.decisions} />
        </DetailBlock>

        {project.details.themes && (
          <DetailBlock label='Top insight themes'>
            <div className='space-y-4'>
              {project.details.themes.map((theme) => (
                <div
                  key={theme.title}
                  className='rounded-[22px] border border-black/6 bg-white/85 p-4'
                >
                  <h4 className='text-sm font-semibold text-neutral-950'>
                    {theme.title}
                  </h4>
                  <p className='mt-2 text-sm leading-6 text-neutral-600'>
                    {theme.text}
                  </p>
                </div>
              ))}
            </div>
          </DetailBlock>
        )}

        {project.details.opportunities && (
          <DetailBlock label='How the insights were translated into the concept'>
            <div className='space-y-4'>
              {project.details.opportunities.map((item) => (
                <div
                  key={item.title}
                  className='rounded-[22px] border border-black/6 bg-white/85 p-4'
                >
                  <h4 className='text-sm font-semibold text-neutral-950'>
                    {item.title}
                  </h4>
                  <p className='mt-2 text-sm leading-6 text-neutral-600'>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </DetailBlock>
        )}

        <DetailBlock label='What I learned'>
          {project.details.learnings}
        </DetailBlock>

        {project.details.note ? (
          <DetailBlock label='Note'>{project.details.note}</DetailBlock>
        ) : null}
      </div>
    </section>
  );
}

function ProjectDetailPage({ project }) {
  if (project.slug === 'spark') {
    return <SparkProjectDetailPage project={project} />;
  }

  if (project.slug === 'tigori') {
    return <TigoriProjectDetailPage project={project} />;
  }

  return (
    <section className='mx-auto max-w-4xl py-10'>
      <div>
        <div className='mb-6 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neutral-600'>
          {project.kind}
        </div>

        <h1 className='text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl'>
          {project.title}
        </h1>

        <p className='mt-4 max-w-3xl text-lg leading-8 text-neutral-600'>
          {project.summary}
        </p>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href='#/'
            className='inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
          >
            All projects
            <ArrowRight className='h-4 w-4' />
          </a>
        </div>
      </div>

      <div className='mt-8 h-px bg-black/8' />

      <div className='mt-8 space-y-6'>
        <DetailBlock label='Overview'>{project.details.overview}</DetailBlock>
        <DetailBlock label='Problem'>{project.details.problem}</DetailBlock>
        <DetailBlock label='Users'>{project.details.users}</DetailBlock>
        <DetailBlock label='My role'>{project.details.role}</DetailBlock>
        <DetailBlock label='Key decisions'>
          <BulletList items={project.details.decisions} />
        </DetailBlock>
        <DetailBlock label='What I learned'>
          {project.details.learnings}
        </DetailBlock>
      </div>
    </section>
  );
}

export default function PMPortfolioLanding() {
  const containerRef = React.useRef(null);
  const route = useHashRoute();
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (event) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const accent = useMemo(() => {
    const hueA = 200 + mouse.x * 0.3;
    const hueB = 280 - mouse.y * 0.35;

    return {
      background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, hsla(${hueA}, 90%, 82%, 0.55), transparent 22%), radial-gradient(circle at ${100 - mouse.x}% ${100 - mouse.y}%, hsla(${hueB}, 82%, 80%, 0.36), transparent 26%), linear-gradient(180deg, #f8f8f6 0%, #efefec 100%)`,
    };
  }, [mouse]);

  const activeProject =
    route.type === 'project'
      ? projectData[route.slug] || projectData.tigori
      : null;

  return (
    <div
      ref={containerRef}
      className='min-h-screen overflow-x-hidden text-neutral-900'
      style={{ background: accent.background }}
    >
      <div className='relative mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-8 lg:px-10'>
        <FloatingOrb className='left-10 top-24 h-44 w-44 bg-cyan-200/35' />
        <FloatingOrb
          className='right-12 top-64 h-56 w-56 bg-fuchsia-200/25'
          style={{ animationDelay: '1s' }}
        />
        <FloatingOrb
          className='bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 bg-sky-100/35'
          style={{ animationDelay: '2s' }}
        />

        <header className='sticky top-4 z-30 mb-10'>
          <div className='mx-auto flex max-w-6xl items-center justify-between border-b border-black/10 py-3'>
            <a href='#/' className='text-sm font-medium text-neutral-900'>
              vmekza
            </a>

            <nav className='hidden items-center gap-6 text-sm text-neutral-600 md:flex'>
              <a href='#about' className='transition hover:text-neutral-950'>
                About
              </a>
              <a href='#projects' className='transition hover:text-neutral-950'>
                Projects
              </a>
              <a href='#contact' className='transition hover:text-neutral-950'>
                Contact
              </a>
            </nav>
          </div>
        </header>

        {route.type === 'home' ? (
          <HomePage />
        ) : (
          <ProjectDetailPage project={activeProject} />
        )}
      </div>
    </div>
  );
}
