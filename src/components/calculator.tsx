"use client";

import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, buttonVariants } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ChevronDownIcon, PlusIcon } from "lucide-react";
import Wrapper from "./wrapper";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const Calculator = () => {

    let MINIMUM_HOME_PRICE = 50000;

    const [homePrice, setHomePrice] = useState<number>(50000);
    const [downPayment, setDownPayment] = useState<number>(10000);
    const [interestRate, setInterestRate] = useState<number>(6.5);
    const [loanTerm, setLoanTerm] = useState<number>(30);
    const [propertyTaxes, setPropertyTaxes] = useState<number>(265);
    const [homeownersInsurance, setHomeownersInsurance] = useState<number>(132);
    const [hoaFees, setHoaFees] = useState<number>(132);
    const [utilities, setUtilities] = useState<number>(100);
    const [pmi, setPmi] = useState<number>(100);
    const [zipCode, setZipCode] = useState<number | null>(null);

    const formatNumber = (value: number | string): string => {
        return Number(value).toLocaleString();
    };

    useEffect(() => {
        const proTaxRate = 0.05;
        setPropertyTaxes(homePrice * proTaxRate / 12);
    }, [homePrice]);

    // const handleHomePriceChange = (e: ChangeEvent<HTMLInputElement>) => setHomePrice(Number(e.target.value.replace(/,/g, '')));

    // const handleDownPaymentChange = (e: ChangeEvent<HTMLInputElement>) => setDownPayment(Number(e.target.value.replace(/,/g, '')));

    // const handleInterestRateChange = (e: ChangeEvent<HTMLInputElement>) => setInterestRate(Number(e.target.value));

    // const handleLoanTermChange = (e: ChangeEvent<HTMLSelectElement>) => setLoanTerm(Number(e.target.value));

    // const calculateMonthlyPayment = (principal: number, annualInterestRate: number, years: number): number => {
    //     const monthlyInterestRate = annualInterestRate / 100 / 12;
    //     const numberOfPayments = years * 12;
    //     return (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    // };

    // const principal = homePrice - downPayment;
    // const monthlyPrincipalAndInterest = calculateMonthlyPayment(principal, interestRate, loanTerm);
    // const totalMonthlyPayment = monthlyPrincipalAndInterest + propertyTaxes + homeownersInsurance + hoaFees + utilities;


    const handleHomePriceChange = (newHomePrice: number) => {
        if (newHomePrice < MINIMUM_HOME_PRICE) {
            newHomePrice = MINIMUM_HOME_PRICE;
            // update down payment proportionally
        } 
        setHomePrice(newHomePrice);
        setDownPayment(newHomePrice * (downPayment / homePrice));
    };

    const handleDownPaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newDownPayment = Number(e.target.value.replace(/,/g, ''));
        setDownPayment(newDownPayment <= homePrice ? newDownPayment : homePrice);
    };

    const handleInterestRateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInterestRate(Number(e.target.value));
    };

    const handleLoanTermChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setLoanTerm(Number(e.target.value));
    };

    const calculateMonthlyPayment = (principal: number, annualInterestRate: number, years: number): number => {
        const monthlyInterestRate = annualInterestRate / 100 / 12; // here we divide by 100 to convert the percentage to a decimal then divide by 12 to get the monthly interest rate
        const numberOfPayments = years * 12; // here we multiply the years by 12 to get the number of monthly payments
        return (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
        // multiply the loan amount (principal) by the monthly interest rate. This gives the interest for the first month
        // this part raises (1 + monthlyInterestRate) to the power of -numberOfPayments, it accounts for the effect of interest compounding over the entire loan period
        // 1 - (result from above): subtract the above result from 1 to get the final denominator value 
    };

    const principal = homePrice - downPayment; // the loan amount
    const monthlyPrincipalAndInterest = calculateMonthlyPayment(principal, interestRate, loanTerm); // calculate the monthly payment
    const totalMonthlyPayment = monthlyPrincipalAndInterest + propertyTaxes + homeownersInsurance + hoaFees + utilities + pmi; // calculate the total monthly payment all things

    const width = (value: number, maxValue: number) => {
        return maxValue === 0 ? 0 : (value / maxValue) * 100;
    };

    const total = Math.max(propertyTaxes, homeownersInsurance, hoaFees, utilities, pmi);

    let mainPrice = formatNumber(monthlyPrincipalAndInterest.toFixed(2));


    return (
        <>
            <div className="py-20 bg-successBackground">
                <Wrapper className="bg-successBackground">
                    <div className="flex flex-col justify-between gap-x-6 md:px-4">
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold md:text-4xl text-textPrimary">
                                Mortgage calculator
                            </h1>
                            <p className="my-8 text-base text-textSecondary lg:max-w-3xl">
                                Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage payments if you will be required to have private mortgage insurance (PMI). Also learn why
                            </p>
                            <div className="flex items-start gap-6 mt-4 mb-8">
                                <div className="grow">
                                    <div className="w-full max-w-80">
                                        <label htmlFor="home-price" className="text-sm font-semibold md:text-base text-textPrimary">
                                            Home price
                                        </label>
                                        <div className="flex relative items-center w-full h-16 lg:h-20 xl:h-24 mt-2 rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                            <span className="absolute text-lg font-black left-4 md:text-2xl lg:text-4xl xl:text-5xl text-textPrimary">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                id="home-price"
                                                value={formatNumber(homePrice)}
                                                onChange={(e) => handleHomePriceChange(Number(e.target.value.replace(/,/g, '')))}
                                                className="w-full py-2 pl-12 pr-4 text-lg font-black bg-transparent border-none md:text-2xl lg:text-4xl xl:text-5xl text-textPrimary focus:border-none focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grow">
                                    <div className="w-full max-w-">
                                        <p className="mb-4 text-sm font-semibold md:text-base text-textPrimary">
                                            Monthly payment
                                        </p>
                                        <p className="flex items-baseline h-8 my-6 overflow-hidden text-2xl font-bold lg:text-4xl xl:text-5xl text-textPrimary md:my-0 md:h-12 lg:h-16 md:mt-auto">
                                            ${formatNumber(totalMonthlyPayment.toFixed(2))}/mo
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-1 hidden mt-auto md:flex">
                                    <Link href="/preapproval/nxt-purchase" className={buttonVariants({ size: "lg", className: "bg-interactivePrimary hover:bg-backgroundInversePrimary rounded-lg" })}>
                                        Get pre-approved
                                    </Link>
                                </div>
                            </div>
                            <div className="relative mx-6 my-12">
                                <Slider
                                    defaultValue={[homePrice / 10000]}
                                    max={100}
                                    min={5}
                                    step={1}
                                    onValueChange={(value) => handleHomePriceChange(value[0] * 10000)}
                                    className="h-1"
                                />
                            </div>
                            <div className="hidden mt-4 md:block">
                                <div className="flex gap-12 mt-2 xl:gap-28">
                                    <div className="flex flex-col flex-1 gap-2 mb-4 lg:flex-row lg:gap-4">
                                        <div className="w-full h-16 grow">
                                            <div className="flex flex-col relative items-start px-4 w-full h-full rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                                <label htmlFor="zip-code" className="mt-1 text-xs font-semibold lg:text-sm text-muted-foreground">
                                                    ZIP code
                                                </label>
                                                <input
                                                    type="number"
                                                    id="zip-code"
                                                    value={Number(zipCode)}
                                                    onChange={(e) => setZipCode(Number(e.target.value.toString().slice(0, 6)))}
                                                    maxLength={6}
                                                    className="w-full py-1 text-lg font-bold bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full h-16 grow">
                                            <div className="relative flex items-start w-full h-full">
                                                <div className="w-9/12 h-full relative px-4 bg-backgroundTertiary border rounded-lg rounded-r-none hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                                    <label htmlFor="down-payment" className="text-xs lg:text-sm text-muted-foreground font-semibold mt-0.5">
                                                        Down payment
                                                    </label>
                                                    <div className="flex items-center">
                                                        <span className="absolute text-lg font-bold left-4 text-textPrimary">
                                                            $
                                                        </span>
                                                        <input
                                                            type="text"
                                                            id="down-payment"
                                                            value={formatNumber(downPayment)}
                                                            onChange={handleDownPaymentChange}
                                                            className="w-full py-1 pl-6 text-lg font-bold bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-3/12 min-w-16 h-full bg-backgroundTertiary border rounded-lg rounded-l-none hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                                    <div className="h-full p-2">
                                                        <input
                                                            type="text"
                                                            id="down-payment-percent"
                                                            value={`${((downPayment / homePrice) * 100).toFixed(0)}`}
                                                            onChange={(e) => setDownPayment(homePrice * Number(e.target.value) / 100)}
                                                            className="w-full h-full p-1 text-lg font-bold bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                                        />
                                                        <span className="absolute text-lg font-bold -translate-y-1/2 top-1/2 right-4 bg-background text-textPrimary">
                                                            %
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2 mb-4 lg:flex-row lg:gap-4">
                                        <div className="w-full h-16 grow">
                                            <div className="relative flex items-start w-full h-full">
                                                <div className="w-full h-full relative px-4 bg-backgroundTertiary border rounded-lg hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                                    <label htmlFor="interest-rate" className="text-xs lg:text-sm text-muted-foreground font-semibold mt-0.5">
                                                        Interest rate
                                                    </label>
                                                    <div className="flex items-center">
                                                        <input
                                                            type="text"
                                                            id="interest-rate"
                                                            value={interestRate.toString()}
                                                            onChange={handleInterestRateChange}
                                                            className="w-full py-1 text-lg font-bold bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                                        />
                                                        <span className="ml-1 text-lg font-bold text-textPrimary">
                                                            %
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full h-16 grow">
                                            <div className="relative flex items-start w-full h-full">
                                                <div className="w-full h-full relative px-4 bg-backgroundTertiary border rounded-lg hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                                    <label htmlFor="loan-term" className="text-xs lg:text-sm text-muted-foreground font-semibold mt-0.5">
                                                        Loan term
                                                    </label>
                                                    <select
                                                        id="loan-term"
                                                        value={loanTerm.toString()}
                                                        onChange={handleLoanTermChange}
                                                        className="w-full py-1 text-lg font-bold bg-background outline-none border-none text-textPrimary focus:border-none focus:outline-none"
                                                    >
                                                        <option value="15">15 years</option>
                                                        <option value="20">20 years</option>
                                                        <option value="30">30 years</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mt-4 md:hidden">
                                <Link href="/preapproval/nxt-purchase" className={buttonVariants({ size: "lg", className: "bg-interactivePrimary hover:bg-backgroundInversePrimary rounded-lg" })}>
                                    Get pre-approved
                                </Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="bg-backgroundPrimary">
                <Wrapper className="pt-20 bg-backgroundPrimary">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="space-y-4">
                            <h4 className="text-base font-semibold md:text-lg">
                                Monthly payment breakdown
                            </h4>
                            <p className="pt-4 text-3xl font-bold text-textPrimary md:text-5xl">
                                ${isNaN(totalMonthlyPayment) ? "Invalid input" : formatNumber(totalMonthlyPayment.toFixed(2))}/mo
                            </p>
                            <div className="flex max-w-full pt-8">
                                <HoverCard openDelay={0} closeDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <div
                                            className="h-20 rounded-full cursor-pointer bg-accentBackground transition-width min-w-1"
                                            style={{ width: `${width(Number(mainPrice), total)}%` }}
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent align="start" className="sm:px-6">
                                        <h4 className="text-lg font-semibold">
                                            Principal & interest
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Principal is the amount originally borrowed. Interest is the cost of borrowing that principal.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard openDelay={0} closeDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <div
                                            className="h-20 rounded-full cursor-pointer bg-infoForeground transition-width min-w-1"
                                            style={{ width: `${width(propertyTaxes, total)}%` }}
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent align="start" className="sm:px-6">
                                        <h4 className="text-lg font-semibold">
                                            Property taxes
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            These are taxes paid to the local government, not your mortgage lender. This estimate uses the national average for property taxes, which is 1.06%.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard openDelay={0} closeDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <div
                                            className="h-20 rounded-full cursor-pointer bg-infoSecondary transition-width min-w-1"
                                            style={{ width: `${width(homeownersInsurance, total)}%` }}
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent align="start" className="sm:px-6">
                                        <h4 className="text-lg font-semibold">
                                            Homeowners insurance
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            This is an estimate of your monthly premium.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard openDelay={0} closeDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <div
                                            className="bg-[#ffd566] rounded-full cursor-pointer h-20 transition-width min-w-1"
                                            style={{ width: `${width(hoaFees, total)}%` }}
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent align="start" className="sm:px-6">
                                        <h4 className="text-lg font-semibold">
                                            HOA fees
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            These are payments made to a homeowners association (HOA) that oversees day-to-day operations, rules, and regulations.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard openDelay={0} closeDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <div
                                            className="bg-[#fe8b72] rounded-full cursor-pointer h-20 transition-width min-w-1"
                                            style={{ width: `${width(utilities, total)}%` }}
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent align="start" className="sm:px-6">
                                        <h4 className="text-lg font-semibold">
                                            Utilities
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            These include things like water, gas, electricity, and internet.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                                <HoverCard openDelay={0} closeDelay={0}>
                                    <HoverCardTrigger asChild>
                                        <div
                                            className="bg-[#b24a00] rounded-full cursor-pointer h-20 transition-width min-w-1"
                                            style={{ width: `${width(pmi, total)}%` }}
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent align="start" className="sm:px-6">
                                        <h4 className="text-lg font-semibold">
                                            PMI
                                        </h4>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Private mortgage insurance (PMI) is insurance required by for borrowers who put less than 20% down on a conventional loan.  PMI can be cancelled once the borrower has at least 20% equity in the property.
                                        </p>
                                    </HoverCardContent>
                                </HoverCard>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between h-16">
                                <div className="flex items-center w-1/2 text-textPrimary">
                                    <div className="rounded-sm h-4 w-1.5 mr-2 bg-backgroundInverseSecondary"></div>
                                    <p className="p-0 m-0 text-base font-normal text-left leading-body text-textPrimary">
                                        Principal &amp; interest
                                    </p>
                                </div>
                                <div className="flex items-center w-1/2 pt-0 text-base font-bold sm:w-40 text-interactiveForegroundSecondary">
                                    ${formatNumber(monthlyPrincipalAndInterest.toFixed(2))}
                                </div>
                            </div>
                            <div className="flex justify-between h-16">
                                <div className="flex items-center w-1/2 text-textPrimary">
                                    <div className="rounded-sm h-4 w-1.5 mr-2 bg-infoForeground"></div>
                                    <p className="p-0 m-0 text-base font-normal text-left leading-body text-textPrimary">
                                        Property taxes
                                    </p>
                                </div>
                                <div className="flex items-center w-1/2 pt-0 text-base font-bold sm:w-40 text-interactiveForegroundSecondary">
                                    <div className="flex relative items-center w-full h-16 rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                        <span className="absolute text-lg font-black left-4 text-textPrimary">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="property-taxes"
                                            value={propertyTaxes.toFixed(2)}
                                            onChange={(e) => setPropertyTaxes(Number(e.target.value))}
                                            className="w-full py-2 pl-12 pr-4 text-lg font-black text-right bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-16">
                                <div className="flex items-center w-1/2 text-textPrimary">
                                    <div className="rounded-sm h-4 w-1.5 mr-2 bg-infoSecondary"></div>
                                    <p className="p-0 m-0 text-base font-normal text-left leading-body text-textPrimary">
                                        Homeowners insurance
                                    </p>
                                </div>
                                <div className="flex items-center w-1/2 pt-0 text-base font-bold sm:w-40 text-interactiveForegroundSecondary">
                                    <div className="flex relative items-center w-full h-16 rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                        <span className="absolute text-lg font-black left-4 text-textPrimary">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="homeowners-insurance"
                                            value={homeownersInsurance}
                                            onChange={(e) => setHomeownersInsurance(Number(e.target.value))}
                                            className="w-full py-2 pl-12 pr-4 text-lg font-black text-right bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-16">
                                <div className="flex items-center w-1/2 text-textPrimary">
                                    <div className="rounded-sm h-4 w-1.5 mr-2 bg-[#ffd566]"></div>
                                    <p className="p-0 m-0 text-base font-normal text-left leading-body text-textPrimary">
                                        HOA fees
                                    </p>
                                </div>
                                <div className="flex items-center w-1/2 pt-0 text-base font-bold sm:w-40 text-interactiveForegroundSecondary">
                                    <div className="flex relative items-center w-full h-16 rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                        <span className="absolute text-lg font-black left-4 text-textPrimary">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="hoa-fees"
                                            value={hoaFees}
                                            onChange={(e) => setHoaFees(Number(e.target.value))}
                                            className="w-full py-2 pl-12 pr-4 text-lg font-black text-right bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-16">
                                <div className="flex items-center w-1/2 text-textPrimary">
                                    <div className="rounded-sm h-4 w-1.5 mr-2 bg-[#fe8b72]"></div>
                                    <p className="p-0 m-0 text-base font-normal text-left leading-body text-textPrimary">
                                        Utilities
                                    </p>
                                </div>
                                <div className="flex items-center w-1/2 pt-0 text-base font-bold sm:w-40 text-interactiveForegroundSecondary">
                                    <div className="flex relative items-center w-full h-16 rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                        <span className="absolute text-lg font-black left-4 text-textPrimary">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="utilities"
                                            value={utilities}
                                            onChange={(e) => setUtilities(Number(e.target.value))}
                                            className="w-full px-4 py-2 text-lg font-black text-right bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between h-16">
                                <div className="flex items-center w-1/2 text-textPrimary">
                                    <div className="rounded-sm h-4 w-1.5 mr-2 bg-[#b24a00]"></div>
                                    <p className="p-0 m-0 text-base font-normal text-left leading-body text-textPrimary">
                                        PMI
                                    </p>
                                </div>
                                <div className="flex items-center w-1/2 pt-0 text-base font-bold sm:w-40 text-interactiveForegroundSecondary">
                                    <div className="flex relative items-center w-full h-16 rounded-lg bg-backgroundTertiary border hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset]">
                                        <span className="absolute text-lg font-black left-4 text-textPrimary">
                                            $
                                        </span>
                                        <input
                                            type="text"
                                            id="pmi"
                                            value={pmi}
                                            onChange={(e) => setPmi(Number(e.target.value))}
                                            className="w-full px-4 py-2 text-lg font-black text-right bg-transparent border-none text-textPrimary focus:border-none focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    )
};

export default Calculator
