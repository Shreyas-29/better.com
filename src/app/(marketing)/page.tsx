import AnimationContainer from "@/components/animation-container";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Stories from "@/components/stories";
import Wrapper from "@/components/wrapper";

const HomePage = () => {
    return (
        <div className="flex-1 h-full bg-backgroundTertiary">

            {/* dummy background */}
            <div className="absolute inset-x-0 w-full bg-accentPrimary h-96 -top-20 -z-10"></div>

            {/* hero */}
            <Wrapper className="flex-1 bg-accentPrimary hero">
                <Hero />
            </Wrapper>

            {/* stories */}
            <AnimationContainer>
                <Wrapper className="flex flex-col justify-between px-6 py-20 m-auto md:px-10 md:flex-row-reverse gap-x-16 xl:p-32">
                    <Stories />
                </Wrapper>
            </AnimationContainer>

            {/* q&a grid */}
            <Wrapper className="flex flex-col items-center gap-8 px-6 py-20 m-auto md:items-start md:px-10 lg:gap-16">
                <Features />
            </Wrapper>

            {/* divider */}
            <hr className="pb-6 my-0 border-t border-strokeDivider" />
        </div>
    )
};

export default HomePage
