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
                    <CardDescription>
                        <p>
                            In mathematics, a percentage represents a value as a
                            fraction of 100, providing a straightforward way to
                            express proportions. Often symbolized by the
                            &quot;%&quot; sign, percentages are widely used in
                            various fields like finance, statistics, and
                            everyday calculations. For example, 35% means 35 out
                            of every 100 units, which can also be represented as
                            the decimal 0.35 or the fraction 35/100.
                        </p>
                        <p>
                            Percentages are commonly calculated by multiplying a
                            ratio by 100. Consider a classroom where 25 out of
                            50 students are male. The ratio of male students is
                            25/50, or 0.5. By multiplying this ratio by 100, we
                            get a result of 50%, indicating that half of the
                            students are male.
                        </p>
                        <h3>Percentage Formula</h3>
                        <p>
                            The basic formula for calculating percentages
                            involves three key values: the percentage (P), a
                            value (V1) that is being modified by the percentage,
                            and the result (V2). The formula can be written as:
                            <br />
                            <strong>P × V1 = V2</strong>
                        </p>
                        <p>
                            In this formula, P is the percentage, V1 is the
                            initial value, and V2 is the resulting value after
                            applying the percentage. For instance, if you need
                            to find the percentage of 30 that results in 1.5,
                            the equation would be:
                            <br />
                            <strong>P × 30 = 1.5</strong>
                            Solving for P, you would get P = 1.5 / 30 = 0.05, or
                            5%.
                        </p>
                        <h3>Percentage Difference Formula</h3>
                        <p>
                            The percentage difference between two values is
                            calculated by dividing the absolute difference of
                            those values by the average of the two. The result
                            is then multiplied by 100 to express the difference
                            as a percentage.
                        </p>
                        <p>
                            For example, to calculate the percentage difference
                            between 10 and 6, we first find the absolute
                            difference (|10 - 6| = 4) and the average ((10 + 6)
                            / 2 = 8). Then, we calculate the percentage
                            difference:
                            <br />
                            <strong>
                                Percentage Difference = (4 / 8) × 100 = 50%
                            </strong>
                        </p>
                        <h3>Percentage Change Formula</h3>
                        <p>
                            The percentage change formula helps you calculate
                            how much a value has increased or decreased relative
                            to its original value. This is done by taking the
                            difference between two values, dividing it by the
                            original value, and then multiplying by 100 to
                            express the change as a percentage.
                        </p>
                        <p>
                            For example, if a price of $500 increases by 10%,
                            you would calculate:
                            <br />
                            <strong>500 × (1 + 0.1) = 550</strong>
                        </p>
                        <p>
                            Similarly, if the price decreases by 10%, the
                            calculation would be:
                            <br />
                            <strong>500 × (1 - 0.1) = 450</strong>
                        </p>
                    </CardDescription>
                </CardContent>
            </Card>
        </div>
    );
};

export default PercentageCalculatorDescription;
