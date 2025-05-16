import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
export default function Home() {
	return (
		<div className="flex justify-end">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<a href="/">Home</a>
						<ModeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
