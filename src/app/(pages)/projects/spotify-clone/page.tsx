"use client";

import ProjectLayout, {ImageCarousel, ProjectCarousel} from "@/components/project-layout";
import {LanguageScore} from "@/components/languageScore";

export default function SpotifyClone() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 space-y-6 md:space-y-8 lg:space-y-10">
                <ProjectLayout title={"Flutter app"}
                               description={"Een app die gebruik maakt van de spotify api om nummers te zoeken en af te spelen."}
                               framework={"Flutter"}
                               url={"https://github.com/Quivesy2/Flutter-Spotify-Clone"}/>
                <LanguageScore language={"Dart"} percentage={98} color={"#1dc3e2"}/>
                <LanguageScore language={"CSS"} percentage={1.6} color={"#eb5f14"}/>
                <LanguageScore language={"other"} percentage={0.4} color={"white"}/>

                <ProjectCarousel>
                    <ImageCarousel altText={"home Page"} imageSrc={"/images/spotify-clone.jpg"}/>
                    <ImageCarousel altText={"search Page"} imageSrc={"/images/spotSearch.jpg"}/>
                    <ImageCarousel altText={"Playlist"} imageSrc={"/images/spotList.jpg"}/>
                    <ImageCarousel altText={"Song"} imageSrc={"/images/spotSong.jpg"}/>
                </ProjectCarousel>
            </div>
        </section>
    );
}