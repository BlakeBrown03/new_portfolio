import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	const projects = [
		{
			id: 1,
			name: "Meraki API",
			description: "A REST API for the Meraki platform",
			image: "/Meraki.png",
			link: "https://meraki-api.com"
		},
		{
			id: 2,
			name: "CSV to JSON Converter",
			description: "A CLI interface for CSV to JSON conversion",
			image: "/Csv.png",
			link: "https://csv-to-json.com"
		},
		{
			id: 3,
			name: "Vizo",
			description:
				"An Apple Vision Pro AI app that allows students to learn and generate 3D-models on the fly",
			image: "/Vizo.png",
			link: "https://vizo.ai"
		}
	];

	return (
		<div className="flex flex-col items-center justify-center my-4">
			<h1 className="text-4xl font-bold my-4">Projects</h1>
			<Carousel>
				<CarouselContent>
					{projects.map(project => (
						<CarouselItem key={project.id}>
							<Image
								src={project.image}
								alt={project.name}
								width={300}
								height={300}
								className="rounded-lg"
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
