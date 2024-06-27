import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/app/providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Pedro H D Santos",
    description: "Full stack developer specializing in React, React Native, Vue, and Node.js. Passionate about creating innovative and scalable solutions for web and mobile.",
    keywords: "full stack developer, React, React Native, Vue, Node.js, web development, mobile development, JavaScript, front-end, back-end, scalable solutions, innovative technology, app development, software engineer",
    openGraph: {
        siteName: "Pedro H D Santos",
        type: "website", 
    }
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="pt_br">
            {/* <head>
                <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="{{ asset('assets/img/opengraph-tim.png') }}">
                <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/png" />
                <meta data-n-head="ssr" data-hid="og:image:width" property="og:image:width" content="600" />
                <meta data-n-head="ssr" data-hid="og:image:height" property="og:image:height" content="600" />
            </head> */}
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
