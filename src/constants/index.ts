import Icons from "@/components/icons";

export const NAV_LINKS = [
    {
        mainLink: 'Buy',
        subLinks: [
            { text: 'Apply now', href: '/' },
            { text: 'Purchase rates', href: '/' },
            { text: 'Affordability calculator', href: '/' },
            { text: 'Mortgage calculator', href: '/mortgage-calculator' },
            { text: 'Rent vs Buy calculator', href: '/' },
            { text: 'Find an agent', href: '/' },
            { text: 'VA loans', href: '/' },
            { text: 'Learning center', href: '/' }
        ]
    },
    {
        mainLink: 'Refinance',
        subLinks: [
            { text: 'Apply now', href: '/' },
            { text: 'Refinance rates', href: '/' },
            { text: 'Cash-out refinance calculator', href: '/' },
            { text: 'Learning center', href: '/' }
        ]
    },
    {
        mainLink: 'HELOC',
        subLinks: [
            { text: 'Apply now', href: '/' },
            { text: 'Calculate your cash', href: '/' },
            { text: 'HELOC vs Cash-out refinance', href: '/' },
            { text: 'Learning center', href: '/' }
        ]
    },
    {
        mainLink: 'Rates',
        subLinks: [
            { text: 'Purchase mortgage rates', href: '/' },
            { text: 'Refinance rates', href: '/' },
            { text: 'Refinance cash-out rates', href: '/' },
            { text: 'HELOC rates', href: '/' },
            { text: 'Purchase VA rates', href: '/' }
        ]
    },
    {
        mainLink: 'Better+',
        subLinks: [
            { text: 'Get insurance', href: '/' },
            { text: 'Title and closing', href: '/' },
            { text: 'Better attorney match', href: '/' },
            { text: 'Learning center', href: '/' },
            { text: 'Better agent match', href: '/', badge: true },
            { text: 'Better duo', href: '/', badge: true }
        ]
    }
];

export interface Feature {
    title: string;
    imageUrl: string;
    href: string;
    description: string;
}

export const FEATURES: Feature[] = [
    {
        title: "Buying your first home with Better",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
        href: "#",
        description: "Details about buying your first home..."
    },
    {
        title: "One Day Mortgage",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
        href: "#",
        description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks."
    },
    {
        title: "Better HELOC",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
        href: "#",
        description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days."
    },
    {
        title: "Insurance",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
        href: "#",
        description: "Details about Insurance..."
    }
];

export const FEATURES2: Feature[] = [
    {
        title: "Mortgage Calculator",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
        href: "#",
        description: "Details about buying your first home..."
    },
    {
        title: "Affordability calculator",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp",
        href: "#",
        description: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford."
    },
    {
        title: "HELOC calculator",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp",
        href: "#",
        description: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be."
    },
    {
        title: "Fixed-rate loan comparison calculator",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp",
        href: "#",
        description: "Details about Insurance..."
    }
];

export const FEATURES3: Feature[] = [
    {
        title: "What is a good debt-to-income ratio for a home loan?",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
        href: "#",
        description: "Details about buying your first home..."
    },
    {
        title: "Buying a house without realtor",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp",
        href: "#",
        description: "Thinking about buying a house without a real estate agent? Read this first."
    },
    {
        title: "Timeline for homebuying process",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp",
        href: "#",
        description: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps."
    },
    {
        title: "Conventional loan requirements",
        imageUrl: "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
        href: "#",
        description: "Details about Insurance..."
    }
];

export const GROUPS = [
    {
        title: "Buying a home",
        icon: Icons.group1,
    },
    {
        title: "Refinance my mortgage",
        icon: Icons.group2,
    },
    {
        title: "Get cash from my home",
        icon: Icons.group3,
    },
];

export const ROUTES = ["/start"];
export const MAIN_ROUTES = ["/about-us", "/contact-us", "/mortgage-calculator"];

export const COMPANIES = [
    {
        href: "https://group.softbank/en/philosophy",
        icon: Icons.comp1,
    },
    {
        href: "https://www.ally.com/",
        icon: Icons.comp2,
    },
    {
        href: "https://www.citi.com/",
        icon: Icons.comp3,
    },
    {
        href: "https://bank.pingan.com/english/index.shtml",
        icon: Icons.comp4,
    },
    {
        href: "https://www.goldmansachs.com/",
        icon: Icons.comp5,
    },
    {
        href: "https://www.kpcb.com/",
        icon: Icons.comp6,
    },
    {
        href: "https://www.americanexpress.com/",
        icon: Icons.comp7,
    },
]