"use client";

import React, { useState } from 'react';
import StartNavbar from "@/components/start-navbar";
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { GROUPS } from "@/constants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Icons from "@/components/icons";

const StartPage = () => {

    const [selectedGroup, setSelectedGroup] = useState(GROUPS[0].title);

    return (
        <div className="pt-4 pb-20 bg-backgroundPrimary">
            <StartNavbar />

            <div className="flex flex-col items-center justify-center w-full mb-20">
                <div className="mx-auto space-y-8">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold !leading-snug tracking-tight">
                        <span>
                            Hi, I&apos;m Betty!
                        </span>
                        <br />
                        What can I help you with?
                    </h1>
                    <div className="max-w-lg mx-auto space-y-8">
                        <RadioGroup value={selectedGroup} onChange={setSelectedGroup} aria-label="Groups">
                            <div className="flex flex-col items-center w-full max-w-xl mx-auto gap-y-6">
                                {GROUPS.map((group) => (
                                    <RadioGroup.Option
                                        key={group.title}
                                        value={group}
                                        className={({ active, checked }) => cn(
                                            buttonVariants({ size: "lg", variant: "outline", className: "w-full rounded-xl cursor-pointer" }),
                                            // "relative block cursor-pointer rounded-lg w-full bg-transparent px-6 py-4 shadow-none border-2 border-border focus:outline-none ring-0 focus:ring-0 outline-none sm:flex sm:justify-between disabled:opacity-50",
                                            {
                                                "border-primary": active || checked
                                            }
                                        )}
                                    >
                                        <span className="flex items-center w-full gap-x-6">
                                            <span className="w-8 h-8">
                                                <group.icon strokeWidth={3} className="w-full h-full stroke-2" />
                                            </span>
                                            <span className="flex flex-col text-sm">
                                                <RadioGroup.Label as="span" className="text-lg font-bold text-foreground">
                                                    {group.title}
                                                </RadioGroup.Label>
                                            </span>
                                        </span>
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                        <div className="grid grid-cols-2 py-8">
                            <div className="w-auto col-span-1 space-y-4 text-center">
                                <p className="text-3xl font-bold">
                                    $100B
                                </p>
                                <p className="text-xs text-textSecondary">
                                    Home loans funded entirely online
                                </p>
                            </div>
                            <div className="w-auto col-span-1 space-y-4 text-center">
                                <p className="text-3xl font-bold">
                                    400K
                                </p>
                                <p className="text-xs text-textSecondary">
                                    Customers who chose a Better Mortgage
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center py-6 rounded-xl bg-successBackground">
                            <p className="text-sm text-center">
                                After a few questions, you&apos;ll unlock:
                            </p>
                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center gap-2 text-sm text-center">
                                    <Icons.percentage className="w-5 h-5 text-textHighlight" />
                                    <span className="">
                                        Custom mortgage rates
                                    </span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-center">
                                    <Icons.money className="w-5 h-5 text-textHighlight" />
                                    <span className="">
                                        Exclusive offers
                                    </span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-center">
                                    <Icons.mobile className="w-5 h-5 text-textHighlight" />
                                    <span className="">
                                        A personalized dashboard
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StartPage
