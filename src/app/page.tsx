import React from "react";
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
            <PercentageCalculator />
            <PercentageCalculatorDescription />
        </div>
    );
};

export default Home;
