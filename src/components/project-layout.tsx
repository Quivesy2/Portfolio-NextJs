import Link from "next/link"
import {CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel} from "@/components/ui/carousel"
import React from "react";

interface ProjectLayoutProps {
    title: string;
    description: string;
    framework: string;
    url: string;
}

export default function ProjectLayout({title, description, framework, url}: ProjectLayoutProps) {
    return (<>
            <div className="space-y-2">
                <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl">{title}</h1>
                        <p className="text-gray-500 dark:text-gray-400">{description}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="space-y-4">
                            <dl className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <dt className="text-sm font-medium">Framework</dt>
                                    <dd className="text-sm text-gray-500 dark:text-gray-400">{framework}</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="flex-1 grid w-1/2 ml-auto items-start gap-4 md:hidden">
                            <div className="space-y-4">
                                <Link
                                    className="flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100"
                                    href={url}
                                >
                                    <GithubIcon
                                        className="w-5 h-5 rounded-lg overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"/>
                                    <span>View on GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex items-start space-x-4">
                    <div className="space-y-4">
                        <Link
                            className="flex items-center space-x-2 text-sm font-medium transition-colors text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100"
                            href={url}
                        >
                            <GithubIcon
                                className="w-5 h-5 rounded-lg overflow-hidden aspect-square bg-gray-200 dark:bg-gray-800"/>
                            <span>View on GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

interface ProjectCarouselProps {
    altText: string;
    imageSrc: string;
}

export function ProjectCarousel(props: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-sm mx-auto md:max-w-3xl">
            <Carousel className="w-full max-w-3xl">
                <CarouselContent className="aspect-video">
                    {props.children}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}

export function ImageCarousel({altText, imageSrc}: ProjectCarouselProps) {
    return (
        <CarouselItem>
            <img
                alt={altText}
                className="aspect-video object-contain rounded-lg max-w-full h-auto mx-auto"
                src={imageSrc}
            />
        </CarouselItem>
    );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
    )
}