import Link from 'next/link';
import {getPostsMetaData} from './lib/mdx-data';

type Role = {
    title: string;
    dates: string;
    points: React.ReactNode[];
};

type Experience = {
    company: string;
    href?: string;
    role: string;
    dates: string;
    location: string;
    roles?: Role[];
    points?: React.ReactNode[];
    open?: boolean;
};

const ext = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="underline decoration-neutral-300 underline-offset-2 hover:decoration-neutral-600 dark:decoration-neutral-600 dark:hover:decoration-neutral-300">
        {label}
    </a>
);

const experiences: Experience[] = [
    {
        company: 'Heidi Health',
        href: 'https://heidihealth.com',
        role: 'Engineering Lead',
        dates: '2024 — Present',
        location: 'Melbourne',
        open: true,
        roles: [
            {
                title: 'Engineering Lead',
                dates: 'Jul 2026 — Present',
                points: [
                    "Leading the engineering team behind Heidi's cross-organisation enterprise and compliance programs.",
                    'Driving the design of our new feature flags platform and the migration onto it.',
                    'Leading the engineering work towards medical device certification and enterprise readiness.',
                    'Designing CI/CD pipelines for compliant releases, and owning QA strategy and best practices.',
                    'Working with our largest enterprise customers to design and deliver bespoke solutions that fit Heidi into their workflows.',
                ],
            },
            {
                title: 'Engineering Lead, Integrations',
                dates: 'Jan 2025 — Jul 2026',
                points: [
                    'Led the team connecting Heidi with EMR and hospital systems across the globe, securely and at scale.',
                    'Partnered with EMR vendors including Epic, Athena, Veradigm, EMIS and Gentu.',
                    'Worked directly with enterprise customers to set up and roll out Heidi in their Epic environments.',
                    'Built API and FHIR-based integrations for reliable, bidirectional clinical data exchange within provider workflows.',
                ],
            },
            {
                title: 'Senior Frontend Engineer',
                dates: 'Jun 2024 — Jan 2025',
                points: [
                    "Worked on Heidi's flagship scribe product, and led the front end development of Heidi's integrations.",
                ],
            },
        ],
    },
    {
        company: 'Uuvipak',
        role: 'Co-Founder & COO',
        dates: '2021 — 2023',
        location: 'Brisbane',
        points: [
            'Co-founded Uuvipak to eradicate single use plastic packaging by upcycling clean organic food manufacturing byproducts.',
            <>Selected for the {ext('https://www.techstars.com/newsroom/announcing-12-startups-in-the-techstars-farm-to-fork-class-of-2023', 'Techstars Farm to Fork accelerator')}, won the {ext('https://www.nespresso.com/au/en/startcup-challenge', 'Nespresso StartCup challenge')} and was nominated in The Australian's Top Innovators of 2023.</>,
        ],
    },
    {
        company: 'Clarivate',
        role: 'Senior UX Developer',
        dates: '2019 — 2021',
        location: 'Brisbane & Pittsburgh',
        points: [
            "Led one of Clarivate's UX and Front End teams, working on IP protection and examination platforms.",
            <>Designed and built the {ext('https://eliss.wineaustralia.com', 'Wine Australia Export Label Search System')} and IP Australia's internal examination tools for patents and trade marks.</>,
        ],
    },
    {
        company: 'TrademarkVision',
        href: 'https://trademark.vision',
        role: 'Senior Front End & UX Developer',
        dates: '2015 — 2019',
        location: 'Brisbane & Pittsburgh',
        points: [
            "Led the Front End and UX team building TrademarkVision's AI powered visual search engine for trademarks.",
            <>Designed and built IP Australia's {ext('https://search.ipaustralia.gov.au/designs', 'Trade Mark and Design Search')}, {ext('https://tmgns.search.ipaustralia.gov.au', 'Goods and Services Classification')} and Trade Mark Assist.</>,
        ],
    },
    {
        company: 'University of Queensland',
        role: 'Front End Developer',
        dates: '2015 — 2016',
        location: 'Brisbane',
        points: [
            'Built an internal tool, with the schools of ITEE and Engineering, that helped students discover study paths aligned with university requirements.',
        ],
    },
    {
        company: 'Freelance',
        role: 'Developer & Designer',
        dates: '2008 — 2015',
        location: 'Italy, UK, China, Australia',
        points: [
            'Websites and digital products for small businesses, a museum showcase for a local gallery, and IT support for local schools.',
        ],
    },
];

const projects = [
    {
        name: 'Sugo',
        href: 'https://sugoflights.app',
        description: 'Personal flight diary and live flight tracking. Flutter, Kotlin, Postgres.',
    },
    {
        name: 'Libro',
        href: 'https://readwithlibro.app',
        description: 'Neighbourhood book sharing. Flutter, Kotlin, Postgres.',
    },
    {
        name: 'Gomoku Studio',
        href: 'https://gomoku.studio',
        description: "My independent studio: UX and front end work for EMBL-EBI's BioModels, Perth Children's Hospital, Octfolio and Lewi.",
    },
];

const links = [
    {label: 'LinkedIn', href: 'https://linkedin.com/in/andreaepifani'},
    {label: 'GitHub', href: 'https://github.com/andyepx'},
    {label: 'Resume', href: 'https://drive.usercontent.google.com/u/0/uc?id=1bIT0ws1lrlzgH29ZV6uFYpe8PI0kaMn8&export=download'},
    {label: 'Instagram', href: 'https://instagram.com/andyepx'},
];

function SectionTitle({children}: { children: React.ReactNode }) {
    return (
        <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6">
            {children}
        </h2>
    );
}

function Monogram({name}: { name: string }) {
    return (
        <div
            className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-mono text-lg text-neutral-600 dark:text-neutral-300">
            {name[0]}
        </div>
    );
}

function Points({points}: { points: React.ReactNode[] }) {
    return (
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 list-disc pl-4 marker:text-neutral-300 dark:marker:text-neutral-600">
            {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
    );
}

function ExperienceRow({e}: { e: Experience }) {
    return (
        <details open={e.open} className="group">
            <summary className="flex gap-4 items-start cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <Monogram name={e.company}/>
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                        <p className="font-medium text-neutral-900 dark:text-neutral-100">
                            {e.company}
                            <span
                                className="ml-2 inline-block text-neutral-400 transition-transform group-open:rotate-90">›</span>
                        </p>
                        <p className="text-sm text-neutral-500 whitespace-nowrap">{e.dates}</p>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {e.role} · {e.location}
                    </p>
                </div>
            </summary>
            <div className="ml-16 mt-3">
                {e.href && (
                    <p className="text-sm mb-3">{ext(e.href, e.href.replace('https://', ''))}</p>
                )}
                {e.roles?.map((r) => (
                    <div key={r.title} className="mb-5 last:mb-0">
                        <div className="flex items-baseline justify-between gap-4">
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{r.title}</p>
                            <p className="text-xs text-neutral-500 whitespace-nowrap">{r.dates}</p>
                        </div>
                        <Points points={r.points}/>
                    </div>
                ))}
                {e.points && <Points points={e.points}/>}
            </div>
        </details>
    );
}

export default function Page() {
    const caseStudies = getPostsMetaData('case-studies')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section>
            <header className="mb-16">
                <h1 className="font-mono text-5xl font-medium tracking-tighter">Andy Epifani</h1>
                <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
                    Engineering Lead at {ext('https://heidihealth.com', 'Heidi Health')} in Melbourne. I lead teams
                    that take healthcare AI into enterprise environments: integrating with Epic and other EMRs,
                    rolling out with customers, and building the compliance foundations that let enterprises adopt it.
                </p>
                <p className="mt-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
                    10+ years across startups as a founder, designer and engineer. I still ship my own apps on the
                    side.
                </p>
                <nav className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                    {links.map((l) => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                           className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                            {l.label}
                        </a>
                    ))}
                </nav>
            </header>

            <div className="mb-20">
                <SectionTitle>Experience</SectionTitle>
                <div className="space-y-6">
                    {experiences.map((e) => <ExperienceRow key={e.company} e={e}/>)}
                </div>
            </div>

            <div className="mb-20">
                <SectionTitle>Projects</SectionTitle>
                <div className="space-y-6">
                    {projects.map((p) => (
                        <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                           className="group flex gap-4 items-start">
                            <Monogram name={p.name}/>
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-2">
                                    {p.name}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <SectionTitle>Case studies</SectionTitle>
                <div className="space-y-3">
                    {caseStudies.map((post) => (
                        <Link key={post.id} href={`/case-studies/${post.id}`}
                              className="group flex items-baseline justify-between gap-4">
                            <span className="text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-2">
                                {post.title}
                            </span>
                            <span className="text-sm text-neutral-500">{new Date(post.date).getFullYear()}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
