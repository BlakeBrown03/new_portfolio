"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const techAndTools = [
	{
		name: "Next",
		icon: "/next.svg"
	},
	{
		name: "React",
		icon: "/React.svg"
	},
	{
		name: "TailwindCSS",
		icon: "/Tailwind CSS.svg"
	},
	{
		name: "TypeScript",
		icon: "/TypeScript.svg"
	},
	{
		name: "Python",
		icon: "/Python.svg"
	},
	{
		name: "C#",
		icon: "/CSharp.svg"
	},
	{
		name: "HTML",
		icon: "/HTML.svg"
	},
	{
		name: "CSS",
		icon: "/CSS.svg"
	},
	{
		name: "Java",
		icon: "/Java.svg"
	},
	{
		name: "Git",
		icon: "/Git.svg"
	},
	{
		name: "Docker",
		icon: "/Docker.svg"
	},
	{
		name: "Bash",
		icon: "/Bash.svg"
	}
];

export default function TechAndTools() {
	const MotionCard = motion.create(Card);

	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-4xl font-bold my-4">Technologies and Tools</h1>
			<div className="relative w-full overflow-hidden">
				<motion.div
					className="flex flex-row items-center justify-center"
					style={{
						width: "fit-content",
						gap: "1rem"
					}}
					animate={{
						x: ["0%", "-50%"]
					}}
					transition={{
						duration: 50,
						repeat: Infinity,
						ease: "linear",
						repeatType: "loop"
					}}>
					{techAndTools.map(tech => (
						<MotionCard
							key={tech.name}
							className="w-48 h-32 flex-shrink-0">
							<CardContent className="p-0 flex items-center justify-center">
								<div className="flex flex-col items-center justify-center gap-2">
									<Image
										src={tech.icon}
										alt={tech.name}
										width={64}
										height={64}
										className="object-contain"
										priority
									/>
									<h1 className="text-lg font-bold">
										{tech.name}
									</h1>
								</div>
							</CardContent>
						</MotionCard>
					))}
					{techAndTools.map(tech => (
						<MotionCard
							key={`${tech.name}-duplicate`}
							className="w-48 h-32 flex-shrink-0">
							<CardContent className="p-0 flex items-center justify-center">
								<div className="flex flex-col items-center justify-center gap-2">
									<Image
										src={tech.icon}
										alt={tech.name}
										width={64}
										height={64}
										className="object-contain"
										priority
									/>
									<h1 className="text-lg font-bold">
										{tech.name}
									</h1>
								</div>
							</CardContent>
						</MotionCard>
					))}
				</motion.div>
			</div>
		</div>
	);
}
