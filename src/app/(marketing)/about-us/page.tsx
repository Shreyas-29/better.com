import { buttonVariants } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";
import { COMPANIES } from "@/constants";
import { CirclePlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from 'react'

const AboutUsPage = () => {
    return (
        <div className="flex-1 bg-backgroundTertiary">
            <Wrapper className="flex items-center min-h-screen max-w-screen-xl md:px-20 lg:px-28">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold !leading-none tracking-normal md:tracking-tight text-textHighlight">
                        Our mission
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-textPrimary !leading-snug tracking-tight md:tracking-tight mt-8">
                        We&apos;re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
                    </h2>
                </div>
            </Wrapper>
            <Wrapper className="flex flex-col-reverse px-20 pb-32 max-w-screen-xl gap-x-32 gap-y-6 md:px-20 lg:px-28 md:flex-row">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold text-textPrimary !leading-none md:tracking-tight">
                        The status quo is broken
                    </h2>
                    <p className="mt-6 text-base text-left text-textSecondary">
                        The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It&apos;s a system set up to benefit insiders — not you. Better.com CEO, <a href="/content/vishal-garg-better-ceo">Vishal Garg</a>, set out to change that.
                    </p>
                    <Link href="/content/the-house-that-got-away-why-i-started-better-mortgage" className={buttonVariants({ size: "lg", variant: "default", className: "mt-8 rounded-lg bg-interactivePrimary hover:bg-backgroundInversePrimary" })}>
                        Read Vishal&apos;s story
                    </Link>
                </div>
                <div className="relative w-full md:w-1/2">
                    <button className="relative w-full h-96">
                        <Image
                            src="https://media.better.com/video/vishal-mission.jpg"
                            alt=""
                            width={1080}
                            height={800}
                            className="object-cover w-full h-full rounded-lg"
                        />
                        <CirclePlayIcon className="absolute z-20 w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-textInversePrimary" />
                    </button>
                </div>
            </Wrapper>
            <Wrapper className="p-20 bg-backgroundInverseSecondary text-textInversePrimary">
                <div className="m-auto max-w-screen-lg">
                    <h2 className="text-3xl md:text-4xl font-bold !leading-none text-white">
                        How we&apos;re changing things
                    </h2>
                    <p className="mt-8 text-base text-left text-white">
                        Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers&apos;.
                    </p>
                    <p className="mt-4 text-base text-left text-white">
                        That&apos;s why Better.com is redefining the homeownership process from the ground up. We&apos;re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
                    </p>
                </div>
            </Wrapper>
            <Wrapper className="p-20">
                <h2 className="mx-auto text-2xl font-bold text-center md:text-3xl">
                    Backed by
                </h2>
                <div className="flex flex-wrap justify-around w-full mx-auto mt-20">
                    {COMPANIES.map((company) => (
                        <Link key={company.href} href={company.href} target="_blank">
                            <company.icon className="w-[154px] h-[90px]" />
                        </Link>
                    ))}
                </div>
            </Wrapper>
            <Wrapper className="py-20 text-center">
                <h2 className="mx-auto mb-16 text-2xl font-bold text-center md:text-3xl">
                    Company timeline
                </h2>
                <div className="relative w-1/3 mx-auto before:absolute before:left-1/2 before:block before:h-full before:w-1 before:translate-x-2/4 before:bg-interactiveSecondary">
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="text-lg font-bold md:text-xl text-textInversePrimary">2014</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 -ml-4 rounded-lg bg-backgroundSecondary lg:p-8 -translate-x-1/2 lg:-ml-12">
                            <p className="text-base text-left text-textSecondary">
                                After Vishal Garg&apos;s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="text-lg font-bold md:text-xl text-textInversePrimary">2015</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 ml-8 rounded-lg bg-backgroundSecondary lg:p-8 translate-x-1/2 lg:ml-16">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="text-lg font-bold md:text-xl text-textInversePrimary">2016</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 -ml-4 rounded-lg bg-backgroundSecondary lg:p-8 -translate-x-1/2 lg:-ml-12">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="w-auto text-lg font-bold md:text-xl text-textInversePrimary">2017</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 ml-8 rounded-lg bg-backgroundSecondary lg:p-8 translate-x-1/2 lg:ml-16">
                            <p className="text-base text-left text-textSecondary">
                                Better expands into the real estate market with Better Real Estate.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="w-auto text-lg font-bold md:text-xl text-textInversePrimary">2018</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 -ml-4 rounded-lg bg-backgroundSecondary lg:p-8 -translate-x-1/2 lg:-ml-12">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage partners with Ally Bank to build Ally powered by Better.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="w-auto text-lg font-bold md:text-xl text-textInversePrimary">2019</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 ml-8 rounded-lg bg-backgroundSecondary lg:p-8 translate-x-1/2 lg:ml-16">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="w-auto text-lg font-bold md:text-xl text-textInversePrimary">2021</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 -ml-4 rounded-lg bg-backgroundSecondary lg:p-8 -translate-x-1/2 lg:-ml-12">
                            <p className="text-base text-left text-textSecondary">
                                Better acquires Trussle — The UK’s most innovative online mortgage broker.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="w-auto text-lg font-bold md:text-xl text-textInversePrimary">2022</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 ml-8 rounded-lg bg-backgroundSecondary lg:p-8 translate-x-1/2 lg:ml-16">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="w-auto text-lg font-bold md:text-xl text-textInversePrimary">2023</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 -ml-4 rounded-lg bg-backgroundSecondary lg:p-8 -translate-x-1/2 lg:-ml-12">
                            <p className="text-base text-left text-textSecondary">Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to {" "} <Link href="/with/one-day-mortgage-terms" className="underline">full mortgage Commitment Letter within 24 hours</Link>{" "}vs. typical industry process of 30+ days.</p>
                        </div>
                        <div className="relative w-full p-4 my-6 ml-8 rounded-lg bg-backgroundSecondary lg:p-8 translate-x-1/2 lg:ml-16">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage launches the fully digital 3-day HELOC².
                            </p>
                        </div>
                        <div className="relative w-full p-4 my-6 -ml-4 rounded-lg bg-backgroundSecondary lg:p-8 -translate-x-1/2 lg:-ml-12">
                            <p className="text-base text-left text-textSecondary">
                                Better Mortgage launches One Day Verified Approval Letter.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block px-8 py-2 rounded-full bg-backgroundInverseSecondary">
                            <h3 className="text-lg font-bold md:text-xl text-textInversePrimary">Today</h3>
                        </div>
                        <div className="relative w-full p-4 my-6 ml-8 rounded-lg bg-backgroundSecondary lg:p-8 translate-x-1/2 lg:ml-16">
                            <p className="text-base text-left text-textSecondary">
                                You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                                <Link href="/start" className={buttonVariants({ className: "mt-4 bg-interactivePrimary hover:bg-backgroundInversePrimary rounded-lg" })}>
                                    Get started
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default AboutUsPage
