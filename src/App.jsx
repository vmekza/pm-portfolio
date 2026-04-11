import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import tigoriLogo from './assets/tigori-logo.png';

const projectData = {
  tigori: {
    slug: 'tigori',
    kind: 'Mobile product case',
    title: 'TIGORI',
    subtitle: 'Motivation and wellbeing support for youth team sports.',
    summary:
      'A product case built around youth team sports motivation, lightweight check-ins, and better coach visibility into wellbeing patterns.',
    cardDescription:
      'A thesis-driven product case focused on motivation, wellbeing, and product decisions for youth team sports.',
    imageType: 'logo',
    logo: tigoriLogo,
    links: {
      read: '#/project/tigori',
      demo: 'https://player.vimeo.com/video/1182267883',
      demoLabel: 'View live app demo',
      embedUrl: '',
    },
    quickFacts: {
      timeline: 'Bachelor’s thesis case',
      users: 'Youth athletes + coaches',
      scope: 'MVP',
      role: 'Product + UX + implementation',
    },
    details: {
      overview:
        'TIGORI was explored through my bachelor’s thesis as a mobile product concept for youth team sports. The idea focused on supporting motivation and self-reflection for players while also helping coaches notice wellbeing-related signals earlier.',
      problem:
        'Young athletes do not always openly communicate how they feel, and coaches often need better visibility into what may be behind behaviour, energy, or motivation changes. The challenge was to create a lightweight and realistic interaction, not another heavy tracking tool.',
      users:
        'Primary users were youth athletes in team sports. Secondary users were coaches who needed simple, useful visibility into team wellbeing patterns.',
      role: 'Product concept, MVP definition, feature prioritization, UX/UI design, frontend and backend implementation, and pilot-based reflection.',
      decisions: [
        'Kept the core interaction lightweight so the product would feel realistic in everyday sports routines.',
        'Designed different value for players and coaches instead of treating them as one user group.',
        'Used gamification as a supporting layer rather than the entire reason to use the product.',
        'Focused the MVP on one context first instead of trying to solve every sports use case at once.',
      ],
      learnings:
        'The most important insight was that simplicity mattered more than feature richness. A youth-focused product needed low-friction interaction, clear purpose, and a careful balance between motivation and usability.',
    },
  },

  hinge: {
    slug: 'hinge',
    kind: 'Research case',
    title: 'Exploratory research with Hinge users',
    subtitle:
      'An independent qualitative research exercise focused on dating app behaviour, unmet needs, and product friction.',
    summary:
      'An exploratory research case based on direct outreach to Hinge users. I asked the same three open-ended questions to understand what users find frustrating, what features they wish existed, and whether dating apps reflect what they are actually looking for.',
    cardDescription:
      'A qualitative research case based on direct user outreach, theme clustering, and product-oriented insight synthesis.',
    imageType: 'gradient',
    gradient: 'bg-[linear-gradient(135deg,#111827_0%,#7A72B8_100%)]',
    badge: 'Research',
    links: {
      read: '#/project/hinge',
      embedUrl: '',
    },
    quickFacts: {
      timeline: 'Independent research work',
      users: '43 respondents',
      scope: '3 open-ended questions',
      role: 'Research + synthesis',
    },
    details: {
      overview:
        'This project was an independent qualitative research exercise based on direct outreach to Hinge users through my personal account. I asked the same three questions in order to understand what users dislike, what features they wish existed, and whether dating apps actually reflect what they are looking for.',
      problem:
        'Dating apps may appear simple on the surface, but user frustration often builds around unclear matching logic, limited interaction tools, pricing pressure, and weak signals of real compatibility. I wanted to explore these frustrations through direct user responses rather than assumptions.',
      users:
        'The research included 43 male respondents between approximately 32 and 57 years old across multiple countries and cities. Since this was exploratory outreach through a personal account, I treat the findings as directional qualitative insight rather than a representative study.',
      role: 'Research design, question framing, direct outreach, response review, theme clustering, and insight synthesis.',
      decisions: [
        'Used the same three open-ended questions for every respondent to keep the answers comparable.',
        'Focused on qualitative input instead of forcing respondents into predefined answer options.',
        'Grouped raw responses into recurring themes in order to translate them into product-relevant insight.',
        'Treated the work as exploratory discovery, not as formal market research or statistically representative evidence.',
      ],
      themes: [
        {
          title: 'Messenger limitations',
          text: 'Users wanted richer interaction tools such as sharing multiple photos, easier video-call initiation, editing messages, and better ways to revisit earlier profiles or chats.',
        },
        {
          title: 'Filtering and paywalls',
          text: 'Respondents wanted more filtering options without being pushed toward paid plans for what they considered basic refinement and search control.',
        },
        {
          title: 'Profile depth and compatibility',
          text: 'Many users wanted more meaningful profile fields, prompts, quizzes, or other ways to surface deeper compatibility beyond appearance.',
        },
        {
          title: 'Algorithm transparency',
          text: 'Some respondents did not trust how matching worked and felt that appearance was prioritised over more meaningful factors.',
        },
        {
          title: 'UI and usability friction',
          text: 'There were comments about hidden actions, difficult controls, and a general expectation that core features like location and notifications should work more intuitively.',
        },
      ],
      learnings:
        'This project strengthened my ability to identify patterns in unstructured responses and translate them into product insight. The strongest signals pointed to low trust in matching logic, frustration with communication limitations, and a desire for deeper compatibility cues.',
      note: 'This was an independent exploratory research exercise conducted through direct outreach from a personal account. It should be understood as qualitative discovery work, not formal academic or market research.',
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
    imageType: 'gradient',
    gradient: 'bg-[linear-gradient(135deg,#B6E3E6_0%,#f3f2f2_100%)]',
    badge: 'Coming later',
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

const projectOrder = ['tigori', 'hinge', 'finnish'];

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
      <h2 className='text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl'>
        {title}
      </h2>
      <p className='mt-4 text-base leading-7 text-neutral-600 md:text-lg'>
        {text}
      </p>
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
  if (project.imageType === 'logo') {
    return (
      <div className='flex h-full min-h-[280px] items-center justify-center rounded-[28px] border border-black/8 bg-[#f3f2f2] p-8'>
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className='w-full max-w-[250px] object-contain'
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full min-h-[280px] items-end rounded-[28px] border border-black/8 p-6 text-white ${project.gradient}`}
    >
      <div>
        <div className='mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/85'>
          {project.badge}
        </div>

        <p className='max-w-xs text-sm leading-6 text-white/85'>
          {project.subtitle}
        </p>

        {project.slug === 'hinge' && (
          <div className='mt-5 flex flex-wrap gap-2'>
            <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/85'>
              43 respondents
            </span>
            <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/85'>
              3 questions
            </span>
            <span className='rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-white/85'>
              Qualitative
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className='grid gap-6 rounded-[34px] border border-white/60 bg-white/72 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-7'>
      <ProjectVisual project={project} />

      <div className='flex flex-col justify-between'>
        <div>
          <div className='mb-4 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-neutral-600'>
            {project.kind}
          </div>

          <h3 className='text-3xl font-semibold tracking-tight text-neutral-950'>
            {project.title}
          </h3>

          <p className='mt-3 max-w-2xl text-base leading-7 text-neutral-600'>
            {project.cardDescription}
          </p>
        </div>

        <div className='mt-8 flex flex-wrap gap-3'>
          <a
            href={project.links.read}
            className='inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px]'
          >
            Read more
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
    </div>
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
          <h1 className='max-w-5xl text-5xl font-semibold leading-[0.95] tracking-tight text-neutral-950 md:text-7xl'>
            Building thoughtful digital products through empathy and clarity.
          </h1>

          <p className='mt-7 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl'>
            Hello, I’m Ekaterina. I combine a software engineering background
            with a strong interest in HCI and UX.
          </p>
        </motion.div>
      </section>

      <section id='projects' className='mx-auto max-w-6xl py-6'>
        <SectionHeading
          eyebrow='Selected work'
          title='Projects and research cases'
          text='A growing portfolio of product work, research thinking, and case-based problem solving. Each project opens into its own detailed page.'
        />

        <div className='mt-10 space-y-8'>
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

function QuickFact({ label, value }) {
  return (
    <div className='min-h-[124px] rounded-[22px] border border-black/6 bg-white/85 p-4'>
      <p className='text-[11px] uppercase tracking-[0.18em] text-neutral-500'>
        {label}
      </p>
      <p className='mt-2 text-sm font-medium text-neutral-900'>{value}</p>
    </div>
  );
}

function ProjectMediaPanel({ project }) {
  if (project.links.embedUrl) {
    return (
      <div className='overflow-hidden rounded-[28px] border border-white/60 bg-white/72 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl'>
        <div className='aspect-video w-full'>
          <iframe
            src={project.links.embedUrl}
            title={`${project.title} demo video`}
            className='h-full w-full'
            allow='autoplay; fullscreen; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  if (project.imageType === 'logo') {
    return (
      <div className='rounded-[28px] border border-white/60 bg-white/72 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl'>
        <div className='flex min-h-[240px] items-center justify-center rounded-[22px] border border-black/8 bg-[#f3f2f2] p-6'>
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            className='w-full max-w-[230px] object-contain'
          />
        </div>
      </div>
    );
  }

  return (
    <div className='rounded-[28px] border border-white/60 bg-white/72 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl'>
      <div
        className={`flex min-h-[250px] items-end rounded-[22px] border border-black/8 p-6 text-white ${project.gradient}`}
      >
        <div>
          <div className='mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/85'>
            {project.badge}
          </div>
          <p className='max-w-xs text-sm leading-6 text-white/85'>
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailPage({ project }) {
  const isResearchCase = project.kind === 'Research case';

  return (
    <section className='mx-auto max-w-6xl py-10'>
      {/* <a
        href='#/'
        className='mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-neutral-700 transition hover:bg-white'
      >
        <ArrowLeft className='h-4 w-4' />
        Back to projects
      </a> */}

      <div className='max-w-4xl'>
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

      <div className='mt-10 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch'>
        <ProjectMediaPanel project={project} />

        <div className='grid gap-4 sm:grid-cols-2'>
          <QuickFact label='Timeline' value={project.quickFacts.timeline} />
          <QuickFact label='Users' value={project.quickFacts.users} />
          <QuickFact label='Scope' value={project.quickFacts.scope} />
          <QuickFact label='Role' value={project.quickFacts.role} />
        </div>
      </div>

      <div className='mt-8 grid gap-6 lg:grid-cols-2'>
        <div className='space-y-6'>
          <DetailBlock label='Overview'>{project.details.overview}</DetailBlock>
          <DetailBlock label='Problem'>{project.details.problem}</DetailBlock>
        </div>

        <div className='space-y-6'>
          <DetailBlock label='Users'>{project.details.users}</DetailBlock>
          <DetailBlock label='My role'>{project.details.role}</DetailBlock>
        </div>
      </div>

      <div className='mt-8 h-px bg-black/8' />

      <div className='mt-8 space-y-6'>
        <DetailBlock
          label={isResearchCase ? 'Research approach' : 'Key decisions'}
        >
          <div className='grid gap-4 md:grid-cols-2'>
            {project.details.decisions.map((item, index) => (
              <div
                key={item}
                className='flex gap-4 rounded-[22px] border border-black/6 bg-white/85 p-4'
              >
                <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-xs font-semibold text-white'>
                  {index + 1}
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </DetailBlock>

        {project.details.themes && (
          <DetailBlock label='Key themes'>
            <div className='grid gap-4 md:grid-cols-2'>
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

        <div className='grid gap-6 lg:grid-cols-2'>
          <DetailBlock label='What I learned'>
            {project.details.learnings}
          </DetailBlock>

          {project.details.note ? (
            <DetailBlock label='Note'>{project.details.note}</DetailBlock>
          ) : (
            <div />
          )}
        </div>
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
          <div className='mx-auto flex max-w-6xl justify-between rounded-full'>
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
