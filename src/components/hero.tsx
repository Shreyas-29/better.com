"use client";

import AnimationContainer from "@/components/animation-container";
import Features from "@/components/features";
import Icons from "@/components/icons";
import Stories from "@/components/stories";
import { Button, buttonVariants } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { StarHalfIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <>
            <AnimationContainer>
                <h1 className="text-center text-5xl md:text-6xl lg:text-[118px] font-bold tracking-tighter text-graphPrimary !leading-tight md:relative top-12 md:top-16 lg:top-32 z-20 m-0 p-0 pt-12">
                    Mortgages
                    <br />
                    made simple
                </h1>
            </AnimationContainer>
            <AnimationContainer>
                <div className="relative flex flex-col items-center justify-center md:flex-row">
                    <div className="w-80 md:w-auto">
                        <Link href="/start" className={buttonVariants({ size: "lg", className: "mt-6 md:mt-0 px-12 bg-graphPrimary hover:!bg-accentPrimary !text-black hover:!text-accentSecondary w-full md:w-fit" })}>
                            Start my approval
                        </Link>
                        <div className="flex items-center justify-center gap-1 mt-3 text-sm text-accentSecondary">
                            <Icons.timer className="w-5 h-5" />
                            <span> 3 min </span>
                            {" "}
                            <span>| No credit impact</span>
                        </div>
                    </div>
                    <div className="mt-5 md:-mb-9 md:mt-0">
                        <Image
                            src="/images/hero.webp"
                            alt="Mortgage illustration"
                            width={510}
                            height={810}
                            className=""
                        />
                    </div>
                    <div className="rounded-lg absolute bottom-8 bg-backgroundInversePrimary px-3.5 py-2.5 md:relative md:bg-transparent md:mt-lg">
                        <div className="flex items-center gap-2">
                            <Icons.google className="w-5 h-5" />
                            <div className="flex items-center gap-x-1">
                                <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <StarIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                <StarHalfIcon className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                            </div>
                        </div>
                        <div className="mt-1 text-xs font-medium text-interactiveSecondary">
                            4.6 Stars | 3177 Google reviews
                        </div></div>
                </div>
            </AnimationContainer>
        </>
    )
};

export default Hero
