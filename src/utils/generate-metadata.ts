import { Metadata } from "next";

export const generateMetadata = ({
    title = "Simple, Online Mortgage | Better Mortgage",
    description = "Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support.",
    image = "https://media.better.com/better-com/1627660194327/meta/preview-image.jpg",
    icons = [
        {
            rel: "icon",
            sizes: "16x16",
            url: "https://media.better.com/better-com/1627660194327/meta/favicon-16x16.png",
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "https://media.better.com/better-com/1627660194327/meta/favicon-32x32.png",
        },
        {
            rel: "manifest",
            sizes: "180x180",
            url: "https://media.better.com/better-com/1627660194327/meta/apple-touch-icon.png",
        },
    ],
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: {
        rel: string;
        sizes: string;
        url: string;
    }[];
    noIndex?: boolean;
} = {}): Metadata => ({
    title: title,
    description: description,
    icons: icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
});
