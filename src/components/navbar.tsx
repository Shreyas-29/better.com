"use client";

import Link from "next/link";
import React, { useState, useEffect } from 'react'
import Icons from "./icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { MenuIcon, PhoneIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { MAIN_ROUTES, ROUTES } from "@/constants";
import Sidebar from "./sidebar";
import AnimationContainer from "./animation-container";

const Navbar = () => {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    let isInverse = MAIN_ROUTES.includes(pathname);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.querySelector(".hero");
            if (hero) {
                const height = hero.clientHeight;
                setIsScrolled(window.scrollY > height);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <AnimationContainer reverse>
            <header
                className={cn(
                    "sticky top-0 inset-x-0 z-50 w-full transition-colors duration-300",
                    ROUTES.includes(pathname) ? "hidden" : "block",
                    (isScrolled || isInverse) ? "bg-background" : "bg-accentPrimary",
                )}
            >
                <nav className="flex items-center justify-between px-4 py-5 mx-auto md:px-5 max-w-screen-2xl">
                    <div className="flex items-center gap-x-5">
                        <div className="flex">
                            <Link href="/" className={cn("p-2 text-textInversePrimary", (isScrolled || isInverse) && "text-textPrimary")}>
                                <Icons.logo className="w-16 h-auto" />
                            </Link>
                        </div>
                        <ul className="items-center hidden xl:flex gap-x-4 lg:gap-x-9">
                            <li className="text-base rounded-full">
                                <Link href="/mortgage-calculator" className={cn(
                                    "text-textInversePrimary font-medium hover:bg-backgroundPrimary hover:text-textPrimary px-4 py-2 transition-colors duration-300 rounded-full",
                                    (isScrolled || isInverse) && "text-textPrimary hover:bg-backgroundSecondary"
                                )}>
                                    Buy
                                </Link>
                            </li>
                            <li className="text-base rounded-full">
                                <Link href="#" className={cn(
                                    "text-textInversePrimary font-medium hover:bg-backgroundPrimary hover:text-textPrimary px-4 py-2 transition-colors duration-300 rounded-full",
                                    (isScrolled || isInverse) && "text-textPrimary hover:bg-backgroundSecondary"
                                )}>
                                    Refinance
                                </Link>
                            </li>
                            <li className="text-base rounded-full">
                                <Link href="#" className={cn(
                                    "text-textInversePrimary font-medium hover:bg-backgroundPrimary hover:text-textPrimary px-4 py-2 transition-colors duration-300 rounded-full",
                                    (isScrolled || isInverse) && "text-textPrimary hover:bg-backgroundSecondary"
                                )}>
                                    HELOC
                                </Link>
                            </li>
                            <li className="text-base rounded-full">
                                <Link href="#" className={cn(
                                    "text-textInversePrimary font-medium hover:bg-backgroundPrimary hover:text-textPrimary px-4 py-2 transition-colors duration-300 rounded-full",
                                    (isScrolled || isInverse) && "text-textPrimary hover:bg-backgroundSecondary"
                                )}>
                                    Rates
                                </Link>
                            </li>
                            <li className="text-base rounded-full">
                                <Link href="#" className={cn(
                                    "text-textInversePrimary font-medium hover:bg-backgroundPrimary hover:text-textPrimary px-4 py-2 transition-colors duration-300 rounded-full",
                                    (isScrolled || isInverse) && "text-textPrimary hover:bg-backgroundSecondary"
                                )}>
                                    Better+
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-2 md:gap-x-4 lg:gap-x-6">
                        <HoverCard openDelay={0}>
                            <HoverCardTrigger className={cn(
                                "transition-colors duration-300 border rounded-full p-2 md:p-3.5 border-strokeDivider text-textInversePrimary fill-textInversePrimary hover:bg-backgroundPrimary hover:text-accentPrimary",
                                (isScrolled || isInverse) && "border-strokeDivider text-textPrimary hover:bg-backgroundSecondary"
                            )}>
                                <Icons.call className="w-4 h-4 text-current fill-current" />
                            </HoverCardTrigger>
                            <HoverCardContent align="end" className="px-8 py-6 text-sm">
                                Call us anytime at <Link href="tel:415-523-8837" className="underline hover:text-accentPrimary">415-523-8837</Link>
                            </HoverCardContent>
                        </HoverCard>

                        <Link href="/account/sign-in">
                            <Button
                                className={cn(
                                    "hidden md:flex",
                                    (isScrolled || isInverse) ? "bg-backgroundTertiary hover:bg-backgroundSecondary text-textPrimary" : "bg-accentPrimary hover:bg-backgroundPrimary hover:text-textPrimary",
                                )}
                            >
                                Sign In
                            </Button>
                        </Link>
                        {isScrolled && (
                            <Link href="/start">
                                <Button
                                    className="h-9 md:h-12 bg-backgroundInverseSecondary text-interactiveForegroundPrimary hover:bg-accentPrimary"
                                >
                                    Get started
                                </Button>
                            </Link>
                        )}
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "flex xl:hidden bg-transparent text-textInversePrimary hover:bg-transparent",
                                (isScrolled || isInverse) && "text-textPrimary"
                            )}
                        >
                            <MenuIcon className="w-5 h-5" />
                        </Button>
                    </div>
                </nav>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            </header>
        </AnimationContainer>
    )
};

export default Navbar
