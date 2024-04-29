import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {Analytics} from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Portfolio van Quinten Vercruysse.",
    description: "Een portfolio van en gemaakt door Quinten Vercruysse in NextJs. Neem gerust een kijkje of neem contact op.",
    openGraph: {
        title: "Portfolio van Quinten Vercruysse",
        description: "Een portfolio van en gemaakt door Quinten Vercruysse in NextJs. Neem gerust een kijkje of neem contact op.",
        url: "/",
        images: [
            {
                url: "/opengraph-image.jpg",
                width: 800,
                height: 600,
                alt: "Og Image Alt",
            },
        ],
        type: "website",
    },
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="nl-NL">
        <body>
        <Analytics/>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>

        </body>
        </html>
    )
        ;
}