"use client";

import NavBar from "@/components/ui/nav-bar";
import AboutMe from "./about-me";
import { ReactTyped } from "react-typed";
import TechAndTools from "./tech-and-tools";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className="grid grid-cols-2 items-center justify-items-center my-32">
				<div className="flex justify-center ml-10">
					<Image
						src="/images/picture-of-me.jpg"
						alt="Picture of Me"
						width={512}
						height={512}
						className="rounded-full object-cover"
						priority
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
		</>
	);
}
