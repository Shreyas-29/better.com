import Calculator from "@/components/calculator";
import Wrapper from "@/components/wrapper";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MortgageCalculatorPage = () => {
    return (
        <>
            <Calculator />

            <div className="bg-backgroundPrimary">
                <Wrapper className="justify-between px-6 py-16 md:px-14 md:flex-row gap-x-8">
                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        How does a mortgage calculator help me?
                    </h2>
                    <p className="my-4 text-base text-textSecondary">
                        When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
                    </p>
                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        How much monthly mortgage payment can I afford?
                    </h2>
                    <p className="my-4 text-base text-textSecondary">
                        Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio <Link href="/" className="underline text-interactivePrimary">debt-to-income ratio(DTI)</Link>. The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It&apos;s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
                    </p>
                    <div className="flex flex-col items-center">
                        <div>
                            <p className="my-4 text-base text-textSecondary">
                                Formula for calculating your debt-to-income (DTI) ratio:
                            </p>
                            <Image
                                src="https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg"
                                alt="DTI Formula"
                                width={780}
                                height={153}
                            />
                            <p className="my-4 text-base text-textSecondary">
                                Here&apos;s an example of what calculating your DTI might look like:
                            </p>
                            <Image
                                src="https://media.better.com/better-com/mortgage-calculator/dti-example.jpg"
                                alt="Mortgage Calculator Example"
                                width={780}
                                height={525}
                            />
                        </div>
                    </div>
                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        How to calculate monthly mortgage payments?
                    </h2>
                    <p className="my-4 text-base text-textSecondary">
                        Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it&apos;s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
                    </p>
                    <h3 className="text-textPrimary font-semibold !leading-none text-xl md:text-2xl mb-8">
                        Formula for calculating monthly mortgage payments
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here&apos;s the formula for calculating principal and interest yourself:
                    </p>
                    <div className="flex flex-col items-center">
                        <Image
                            src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
                            alt="Mortgage Calculator Formula"
                            width={780}
                            height={126}
                        />
                        <div>
                            <p className="my-4 text-base font-normal text-textPrimary">
                                Where:
                            </p>
                            <ul className="ml-4 list-disc">
                                <li>
                                    <p className="my-4 text-base font-normal text-textPrimary"><b>M</b> is monthly mortgage payments
                                    </p>
                                </li>
                                <li>
                                    <p className="my-4 text-base font-normal text-textPrimary">
                                        <b>P</b> is the principal loan amount (the amount you borrow)
                                    </p>
                                </li>
                                <li>
                                    <p className="my-4 text-base font-normal text-textPrimary">
                                        <b>r</b> is the monthly interest rate<br />(annual interest rate divided by 12 and expressed as a decimal)<br />
                                        <small>For example:<br />if the annual interest rate is <b>5%</b>,<br /> the monthly rate would be <b>0.05/12</b> = .00417, or<b>.417%</b>
                                        </small>
                                    </p>
                                </li>
                                <li>
                                    <p className="my-4 text-base font-normal text-textPrimary">
                                        <b>n</b> is the total number of payments in months<br />
                                        <small>For example:<br />for a 30-year loan, n = 30x12 = <b>360</b> months</small>
                                    </p>
                                </li>
                            </ul>
                            <p className="my-4 text-base font-normal text-textPrimary">
                                Here&apos;s a simple example:
                            </p>
                            <Image
                                src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg"
                                alt="Monthly mortgage payment formula example"
                                width={780}
                                height={221}

                            />
                        </div>
                    </div>
                    <p className="my-4 text-base font-normal text-textPrimary">
                        This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you&apos;ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.
                    </p>
                    <hr className="my-12 border border-strokeDivider" />
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        How to use this mortgage calculator?
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        Play around with different home prices, locations, <Link href="/" className="underline text-interactivePrimary">down payments</Link>, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that&apos;s less than 20% of the home price, <Link href="/" className="underline text-interactivePrimary">private mortgage insurance (PMI)</Link> costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we&apos;ve included a utilities estimate that you can break down by service. If you&apos;re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        The only amounts we haven&apos;t included are the money you&apos;ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the <Link href="/" className="underline text-interactivePrimary">private mortgage insurance (PMI)</Link>.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Fun fact: <Link href="/" className="underline text-interactivePrimary">Property tax rates</Link> are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
                    </p>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        Do you know your property tax rate?
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here&apos;s a helpful chart from <Link href="/" className="underline text-interactivePrimary">Forbes</Link> breaking down the Census Bureau&apos;s 2021 American Community Survey 5-year estimate:
                    </p>
                    {/* table */}

                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        How is Better&apos;s mortgage calculator different?
                    </h2>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        This mortgage calculator shows your payments with taxes and insurance
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Your lender will usually require you to have homeowners insurance while you&apos;re settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that&apos;s been damaged or destroyed.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Here&apos;s an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
                    </p>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        This mortgage calculator shows your mortgage costs with PMI
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Choosing a mortgage with PMI is a popular option: <Link href="/" className="underline text-interactivePrimary"> 71% of first-time homebuyers</Link>  had a down payment of less than 20% in July 2021. <Link href="/" className="underline text-interactivePrimary">In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn&apos;t risen above 10% since 1989.</Link>
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you&apos;ve accumulated at least 20% home equity.
                    </p>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        This mortgage calculator includes HOA fees
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they&apos;re an essential factor to consider when calculating your mortgage costs.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It&apos;s important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments&apos; to cover unexpected expenses from time to time.
                    </p>
                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        How to reduce your monthly mortgage payments?
                    </h2>
                    <p className="my-4 text-base text-textSecondary">
                        The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.
                    </p>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        Extend the length of your mortgage
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage&apos; is known as ‘increasing your loan term&apos;.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
                    </p>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        Increase your down payment
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you&apos;re able to put at least 20% of the home price towards your down payment, you&apos;ll be able to avoid PMI (private mortgage insurance). Even if you can&apos;t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.
                    </p>
                    <h3 className="text-textPrimary font-bold !leading-none text-xl md:text-2xl mb-8">
                        Get a lower interest rate
                    </h3>
                    <p className="my-4 text-base text-textSecondary">
                        Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your <Link href="/" className="underline text-interactivePrimary">loan-to-value ratio (LTV).</Link>
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an <Link href="/" className="underline text-interactivePrimary">adjustable-rate mortgage (ARM).</Link> An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won&apos;t keep the mortgage for long.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        If you&apos;re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your <Link href="/" className="underline text-interactivePrimary">debt-to-income ratio (DTI)</Link>, lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.
                    </p>
                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        How much home can I afford?
                    </h2>
                    <p className="my-4 text-base text-textSecondary">
                        Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our <Link href="/" className="underline text-interactivePrimary">debt-to-income ratio (DTI)</Link>. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
                    </p>
                    <hr className="my-12 border border-strokeDivider" />
                    <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                        Next steps to buying a house
                    </h2>
                    <p className="my-4 text-base text-textSecondary">
                        There are <Link href="/" className="underline text-interactivePrimary"> 8 steps to buying a house</Link> and by using this calculator you&apos;ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn&apos;t impact your credit score. It&apos;s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you&apos;ll be offered.
                    </p>
                    <p className="my-4 text-base text-textSecondary">
                        If you&apos;re ready to buy a home now, our <Link href="/" className="underline text-interactivePrimary"> definitive home buying checklist</Link> can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you&apos;ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don&apos;t have this kind of proof that they&apos;re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you&apos;ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**
                    </p>
                    <hr className="my-12 border border-strokeDivider" />
                    <div>
                        <h2 className="text-textPrimary font-bold !leading-none text-2xl md:text-3xl mb-8">
                            More resources
                        </h2>
                        <div className="flex flex-col justify-between gap-8 md:flex-row pt-9">
                            <div className="flex-1 px-10 py-6 border rounded-lg border-strokeDivider">
                                <Image
                                    src="https://media.better.com/better-com/mortgage-calculator/doc-correct.svg"
                                    alt="Get pre-approved"
                                    width={32}
                                    height={32}
                                />
                                <p className="mt-4 text-xl font-medium text-interactiveForegroundSecondary">
                                    Get pre-approved to see how much you can borrow
                                </p>
                                <Link href="https://better.com/preapproval/nxt-purchase?utm_source=website&utm_medium=webpage&utm_campaign=calculator&utm_content=mortgage-calculator" className="flex items-center gap-1 mt-4 text-base font-semibold hover:underline text-interactivePrimary">
                                    Get started
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                                <p className="mt-2 text-xs text-textSecondary">
                                    Won&apos;t impact your credit
                                </p>
                            </div>
                            <div className="flex-1 px-10 py-6 border rounded-lg border-strokeDivider">
                                <Image
                                    src="https://media.better.com/better-com/mortgage-calculator/downtrend.svg"
                                    alt="Get pre-approved"
                                    width={32}
                                    height={32}
                                />
                                <p className="mt-4 text-xl font-medium text-interactiveForegroundSecondary">
                                    See today&apos;s rates in your area
                                </p>
                                <Link href="https://better.com/mortgage-rates" className="flex items-center gap-1 mt-4 text-base font-semibold hover:underline text-interactivePrimary">
                                    See rates
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="flex-1 px-10 py-6 border rounded-lg border-strokeDivider">
                                <Image
                                    src="https://media.better.com/better-com/mortgage-calculator/calculator.svg"
                                    alt="Get pre-approved"
                                    width={32}
                                    height={32}
                                />
                                <p className="mt-4 text-xl font-medium text-interactiveForegroundSecondary">
                                    Find out your max homebuying budget
                                </p>
                                <Link href="https://better.com/how-much-house-can-i-afford" className="flex items-center gap-1 mt-4 text-base font-semibold hover:underline text-interactivePrimary">
                                    Try our mortgage calculator
                                    <ArrowRightIcon className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                <Wrapper>
                    <div className="justify-between pb-8 mx-auto max-w-screen-2xl">
                        <p className="text-xs text-textPrimary">
                            *See <Link href="https://better.com/faq/rates/whats-the-fine-print-better-real-estate" className="underline text-interactivePrimary"> Better Real Estate discount terms and conditions</Link> .
                        </p>
                        <p className="text-xs text-textPrimary">
                            **The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey&apos;s (PMMS) 30-year fixed-rate mortgage product with Better Mortgage&apos;s own offered rate for a comparable mortgage product between Jan ‘20 - Dec ‘20. PMMS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgage&apos;s offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (760 FICO) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio and other variables.
                        </p>
                    </div>
                </Wrapper>
            </div>
        </>
    )
};

export default MortgageCalculatorPage
