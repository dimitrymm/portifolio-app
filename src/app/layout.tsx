import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Tomorrow } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import './globals.scss';

const tomorow = Tomorrow({
    subsets: ['latin'],
    display: 'swap',
    weight: '200',
});

export const metadata: Metadata = {
    title: 'Dimitry M. Marinho',
    description: 'Front End Developer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    tomorow.className,
                    'mx-auto lg:max-w-5xl min-h-screen sm:p-10 p-5',
                )}
            >
                <div>
                    <Header />
                    <div></div>
                </div>
                <div className="mt-16 sm:mt-24">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
