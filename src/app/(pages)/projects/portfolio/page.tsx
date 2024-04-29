"use client";

import {LanguageScore} from "@/components/languageScore";
import ProjectLayout, {ImageCarousel, ProjectCarousel} from "@/components/project-layout";


export default function Portfolio() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 space-y-6 md:space-y-8 lg:space-y-10">
                <ProjectLayout title={"Portfolio"} description={"Een detail page van dit portfolio"}
                               framework={"NextJs"}
                               url={"https://github.com/Quivesy2/Portfolio-NextJs"}/>

                <LanguageScore language={"TypeScript"} percentage={98.1} color={"blue"}/>
                <LanguageScore language={"CSS"} percentage={1.7} color={"purple"}/>
                <LanguageScore language={"JavaScript"} percentage={0.2} color={"yellow"}/>

                <ProjectCarousel>
                    <ImageCarousel altText={"homePage White"} imageSrc={"/images/portfolioImageWhite.jpg"}/>
                    <ImageCarousel altText={"homePage Black"} imageSrc={"/images/portfolioImageBlack.png"}/>
                    <ImageCarousel altText={"contact White"} imageSrc={"/images/contactW.png"}/>
                    <ImageCarousel altText={"contact Black"} imageSrc={"/images/contactB.png"}/>
                </ProjectCarousel>
            </div>
        </section>
    );
}