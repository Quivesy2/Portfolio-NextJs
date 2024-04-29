import React from "react";

export default function LanguageScoreCover(props: { children: React.ReactNode }) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container grid max-w-6xl items-start justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 xl:max-w-7xl xl:gap-10">
                <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-full max-w-sm grid gap-2">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

interface LanguageScoreProps {
    language: string;
    percentage: number;
    color: string;
}

export function LanguageScore({language, percentage, color}: LanguageScoreProps) {
    return (
        <div className="flex items-center justify-between">
            <div className="text-xs font-medium">{language}</div>
            <div className="w-1/2 h-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <div className="h-full rounded-lg bg-gray-300 w-90 dark:bg-gray-700 "
                     style={{width: `${percentage}%`, backgroundColor: color}}/>
            </div>
            <div className="text-xs font-medium">{percentage}%</div>
        </div>
    );
}