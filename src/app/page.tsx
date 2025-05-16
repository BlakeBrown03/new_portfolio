import NavBar from "@/components/ui/nav-bar";
import AboutMe from "./about-me";

export default function Home() {
	return (
		<>
			<img
				src="/images/me.jpg"
				alt="Picture of Me"
				className="w-1/2 h-1/2 rounded-full"
			/>
			<NavBar />
			<AboutMe />
		</>
	);
}
