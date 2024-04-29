"use client";
import ProjectLayout, {ImageCarousel, ProjectCarousel} from "@/components/project-layout";
import {LanguageScore} from "@/components/languageScore";

export default function Gip() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 space-y-6 md:space-y-8 lg:space-y-10">
                <ProjectLayout title={"Geïntegreerde proef"}
                               description={"Ontwerp van een zonvolgsysteem in een optimale positie voor een maximale energieopwekking."}
                               framework={"N/A"}
                               url={"https://github.com/Quivesy2/Gip"}/>

                <LanguageScore language={"C++"} percentage={100} color={"blue"}/>
                <ProjectCarousel>
                    <ImageCarousel altText={"Toestel"} imageSrc={"/images/gip1.jpg"}/>
                    <ImageCarousel altText={"Toestel2"} imageSrc={"/images/gip2.jpg"}/>
                    <ImageCarousel altText={"test opstelling"} imageSrc={"/images/gip3.jpg"}/>
                    <ImageCarousel altText={"foto tijdens test"} imageSrc={"/images/gip4.jpg"}/>
                    <ImageCarousel altText={"transformator"} imageSrc={"/images/gip5.jpg"}/>
                    <ImageCarousel altText={"hoe alles werkt"} imageSrc={"/images/gip6.jpg"}/>
                </ProjectCarousel>
                <iframe src={"/pdf/GIP_Quinten Vercruysse 6EM-gecombineerd.pdf"} className={"w-full"}
                        style={{height: "975px"}}/>
            </div>
        </section>
    );
}