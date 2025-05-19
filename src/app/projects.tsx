import Image from "next/image";
import Link from "next/link";

export default function Projects() {
	const projects = [
		{
			id: 1,
			name: "Meraki API",
			description: "A REST API for the Meraki platform",
			image: "/meraki-api.png",
			link: "https://meraki-api.com"
		},
		{
			id: 2,
			name: "CSV to JSON Converter",
			description: "A simple CSV to JSON converter",
			image: "/csv-to-json.png",
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projects.map(project => (
					<div
						key={project.id}
						className="flex flex-col items-center">
						<h2 className="text-2xl font-bold">{project.name}</h2>
						<p className="text-sm text-gray-500">
							{project.description}
						</p>
						<Link
							href={project.link}
							className="text-sm text-gray-500">
							View Project
						</Link>
						<Image
							src={project.image}
							alt={project.name}
							width={100}
							height={100}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
