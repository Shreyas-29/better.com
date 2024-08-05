"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface Props {
    reverse?: boolean;
    className?: string;
    children: React.ReactNode;
}

const AnimationContainer = ({ children, className, reverse }: Props) => {
    return (
        <motion.div
            className={cn("w-full h-full", className)}
            initial={{ opacity: 0, y: reverse ? -20 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        >
            {children}
        </motion.div>
    )
};

export default AnimationContainer
