import React from "react";
import Head from "next/head";
import PercentageCalculator from "@/components/calculators/PercentageCalculator/PercentageCalculator";
import PercentageCalculatorDescription from "@/components/calculators/PercentageCalculator/PercentageCalculatorDescription";

export const metadata = {
    title: "Percentage Calculator Description",
    description:
        "Learn the basics of percentages, including formulas and practical examples for calculations like percentage difference and change.",
    keywords: [
        "percentage",
        "percentage calculator",
        "math",
        "percentage difference",
        "percentage change",
    ],
};

const Home = () => {
    return (
        <div>
            <Head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-EVGW2WPZ0Z"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-EVGW2WPZ0Z');
                    `,
                    }}
                />
            </Head>
            <PercentageCalculator />
            <PercentageCalculatorDescription />
        </div>
    );
};

export default Home;
