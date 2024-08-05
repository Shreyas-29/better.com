"use client";

import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "./ui/button";
import { UserIcon, XIcon } from "lucide-react";
import Icons from "./icons";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent show={false} side="left" className="flex flex-col p-0 overflow-y-scroll min-w-screen sm:max-w-full scrollbar-hide">
                <SheetHeader className="sticky inset-x-0 top-0 z-20 flex flex-row items-center justify-between px-6 py-4 bg-background">
                    <SheetTitle>
                        <Link href="/" className="w-max">
                            <Icons.logo className="w-20 h-auto" />
                        </Link>
                    </SheetTitle>
                    <SheetClose className="">
                        <Button size="icon" variant="ghost">
                            <XIcon className="w-5 h-5" />
                        </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="flex flex-col flex-1 w-full p-6 py-4">
                    <Accordion type="single" collapsible>
                        {NAV_LINKS.map((link, index) => (
                            <AccordionItem key={index} value={link.mainLink} className="border-b-0">
                                <AccordionTrigger>
                                    {link.mainLink}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="w-full space-y-2">
                                        {link.subLinks.map((subLink, index) => (
                                            <li key={index} className="w-full text-base font-semibold text-start">
                                                <Link href={subLink.href} className={buttonVariants({ variant: "ghost", className: "w-full text-start justify-start" })}>
                                                    <span className="flex-1 text-start">
                                                        {subLink.text}
                                                        {subLink.badge && (
                                                            <span className="px-3 py-0.5 ml-4 rounded-full bg-[#FFD567] font-semibold text-sm">
                                                                For Agents
                                                            </span>
                                                        )}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                <div className="w-full p-6 py-4 mt-auto space-y-4">
                    <Button size="sm" variant="subtle" className="w-full">
                        <Icons.call className="w-5 h-5 mr-2" />
                        Call us anytime at <Link href="tel:41552388371" className="underline">(415) 523 88371</Link>
                    </Button>
                    <Button size="lg" className="w-full">
                        <Link href="/start" className="flex flex-col items-center justify-center">
                            Get started
                            <div className="flex items-center justify-center gap-1 text-sm text-accentSecondary">
                                <Icons.timer className="w-5 h-5" />
                                <span> 3 min </span>
                                {" "}
                                <span>| No credit impact</span>
                            </div>
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full">
                        <Link href="/account/sign-in" className="flex items-center">
                            Sign in
                            <UserIcon className="w-4 h-4 ml-2 fill-current" />
                        </Link>
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
};

export default Sidebar