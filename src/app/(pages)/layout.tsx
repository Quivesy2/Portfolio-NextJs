import React from "react";
import {NavBar} from "@/components/pc/navigation";
import NavMobile from "@/components/mobile/nav-mobile";

export default function PagesLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            <NavMobile/>
            {props.children}
        </>
    );
}