import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Blake Brown</h1>
                <NavigationMenu>
                    <NavigationMenuList className="relative">
                        <NavigationMenuItem>
                            <div className="flex items-center">
                                <button
                                    className="p-2"
                                    onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? (
                                        <X size={24} />
                                    ) : (
                                        <Menu size={24} />
                                    )}
                                </button>
                                <div className="mr-2">
                                    <ModeToggle />
                                </div>
                                {isOpen && (
                                    <div
                                        className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-neutral-950 shadow-lg rounded-md"
                                        onMouseLeave={() => setIsOpen(false)}>
                                        <div className="py-2">
                                            <a
                                                href="#about-me"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                About Me
                                            </a>
                                            <a
                                                href="#projects"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                Projects
                                            </a>
                                            <a
                                                href="#contact"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
