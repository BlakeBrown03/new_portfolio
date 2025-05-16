import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from "@/components/ui/navigation-menu";

export default function Home() {
	return (
		<div className="flex justify-end">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<a href="/">Home</a>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
