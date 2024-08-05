"use client";

import { CirclePlayIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from 'react'

const AboutModal = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            <button className="relative w-full h-96" onClick={() => setIsOpen(true)}>
                <Image
                    src="https://media.better.com/video/vishal-mission.jpg"
                    alt=""
                    width={1080}
                    height={800}
                    className="object-cover w-full h-full rounded-lg"
                />
                <CirclePlayIcon className="absolute z-20 w-16 h-16 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-textInversePrimary" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="relative w-full max-w-4xl p-4 mx-auto bg-white rounded-lg">
                        <button className="absolute top-8 right-8" onClick={() => setIsOpen(false)}>
                          <XIcon className="w-6 h-6 text-textInversePrimary" />
                        </button>
                        <iframe
                            src="https://www.youtube.com/embed/1KjYlLBM9j4"
                            className="w-full h-96"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </div>
    )
};

export default AboutModal
