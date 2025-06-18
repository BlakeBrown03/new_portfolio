"use client";

import NavBar from "@/components/ui/nav-bar";
import AboutMe from "./about-me";
import { ReactTyped } from "react-typed";
import TechAndTools from "./tech-and-tools";
import Image from "next/image";
import Projects from "./projects";
import Contact from "./contact";
export default function Home() {
    return (
        <>
            <NavBar />
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center my-32 gap-8">
                <div className="flex justify-center">
                    <Image
                        src="/picture-of-me.jpg"
                        alt="Picture of Me"
                        width={600}
                        height={600}
                        className="rounded-full aspect-square object-cover"
                    />
                </div>
                <div className="flex justify-center">
                    <ReactTyped
                        className="text-5xl font-bold"
                        strings={[
                            "Blake Brown",
                            "Software Engineer",
                            "Web Developer"
                        ]}
                        startDelay={1000}
                        typeSpeed={100}
                        backSpeed={100}
                        loop
                    />
                </div>
            </div>
            <AboutMe />
            <TechAndTools />
            <Projects />
            <Contact />
        </>
    );
}
