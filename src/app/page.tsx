"use client";

import NavBar from "@/components/ui/nav-bar";
import AboutMe from "./about-me";
import { ReactTyped } from "react-typed";
import TechAndTools from "./tech-and-tools";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className="grid grid-cols-2 items-center justify-items-center my-32">
				<div className="flex justify-center ml-10">
					<img
						src="/images/picture-of-me.jpg"
						alt="Picture of Me"
						className="w-128 h-128 rounded-full object-cover"
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
