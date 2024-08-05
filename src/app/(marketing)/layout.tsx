import React from 'react';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full h-full">
            {children}
        </main>
    );
};
