"use client";

import React, { useState } from 'react'
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Feature, FEATURES, FEATURES2, FEATURES3 } from "@/constants";
import AnimationContainer from "./animation-container";

const Features = () => {

    const [selectedFeature, setSelectedFeature] = useState<'ourProduct' | 'calculator' | 'guides'>('ourProduct');

    const handleChangeFeature = (feature: 'ourProduct' | 'calculator' | 'guides') => {
        setSelectedFeature(feature);
    };

    const getFeatures = (): Feature[] => {
        switch (selectedFeature) {
            case 'calculator':
                return FEATURES2;
            case 'guides':
                return FEATURES3;
            default:
                return FEATURES;
        }
    };

    const features = getFeatures();

    return (
        <>
            <AnimationContainer>
                <div className="flex flex-wrap justify-center w-full gap-12 lg:items-end lg:justify-between lg:gap-6">
                    <h2 className="text-3xl md:text-5xl text-textPrimary font-bold !leading-tight tracking-tight md:tracking-tight w-full max-w-lg">
                        Got questions?
                        <br />
                        We&apos;ve got answers
                    </h2>
                    <div className="flex gap-3 overflow-auto lg:gap-6 scrollbar-hide">
                        <Button
                            variant="outline"
                            onClick={() => handleChangeFeature('ourProduct')}
                            className={cn(
                                selectedFeature === "ourProduct" && "shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"
                            )}
                        >
                            Our Products
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleChangeFeature('calculator')}
                            className={cn(
                                selectedFeature === "calculator" && "shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"
                            )}
                        >
                            Calculators
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => handleChangeFeature('guides')}
                            className={cn(
                                selectedFeature === "guides" && "shadow-accentBorderSecondary border-accentBorderSecondary shadow-[0_0_0_4px_inset] text-interactivePrimary"
                            )}
                        >
                            Guides & FAQs
                        </Button>
                    </div>
                </div>
            </AnimationContainer>

            <AnimationContainer className="pb-20">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row flex-wrap justify-center w-full gap-8">
                        {features.map((feature, index) => (
                            <Link
                                key={feature.title}
                                href="#"
                                className="flex flex-col w-full max-w-lg gap-8 rounded-xl bg-successBackground px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse lg:[&:nth-child(3)]:gap-10"
                            >
                                <div className="flex flex-col gap-6">
                                    <h4 className="w-auto p-0 m-0 text-xl font-bold tracking-normal leading-heading md:text-2xl md:tracking-normal text-backgroundInversePrimary lg:text-xl">
                                        {feature.title}
                                    </h4>
                                    {(index === 1 || index === 2) && (
                                        <p className="flex-1 hidden text-sm md:flex-none md:block text-backgroundInversePrimary">
                                            {feature.description}
                                        </p>
                                    )}
                                    <div className="flex items-end justify-between">
                                        <Button size="iconlg" variant="outline" className="hover:bg-accentPrimary hover:text-textInversePrimary hover:border-0 hover:shadow-none">
                                            <ArrowRightIcon className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                                <Image
                                    src={feature.imageUrl}
                                    alt={feature.title}
                                    width={200}
                                    height={200}
                                    className="w-full rounded-lg object-cover h-[160px] md:h-[130px]"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </AnimationContainer>
        </>
    )
};

export default Features
