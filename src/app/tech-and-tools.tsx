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
	}
];

export default function TechAndTools() {
	const MotionCard = motion(Card);

	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-4xl font-bold my-4">Tech and Tools</h1>
			<div className="flex flex-row items-center justify-center gap-4">
				{techAndTools.map(tech => (
					<MotionCard
						key={tech.name}
						initial={{ opacity: 0, x: -100 }}
						animate={{
							opacity: 1,
							x: [0, 200, 0]
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							repeatType: "loop",
							ease: "linear"
						}}
						className="w-48 h-32">
						<CardContent className="p-0 flex items-center justify-center">
							<div className="flex flex-col items-center justify-center gap-2">
								<Image
									src={tech.icon}
									alt={tech.name}
									width={48}
									height={48}
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
			</div>
		</div>
	);
}
