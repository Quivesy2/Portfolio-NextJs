"use client";
import {SVGPC} from "@/components/pc/svg-home";
import {useScreenSize} from "@/hooks/useScreensize";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import Link from "next/link";


const sectionsConfig = [
    {min: 500, max: 600, count: 1},
    {min: 600, max: 800, count: 2},
    {min: 800, max: 1000, count: 3},
    {min: 1000, max: Infinity, count: 4},
];


export default function Home() {
    const [width, height] = useScreenSize();
    const [showAlert, setShowAlert] = useState(true);

    const sectionCount = sectionsConfig.find(
        (config) => height > config.min && height <= config.max
    )?.count || 0;


    return (<>
            {width > 835 && <SVGPC/>}
            <section className="w-full">
                <div className="container px-4">
                    <div className="grid items-center gap-4 pt-12 pb-16 md:grid-cols-12 md:pt-24 md:pb-24 lg:gap-8">
                        <div
                            className=" md:block md:col-start-7 md:col-span-6 lg:col-start-8 lg:col-span-5 xl:col-start-8 xl:col-span-4">
                            <div className="space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Hey, ik ben Quinten Vercruysse en dit is mijn portfolio.
                                </h1>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Momenteel studeer ik aan de Thomas More Hogeschool in Sint-Katelijne-Waver. Ik ben
                                    gepassioneerd door programmeren en het continu leren van nieuwe dingen. Hoewel ik
                                    nog maar twee jaar ervaring heb in dit vakgebied, ben ik vastbesloten om mijn kennis
                                    verder uit te breiden. Voorheen volgde ik een middelbare opleiding in de richting
                                    Elektromechanica, wat me altijd heeft gefascineerd. Toch heb ik besloten om mijn
                                    carrière voort te zetten in de IT, ondanks mijn gebrek aan voorkennis.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                width < 835 ?
                    <section className="w-full h-2"/>
                    :
                    Array.from({length: sectionCount}, (_, i) => (
                        <section key={i} className="w-full h-96"/>
                    ))
            }
            <section className="w-full">
                <div className="container px-4">
                    <div className="grid items-center gap-4 pt-12 pb-16 md:grid-cols-12 md:pt-24 md:pb-24 lg:gap-8">
                        <div
                            className=" md:block md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-7">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Waarom ben ik na 5 jaar Elektromechanica overgestapt naar IT?
                                </h2>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Ik heb altijd een passie gehad voor het demonteren van objecten en het begrijpen van
                                    hun werking. Na mijn eerste jaar op de middelbare school besefte ik dat mijn
                                    toenmalige studie niet helemaal mijn interessegebied was. In overleg met mijn ouders
                                    heb ik dan de overstap gemaakt naar Elektromechanica.
                                    Dat bleek een goede keuze te zijn, waarbij ik altijd met plezier de lessen heb
                                    gevolgd en praktische ervaring heb opgedaan. In het vierde jaar begonnen we met
                                    programmeren, vooral gericht op CNC-machines en gerelateerde processen zoals het
                                    schrijven van G-code. Dat vond ik enorm interessant. Tijdens mijn afstudeerjaar
                                    moesten we een geïntegreerde proef maken en koos ik ervoor om een zonvolgsysteem te
                                    programmeren. Toen ontdekte ik pas echt waar mijn passie lag: in het programmeren
                                    zelf. Op advies van mijn docenten en ouders ging ik op zoek naar IT-opleidingen, wat
                                    een schot in de roos bleek te zijn.
                                </p>
                                <p className="text-500 md:text-xl dark:text-400">
                                    Om te kijken hoe ik mijn passie vertaal in het ontwikkelen van projecten om mijn
                                    kennis bij te schaven kan je hier een overzicht vinden.
                                </p>
                                <Button asChild>
                                    <Link href="/projects">Mijn projecten</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                width < 835 ?
                    <section className="w-full h-2"/>
                    :
                    Array.from({length: sectionCount}, (_, i) => (
                        <section key={i} className="w-full h-96"/>
                    ))
            }
            <section className="w-full">
                <div className="container px-4">
                    <div className="grid items-center gap-4 pt-12 pb-16 md:grid-cols-12 md:pt-24 md:pb-24 lg:gap-8">
                        <div
                            className=" md:block md:col-start-7 md:col-span-6 lg:col-start-8 lg:col-span-5 xl:col-start-8 xl:col-span-4">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Hoe voel ik me nu?
                                </h2>
                                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                                    Ik geniet enorm van mijn opleiding. Het eerste jaar
                                    was behoorlijk uitdagend voor me, vooral omdat ik geen voorkennis had. Soms
                                    kostte het me wat extra tijd om nieuwe concepten volledig te
                                    begrijpen. Maar dat ontmoedigt me niet, omdat zodra ik iets begrijp, ik er geen
                                    moeite
                                    mee heb om het toe te passen. Bovendien geniet ik er van om anderen te helpen
                                    met
                                    hun code en problemen op te lossen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
        ;
}