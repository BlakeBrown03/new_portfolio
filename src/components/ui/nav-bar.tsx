import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // or your preferred icon library

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Blake Brown</h1>
                <NavigationMenu>
                    <NavigationMenuList className="relative">
                        <NavigationMenuItem>
                            {/* Desktop Menu - hidden on mobile */}
                            <div className="hidden md:flex items-center">
                                <a href="#about-me" className="text-lg mr-4">
                                    About Me
                                </a>
                                <a href="#projects" className="text-lg mr-4">
                                    Projects
                                </a>
                                <a href="#contact" className="text-lg mr-4">
                                    Contact
                                </a>
                                <ModeToggle />
                            </div>

                            {/* Mobile Menu Button - visible on mobile */}
                            <div className="md:hidden flex items-center">
                                <div className="mr-2">
                                    <ModeToggle />
                                </div>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2">
                                    {isOpen ? (
                                        <X size={24} />
                                    ) : (
                                        <Menu size={24} />
                                    )}
                                </button>
                            </div>

                            {/* Mobile Menu - dropdown */}
                            {isOpen && (
                                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md md:hidden">
                                    <div className="py-2">
                                        <a
                                            href="#about-me"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            About Me
                                        </a>
                                        <a
                                            href="#projects"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            Projects
                                        </a>
                                        <a
                                            href="#contact"
                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            )}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
