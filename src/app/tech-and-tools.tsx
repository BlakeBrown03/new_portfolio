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
							x: 0
						}}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: "easeOut"
						}}
						className="w-16 h-16 p-2">
						<CardContent className="p-0 flex items-center justify-center">
							<Image
								src={tech.icon}
								alt={tech.name}
								width={48}
								height={48}
								className="object-contain"
								priority
							/>
						</CardContent>
					</MotionCard>
				))}
			</div>
		</div>
	);
}
