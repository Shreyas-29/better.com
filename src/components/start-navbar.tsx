import Link from "next/link";
import React from 'react'
import Icons from "./icons";
import { Progress } from "@/components/ui/progress"
import Image from "next/image";

const StartNavbar = () => {
    return (
        <header className="sticky inset-x-0 top-0 z-10 w-auto">
            <div className="relative w-full px-5 pb-16 mx-auto max-w-screen-xl md:px-8">
                <div className="flex items-center justify-between w-full py-6 bg-backgroundPrimary">
                    <Link href="/" className="px-1 py-2">
                        <Icons.mortgage className="w-16 h-auto" />
                    </Link>
                    <Link href="" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-backgroundInverseTertiary">
                            <Icons.phone className="w-5 h-5" />
                        </div>
                        <h5 className="hidden text-base font-semibold md:block">
                            Need help? Call (415) 523 8837
                        </h5>
                    </Link>
                </div>
                <div className="sticky top-0 w-full bg-backgroundPrimary">
                    <Progress value={33} className="h-1" />
                    <div className="absolute flex items-center justify-center w-12 h-12 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <Image
                            src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg"
                            alt="Spokes person"
                            width={40}
                            height={40}
                            className="w-full h-full rounded-full"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
};

export default StartNavbar
