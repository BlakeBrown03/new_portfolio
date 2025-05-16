import NavBar from "@/components/ui/nav-bar";
import AboutMe from "./about-me";

export default function Home() {
	return (
		<>
			<NavBar />
			<div className="flex flex-row items-center justify-center gap-8 my-40">
				<img
					src="/images/picture-of-me.jpg"
					alt="Picture of Me"
					className="w-128 h-128 rounded-full object-cover"
				/>
				<h1 className="text-4xl font-bold">Blake Brown</h1>
			</div>
			<AboutMe />
		</>
	);
}
