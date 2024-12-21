import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import React from "react";

const PercentageCalculatorDescription = () => {
    return (
        <div className="container mx-auto px-4 py-6">
            <Card className="mx-auto w-full max-w-2xl p-6 shadow-md">
                <CardContent>
                    <CardTitle>What is a Percentage?</CardTitle>
                    <CardDescription className="mt-3">
                        <p className="mb-4">
                            In mathematics, a percentage represents a value as a
                            fraction of 100, providing a straightforward way to
                            express proportions. Often symbolized by the{" "}
                            <strong>%</strong> sign, percentages are widely used
                            in fields like finance, statistics, and everyday
                            calculations.
                        </p>
                        <p className="mb-4">
                            For example, <strong>35%</strong> means 35 out of
                            every 100 units, which can also be represented as
                            the decimal <strong>0.35</strong> or the fraction
                            <strong>35/100</strong>.
                        </p>
                        <p className="mb-4">
                            Percentages are calculated by multiplying a ratio by
                            100. For instance, in a classroom where 25 out of 50
                            students are male:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                The ratio is <strong>25/50 = 0.5</strong>.
                            </li>
                            <li>
                                By multiplying by 100, we get{" "}
                                <strong>50%</strong>, indicating half of the
                                students are male.
                            </li>
                        </ul>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            Percentage Formula
                        </h3>
                        <p className="mb-4">
                            The basic formula for calculating percentages
                            involves:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                <strong>P</strong>: The percentage
                            </li>
                            <li>
                                <strong>V1</strong>: The initial value
                            </li>
                            <li>
                                <strong>V2</strong>: The resulting value
                            </li>
                        </ul>
                        <p className="mb-4">
                            Formula: <strong>P × V1 = V2</strong>
                        </p>
                        <p className="mb-4">
                            Example: To find the percentage of 30 that results
                            in 1.5:
                        </p>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                            <p>
                                <strong>P × 30 = 1.5</strong>
                            </p>
                            <p>
                                Solving for <strong>P</strong>:{" "}
                                <strong>P = 1.5 / 30 = 0.05 = 5%</strong>
                            </p>
                        </div>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            Percentage Difference Formula
                        </h3>
                        <p className="mb-4">
                            The percentage difference between two values is
                            calculated as:
                        </p>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                            <p>
                                <strong>
                                    Percentage Difference = (|Value1 - Value2| /
                                    Average of Values) × 100
                                </strong>
                            </p>
                        </div>
                        <p className="mb-4">
                            Example: To calculate the percentage difference
                            between 10 and 6:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>
                                Absolute difference:{" "}
                                <strong>|10 - 6| = 4</strong>
                            </li>
                            <li>
                                Average: <strong>(10 + 6) / 2 = 8</strong>
                            </li>
                            <li>
                                Percentage Difference:{" "}
                                <strong>(4 / 8) × 100 = 50%</strong>
                            </li>
                        </ul>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            Percentage Change Formula
                        </h3>
                        <p className="mb-4">
                            The percentage change formula calculates how much a
                            value has increased or decreased relative to its
                            original value:
                        </p>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                            <p>
                                <strong>
                                    Percentage Change = (Difference / Original
                                    Value) × 100
                                </strong>
                            </p>
                        </div>
                        <p className="mb-4">
                            Example: If a price of $500 increases by 10%, the
                            new price is:
                        </p>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                            <p>
                                <strong>500 × (1 + 0.1) = 550</strong>
                            </p>
                        </div>
                        <p className="mb-4">
                            Similarly, if the price decreases by 10%, the new
                            price is:
                        </p>
                        <div className="bg-gray-100 p-4 rounded mb-4">
                            <p>
                                <strong>500 × (1 - 0.1) = 450</strong>
                            </p>
                        </div>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default PercentageCalculatorDescription;
