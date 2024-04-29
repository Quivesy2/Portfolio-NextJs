"use client";
import Link from "next/link";

export default function ProjectPage() {
    return (
        <div className="grid gap-12">
            <section className="w-full py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                        <div className="flex flex-col items-center gap-2 mb-20">
                            <Link href="/projects/spotify-clone">
                                <img
                                    alt="spotify clone preview"
                                    className="aspect-square object-contain rounded-lg max-w-full h-auto mx-auto border border-gray-100 border-gray-100"
                                    src="/images/spotify-clone.jpg"
                                />
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl font-semibold">Spotify clone</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">proof of concept </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center gap-2 mb-20">
                            <Link href="/projects/portfolio">
                                <img
                                    alt="portfolio preview"
                                    className="aspect-square object-contain rounded-lg max-w-full h-auto mx-auto border border-gray-100 border-gray-100"
                                    src="/images/portfolioImageWhite.jpg"
                                />
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl font-semibold">Portfolio</h2>

                                </div>
                            </Link>
                        </div>

                        <div className="flex flex-col items-center gap-2 ">
                            <Link href="/projects/gip">
                                <img
                                    alt="gip preview"
                                    className="aspect-square object-contain rounded-lg max-w-full h-auto mx-auto border border-gray-100 border-gray-100"
                                    src="/images/gip1.jpg"
                                />
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl font-semibold">Auto turning solar system</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        a system that turns to the perfect angle of the sun.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    );
}
