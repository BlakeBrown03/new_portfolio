import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function NavBar() {
	return (
		<>
			<div className="flex justify-between items-center">
				<h1 className="text-2xl font-bold">Blake Brown</h1>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<a href="/" className="text-lg mr-4">
								Home
							</a>
							<a href="/about-me" className="text-lg mr-4">
								About Me
							</a>
							<a href="/projects" className="text-lg mr-4">
								Projects
							</a>
							<ModeToggle />
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</>
	);
}
