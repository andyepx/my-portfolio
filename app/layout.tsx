import './global.css';
import type {Metadata} from 'next';
import {GeistSans} from 'geist/font/sans';
import {GeistMono} from 'geist/font/mono';
import {Navbar} from './components/nav';
import {Analytics} from '@vercel/analytics/react';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Footer} from './components/footer';

export const metadata: Metadata = {
    metadataBase: new URL('https://andyepifani.com'),
    title: {
        default: 'Andy Epifani',
        template: '%s | Andy Epifani',
    },
    description: 'Developer & Designer for a greener future.',
    openGraph: {
        title: 'Andy Epifani',
        description: 'Developer & Designer for a greener future.',
        url: 'https://andyepifani.com',
        siteName: 'Andy Epifani',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Andy Epifani',
        card: 'summary_large_image',
    },
    // verification: {
    //     google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    //     yandex: '14d2e73487fa6c71',
    // },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                'text-black bg-white dark:text-white dark:bg-[#111010]',
                GeistSans.variable,
                GeistMono.variable
            )}
        >
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar/>
            {children}
            <Footer/>
            <Analytics/>
            <SpeedInsights/>
        </main>
        </body>
        </html>
    );
}
