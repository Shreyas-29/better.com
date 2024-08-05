"use client";

import React, { useEffect, useState } from 'react';
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Icons from "./icons";

const images = {
    Airan: 'https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp',
    Amanda: 'https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp',
    Paul: 'https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp',
};

const Stories = () => {

    const [selectedStory, setSelectedStory] = useState<'Airan' | 'Amanda' | 'Paul'>('Airan');
    const [currentImage, setCurrentImage] = useState(images[selectedStory]);
    const [fade, setFade] = useState(false);


    const handleSelectStory = (name: 'Airan' | 'Amanda' | 'Paul') => {
        if (name !== selectedStory) {
            setFade(true);
            setTimeout(() => {
                setSelectedStory(name);
                setFade(false);
            }, 200);
        }
    };

    useEffect(() => {
        setCurrentImage(images[selectedStory]);
    }, [selectedStory]);


    return (
        <>
            <div className="flex flex-col justify-center md:max-w-lg">
                <div className="flex flex-col justify-center md:max-w-lg">
                    <h2 className="font-bold text-textPrimary w-auto tracking-tight md:tracking-tighter text-3xl md:text-3xl lg:text-[88px] !leading-none">
                        Find out why we&apos;re better.
                    </h2>
                    <Link href="/about-us" className={buttonVariants({ size: "lg", className: "w-full md:w-fit mt-6" })}>
                        See all our stories
                    </Link>
                    <div className="flex items-center justify-center mt-4 mb-12 md:mb-0 gap-x-2 text-textSecondary md:justify-start">
                        <Icons.star />
                        <span><strong>Excellent</strong></span>
                        <span><strong>4.3</strong> out of 5</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-col-reverse">
                <div className="flex gap-4 overflow-auto scrollbar-hide">
                    <Button
                        variant="outline"
                        onClick={() => handleSelectStory('Airan')}
                        className={cn(
                            selectedStory === "Airan" && "shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"
                        )}
                    >
                        Airan
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => handleSelectStory('Amanda')}
                        className={cn(
                            selectedStory === "Amanda" && "shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"
                        )}
                    >
                        Amanda
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => handleSelectStory('Paul')}
                        className={cn(
                            selectedStory === "Paul" && "shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"
                        )}
                    >
                        Paul
                    </Button>
                </div>
                <div className="flex justify-center overflow-hidden transition-all rounded-lg gap-x-4">
                    <Image
                        src={currentImage}
                        alt={selectedStory}
                        width={300}
                        height={300}
                        className={cn("rounded-xl transition-opacity duration-300", fade ? "opacity-0" : "opacity-100")}
                    />
                </div>
            </div>
        </>
    )
};

export default Stories
