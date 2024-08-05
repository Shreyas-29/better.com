import React from 'react'
import Wrapper from "./wrapper";
import Icons from "./icons";
import Link from "next/link";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import AnimationContainer from "./animation-container";

const Footer = () => {
    return (
        <footer className="w-full pt-8 bg-textInverseSecondary">
            <div className="w-full p-6 m-auto md:px-10 lg:px-16 xl:px-40">
                <AnimationContainer>
                    <div className="flex items-start">
                        <Icons.logo className="w-20 text-[#007848]" />
                    </div>
                    <div className="flex flex-col mt-6 md:flex-row gap-y-8 md:gap-16">
                        <div className="flex-1 basis-1/6">
                            <p className="text-base text-textPrimary !leading-none">
                                Better is a family of companies serving all your homeownership needs.
                            </p>
                            <ul className="mt-6 space-y-4">
                                <li className="mt-4">
                                    <Link href="#">
                                        <Image
                                            src="/images/better-mortgage-logo.svg"
                                            alt="better mortgage homepage"
                                            width={150}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </Link>
                                    <p className="mt-3 text-sm text-left text-textPrimary">
                                        We can&apos;t wait to say “Welcome home.” Apply 100% online, with expert customer support.
                                    </p>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/images/better-real-estate-logo.svg"
                                            alt="better mortgage homepage"
                                            width={160}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </Link>
                                    <p className="mt-3 text-sm text-left text-textPrimary">
                                        Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                                    </p>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/images/better-cover-logo.svg"
                                            alt="better mortgage homepage"
                                            width={115}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </Link>
                                    <p className="mt-3 text-sm text-left text-textPrimary">
                                        Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                                    </p>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/images/better-inspect-logo.svg"
                                            alt="better mortgage homepage"
                                            width={130}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </Link>
                                    <p className="mt-3 text-sm text-left text-textPrimary">
                                        Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                                    </p>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image
                                            src="/images/better-settlement-services-logo.svg"
                                            alt="better mortgage homepage"
                                            width={240}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </Link>
                                    <p className="mt-3 text-sm text-left text-textPrimary">
                                        Get transparent rates when you shop for title insurance all in one convenient place.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 basis-0">
                            <h4 className="text-base md:text-lg text-textPrimary font-bold !leading-none">
                                Resources
                            </h4>
                            <ul className="mt-2 space-y-4 md:mt-6">
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Home affordability calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Mortgage calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Free mortgage calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Mortgage calculator with taxes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Mortgage calculator with PMI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Rent vs buy calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        HELOC payment calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        HELOC vs cash-out refinance calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Buy a home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Sell a home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Get home inspection
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 basis-0">
                            <h4 className="text-base md:text-lg text-textPrimary font-bold !leading-none">
                                Company
                            </h4>
                            <ul className="mt-2 space-y-4 md:mt-6">
                                <li>
                                    <Link href="/about-us" className="block py-1 hover-gradient-effect text-link footer-link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Media
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Partner With Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Learning Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Investor Relatinons
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 basis-0">
                            <h4 className="text-base md:text-lg text-textPrimary font-bold !leading-none">
                                Contact Us
                            </h4>
                            <ul className="mt-2 space-y-4 md:mt-6">
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        hello@better.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        415-523-8837
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Glossary
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 basis-0">
                            <h4 className="text-base md:text-lg text-textPrimary font-bold !leading-none">
                                Legal
                            </h4>
                            <ul className="mt-2 space-y-4 md:mt-6">
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        NMLS Consumer Access
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Terms of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Disclosures & Licensing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Affiliated Business
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block py-1 hover-gradient-effect text-link footer-link">
                                        Browser Disclaimer
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex gap-4 mt-8">
                                        <Icons.lender className="w-10 h-10" />
                                        <Icons.housing className="w-10 h-10" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer>
                    <div className="flex mt-12 gap-x-4 md:mt-60">
                        <Link href="https://www.facebook.com/better/">
                            <FacebookIcon className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/betterdotcom/">
                            <InstagramIcon className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/betterdotcom/">
                            <LinkedinIcon className="w-6 h-6" />
                        </Link>
                    </div>
                    <div className="mt-12">
                        <p className="p-0 m-0 text-xs font-normal text-left leading-body text-textPrimary">
                            <sup>1</sup> Better Mortgage&apos;s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See{" "}
                            <a className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/with/one-day-mortgage-terms">One Day Mortgage™ Terms and Conditions.
                            </a>
                        </p>
                        <p className="p-0 m-0 mt-3 text-xs font-normal text-left leading-body text-textPrimary">
                            <sup>2</sup>Better Mortgage&apos;s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See{" "}
                            <a className="font-normal underline focus:outline-interactivePrimary focus:outline-1 focus:outline-offset-[theme(spacing.2xs)] hover:text-interactivePrimary text-inherit" href="/b/better-mortgage-one-day-heloc-promotion-terms-and-conditions">
                                One Day Heloc™ Terms and Conditions.
                            </a>
                        </p>
                        <p className="p-0 m-0 mt-3 text-xs font-normal text-left leading-body text-textPrimary">
                            <sup>3</sup>Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower&apos;s home value.
                        </p>
                        <hr className="my-xl border-strokeBorder" />
                        <p className="p-0 m-0 text-xs font-normal text-left leading-body text-textPrimary">
                            © 2024 Better Home &amp; Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 3 World Trade Center, 175 Greenwich Street, 57th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender.{" "}
                            <a className="underline" data-qa="nmls-link" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511">
                                NMLS Consumer Access
                            </a>
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC&apos;s{" "}
                            <a className="underline" href="/with/better-realestate-license">
                                license numbers
                            </a>.
                            Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            <a className="underline" href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf">
                                New York State Fair Housing Notice
                            </a>
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            <a className="underline" href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf">New York Standard Operating Procedures
                            </a>
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Texas Real Estate Commission: <a className="underline" href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&amp;cid=645736">Information About Brokerage Services
                            </a> | <a className="underline" href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf">Consumer Protection Notice
                            </a>
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC&apos;s <a className="underline" href="https://www.bettercover.com/licenses">license numbers
                            </a>
                            .
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home &amp; Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
                        </p>
                        <p className="p-0 m-0 mt-4 text-xs font-normal text-left leading-body text-textPrimary">
                            Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home &amp; Finance Holding Company. Better Home &amp; Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
                        </p>
                    </div>
                </AnimationContainer>
            </div>
        </footer>
    )
};

export default Footer
