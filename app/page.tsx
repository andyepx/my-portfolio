// import { Suspense } from 'react';
// import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';
import profile from 'public/profile.jpg'

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Page() {
    return (
        <section>
            <div className='flex flex-row'>
                <div className="w-1/4">
                    <Image src={profile} alt="Andy" className="pr-4 mt-1"/>
                </div>
                <div className="w-3/4">
                    <h1 className="mb-4 text-xl font-bold">
                        hi there, I'm andy 👋
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        I'm a curious designer & developer, with a passion for discovering how design affect us and our
                        planet. I have over 10 years experience working at small to medium size startups.
                    </p>
                    <p className=" mt-2 prose dark:prose-invert leading-normal">
                        I enjoy everything creative, including <a href='https://refrakt.app/andyepx' target='_blank'>film
                        photography</a>, pottery, food and travel.
                    </p>
                    <p className=" mt-2 prose dark:prose-invert leading-normal">
                        Always looking for opportunity to work on Software Dev and UX projects that can have a positive
                        impact on our future.
                    </p>
                    <ul className="font-sm mt-4 flex flex-col text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                        <li>
                            <a
                                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://linkedin.com/in/andreaepifani"
                            >
                                <ArrowIcon/>
                                <p className="ml-2 h-7">linkedin</p>
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://github.com/andyepx"
                            >
                                <ArrowIcon/>
                                <p className="ml-2 h-7">github</p>
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://instagram.com/andyepx"
                            >
                                <ArrowIcon/>
                                <p className="ml-2 h-7">instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="my-6 border-neutral-100 dark:border-neutral-800"/>

            <div className='flex flex-row mt-8 mb-6'>
                <div className="w-1/4"></div>
                <div className="w-3/4 flex flex-row">
                    <p className="text-xl pr-4 font-bold w-full">
                        work experience
                    </p>
                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1bIT0ws1lrlzgH29ZV6uFYpe8PI0kaMn8&export=download"
                       target="_blank" className="flex flex-row items-center  whitespace-nowrap">
                        Resume&nbsp;<ArrowIcon/>
                    </a>
                </div>
            </div>

            <div className="flex flex-row mt-2">
                <div className="w-1/4 flex flex-col ">
                    <p className="text-md font-medium pr-4 prose dark:prose-invert">
                        2024 - now
                    </p>
                    <p className="text-sm pr-4 mt-1 prose dark:prose-invert">
                        Australia
                    </p>
                </div>
                <div className="w-3/4">
                    <h1 className="mb-2 text-md font-bold">
                        Senior Front End Developer at Heidi Health
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Leading the Front End Development of Heidi's integrations to bring Heidi to more and more health
                        professionals. Check out the <a href="https://heidihealth.com" target="_blank"
                                                        className="underline">Heidi Health website</a> to learn more
                        about the groundbreaking solutions we're working on.
                    </p>

                    <h1 className="mt-6 mb-2 text-md font-bold">
                        Gomoku Studio - Freelancer
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Working on UX and Front End projects as a freelancer. Most of my work is currently focused on
                        digital products. Most of the design research and prototyping is done in Figma, and the products
                        are developed using Next.js and React. Some of my latest projects are:
                    </p>

                    <div className="flex flex-col mt-4 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://biomodels.bacpop.org/" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                Menelmacar visualiser - EMBL-EBI's BioModels database
                            </a>
                        </p>
                        <p className=" text-sm">
                            Design: UI & UX Design
                            <br/>
                            Tech: Next.js, VueJS, Typescript, APIs
                        </p>
                    </div>
                    <div className="flex flex-col mt-4 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://gomoku.studio/case-study/perth-children-hospital" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                Perth Children's Hospital: rare diseases discovery tool
                            </a>
                        </p>
                        <p className=" text-sm">
                            Tech: Next.js, React, Typescript, APIs
                        </p>
                    </div>
                    <div className="flex flex-col mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            Octfolio: design system & prototypes
                        </p>
                        <p className=" text-sm">
                            Design: UX Research, Customer Workshop
                        </p>
                    </div>
                    <div className="flex flex-col mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://gomoku.studio/case-study/perth-children-hospital" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                Lewi Software - FloWire platform
                            </a>
                        </p>
                        <p className=" text-sm">
                            Design: UI Design, Prototyping
                            <br/>
                            Tech: React, Tailwind
                        </p>
                    </div>

                </div>
            </div>

            <div className="flex flex-row mt-4">
                <div className="w-1/4 flex flex-col ">
                    <p className="text-md font-medium pr-4 prose dark:prose-invert">
                        2021 - 2023
                    </p>
                    <p className="text-sm pr-4 mt-1 prose dark:prose-invert">
                        Brisbane, Australia
                    </p>
                </div>
                <div className="w-3/4">
                    <h1 className="mb-2 text-md font-bold">
                        Co-Founder & COO at Uuvipak
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Co-founded Uuvipak with the mission to eradicate single use plastic packaging by upcycling clean
                        organic food manufacturing byproducts.</p>
                    <p className="mt-2 prose dark:prose-invert leading-normal">
                        Uuvipak was selected to participate in the prestigious <a
                        href="https://www.techstars.com/newsroom/announcing-12-startups-in-the-techstars-farm-to-fork-class-of-2023"
                        target="_blank" className="underline">Techstars Farm 2 Fork accelerator</a> and won numerous
                        awards, including the <a href="https://www.nespresso.com/au/en/startcup-challenge"
                                                 target="_blank" className="underline">Nespresso StartCup
                        challenge</a> award and nominated <a
                        href="https://www.theaustralian.com.au/subscribe/news/1/?sourceCode=TAWEB_WRE170_a_GGL&dest=https://www.theaustralian.com.au/business/technology/the-list-top-100-innovators/news-story/3a249e3c6e283ae5a58420377b92a4a2&memtype=anonymous&mode=premium&v21=GROUPA-Segment-1-NOSCORE&V21spcbehaviour=append"
                        target="_blank" className="underline">Australian Top Innovators of 2023</a>.
                    </p>
                </div>
            </div>

            <div className="flex flex-row mt-4">
                <div className="w-1/4 flex flex-col ">
                    <p className="text-md font-medium pr-4 prose dark:prose-invert">
                        2019 - 2021
                    </p>
                    <p className="text-sm pr-4 mt-1 prose dark:prose-invert">
                        Brisbane, Australia
                        <br/>
                        Pittsburgh, USA
                    </p>
                </div>
                <div className="w-3/4">
                    <h1 className="mb-2 text-md font-bold ">
                        Senior UX Developer at Clarivate
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Led one of Clarivate's UX and Front End Development teams, working on IP protection and
                        examination platforms. I was responsible for the design and front end development of Wine
                        Australia Export Label Search System and some of IP Australia's internal examination tools for
                        patents and trade marks.
                    </p>
                    <div className="flex flex-col mt-4 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://eliss.wineaustralia.com" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                Wine Australia Export Label Search System
                            </a>
                        </p>
                        <p className="text-sm">
                            Design: UX Research, UI Design, Accessibility WCAG 2.1
                            <br/>
                            Tech: VueJS, Typescript, APIs integration, AI
                        </p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            IP Australia's examination tools
                        </p>
                        <p className=" text-sm">
                            Design: UX Research, UI Design, User Testing, Accessibility WCAG 2.1
                            <br/>
                            Tech: VueJS, Typescript, Micro Front Ends, APIs integration
                        </p>
                    </div>

                    <h1 className="mt-6 mb-2 text-md font-bold">Freelance Flutter developer</h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Designed and developed two mobile apps using Flutter, Firebase and Google Cloud Platform. The
                        apps were developed as personal projects, and are now being used by over 100 users weekly.
                    </p>
                    <div className="flex flex-col mt-4 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://sugoflights.app" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                Sugo: your personal flight diary
                            </a>
                        </p>
                        <p className=" text-sm">
                            Tech: Flutter, Dart, Kotlin, Postgres
                        </p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://readwithlibro.app" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                Libro: neighbourhood book sharing
                            </a>
                        </p>
                        <p className=" text-sm">
                            Tech: Flutter, Dart, Kotlin, Postgres
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row mt-4">
                <div className="w-1/4 flex flex-col">
                    <p className="text-md font-medium pr-4 prose dark:prose-invert">
                        2015 - 2019
                    </p>
                    <p className="text-sm pr-4 mt-1 prose dark:prose-invert">
                        Brisbane, Australia
                        <br/>
                        Pittsburgh, USA
                    </p>
                </div>
                <div className="w-3/4">
                    <h1 className="mb-2 text-md font-bold">
                        Senior Front End and UX Developer at TrademarkVision
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Led TrademarkVision's Front End and UX team, working on the design and development of
                        TrademarkVision's AI powered visual search engine for trademarks as well as IP Australia's Trade
                        Mark and Design Search tools and Trade Mark Assist.
                    </p>
                    <div className="flex flex-col mt-4 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://trademark.vision" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                TrademarkVision: AI powered visual search for trademarks
                            </a>
                        </p>
                        <p className=" text-sm">
                            Design: UX & UI Design
                            <br/>
                            Tech: VueJS, Typescript, APIs integration, AI, Cypress, Jest
                        </p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://tmgns.search.ipaustralia.gov.au" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                IP Australia Goods and Services Classification
                            </a>
                        </p>
                        <p className=" text-sm">
                            Design: UX & UI Design, UX Research, Accessibility WCAG 2.1
                            <br/>
                            Tech: VueJS, Typescript, APIs integration, AI, Cypress
                        </p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            IP Australia Trade Mark Assist
                        </p>
                        <p className=" text-sm">
                            Design: UX Research, UI Design, Accessibility WCAG 2.1, Storybook
                            <br/>
                            Tech: VueJS, Typescript, APIs integration, AI, Cypress, Jest
                        </p>
                    </div>
                    <div className="flex flex-col mt-2 mb-2 border-l-4 pl-2">
                        <p className=" font-medium">
                            <a href="https://search.ipaustralia.gov.au/designs" target="_blank"
                               className="text-orange-500 hover:text-orange-600 dark:text-yellow-300 dark:hover:text-yellow-400 underline"
                               style={{textDecorationColor: 'inherit'}}>
                                IP Australia Trade Mark and Design Search
                            </a>
                        </p>
                        <p className=" text-sm">
                            Design: UX & UI Design, UX Research, User Testing Workshops, Accessibility WCAG 2.1,
                            <br/>
                            Tech: VueJS, AngularJS, Typescript, APIs integration, AI, Cypress, Jest
                            Storybook
                        </p>
                    </div>

                    <h1 className="mt-6 mb-2 text-md font-bold">
                        Front End Developer at University of Queensland
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Developed an internal tool for students to discover their career paths. The tool was developed
                        in collaboration with the school of ITEE and Engineering. The tool gathered data from all
                        faculties to create potential study paths that aligned with the university requirements. It was
                        built using Bootstrap and AngularJS.
                    </p>
                </div>
            </div>

            <div className="flex flex-row mt-4">
                <div className="w-1/4 flex flex-col">
                    <p className="text-md font-medium pr-4 prose dark:prose-invert">
                        2008 - 2015
                    </p>
                    <p className="text-sm pr-4 mt-1 prose dark:prose-invert">
                        Brisbane, Australia
                        <br/>
                        Shanghai, China
                        <br/>
                        Turin, Italy
                        <br/>
                        Derry, UK
                    </p>
                </div>
                <div className="w-3/4">
                    <h1 className="mb-2 text-md font-bold">
                        Freelance Developer & Designer
                    </h1>
                    <p className="prose dark:prose-invert leading-normal">
                        Worked on a variety of small local businesses websites mostly built in Wordpress for clients in
                        Italy, the UK, China, and Australia. I continued freelancing throughout my university studies
                        and early career.
                    </p>
                    <p className="mt-2 prose dark:prose-invert leading-normal">
                        During this time I also collaborated on the design and development of a museum showcase for a
                        local gallery, and was contributing my IT skills to local schools and organisations that needed
                        support with their infrastrcture.
                    </p>
                </div>
            </div>

        </section>
    )
        ;
}
