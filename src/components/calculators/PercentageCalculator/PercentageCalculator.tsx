"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PercentageCalculator = () => {
    const [xValue1, setXValue1] = useState<string>(""); // For first calculation
    const [zValue1, setZValue1] = useState<string>(""); // For Z input in the first calculation
    const [yValue2, setYValue2] = useState<string>(""); // For Y input in the second calculation
    const [xValue2, setXValue2] = useState<string>(""); // For X in the second calculation
    const [yValue3, setYValue3] = useState<string>(""); // For Y input in the third calculation
    const [xValue3, setXValue3] = useState<string>(""); // For X input in the third calculation
    const [oldValue, setOldValue] = useState<string>(""); // For Old Value in percentage difference
    const [newValue, setNewValue] = useState<string>(""); // For New Value in percentage difference
    const [oldValForIncrease, setOldValForIncrease] = useState<string>(""); // For Old Value in percentage increase
    const [result1, setResult1] = useState<string | null>(null);
    const [result2, setResult2] = useState<string | null>(null);
    const [result3, setResult3] = useState<string | null>(null);
    const [resultDiff, setResultDiff] = useState<string | null>(null); // For Percentage Difference result
    const [resultIncrease, setResultIncrease] = useState<string | null>(null); // For Percentage Increase result

    const [percentage, setPercentage] = useState<string>(""); // For Percentage input
    const [mode, setMode] = useState<"increase" | "decrease">("increase"); // To select increase or decrease

    // Calculation 1: X is Y% of Z
    const calculateXIsYPercentOfZ = () => {
        if (
            !xValue1 ||
            !zValue1 ||
            isNaN(Number(xValue1)) ||
            isNaN(Number(zValue1))
        ) {
            setResult1("Invalid input. Please enter valid numbers.");
            return;
        }
        const x = parseFloat(xValue1);
        const z = parseFloat(zValue1);
        const percentage = ((x / z) * 100).toFixed(2);
        setResult1(
            `Calculation: (${x} ÷ ${z}) × 100 = ${percentage}%\nResult: ${x} is ${percentage}% of ${z}`
        );
    };

    // Calculation 2: What is X% of Y
    const calculateWhatIsXPercentOfY = () => {
        if (
            !xValue2 ||
            !yValue2 ||
            isNaN(Number(xValue2)) ||
            isNaN(Number(yValue2))
        ) {
            setResult2("Invalid input. Please enter valid numbers.");
            return;
        }
        const x = parseFloat(xValue2);
        const y = parseFloat(yValue2);
        const result = ((x / 100) * y).toFixed(2);
        setResult2(
            `Calculation: (${x} ÷ 100) × ${y} = ${result}\nResult: ${x}% of ${y} is ${result}`
        );
    };

    // Calculation 3: X is what % of Y
    const calculateXIsWhatPercentOfY = () => {
        if (
            !xValue3 ||
            !yValue3 ||
            isNaN(Number(xValue3)) ||
            isNaN(Number(yValue3))
        ) {
            setResult3("Invalid input. Please enter valid numbers.");
            return;
        }
        const x = parseFloat(xValue3);
        const y = parseFloat(yValue3);
        const percentage = ((x / y) * 100).toFixed(2);
        setResult3(
            `Calculation: (${x} ÷ ${y}) × 100 = ${percentage}%\nResult: ${x} is ${percentage}% of ${y}`
        );
    };

    // Percentage Difference Calculation
    const calculatePercentageDifference = () => {
        if (
            !oldValue ||
            !newValue ||
            isNaN(Number(oldValue)) ||
            isNaN(Number(newValue))
        ) {
            setResultDiff("Invalid input. Please enter valid numbers.");
            return;
        }
        const oldVal = parseFloat(oldValue);
        const newVal = parseFloat(newValue);
        const diff = Math.abs(newVal - oldVal);
        const percentageDifference = ((diff / oldVal) * 100).toFixed(2);
        setResultDiff(
            `Calculation: (|${newVal} - ${oldVal}| ÷ ${oldVal}) × 100 = ${percentageDifference}%\nResult: The percentage difference is ${percentageDifference}%`
        );
    };

    // Percentage Increase/Decrease Calculation
    const calculatePercentageIncreaseDecrease = () => {
        if (
            !oldValForIncrease ||
            !percentage ||
            isNaN(Number(oldValForIncrease)) ||
            isNaN(Number(percentage))
        ) {
            setResultIncrease("Invalid input. Please enter valid numbers.");
            return;
        }
        const oldValueNum = parseFloat(oldValForIncrease);
        const percentageNum = parseFloat(percentage) / 100;
        let newValueCalculated;

        if (mode === "increase") {
            newValueCalculated = (oldValueNum * (1 + percentageNum)).toFixed(2);
        } else {
            newValueCalculated = (oldValueNum * (1 - percentageNum)).toFixed(2);
        }

        setResultIncrease(
            `Calculation: ${oldValueNum} × (1 ${
                mode === "increase" ? "+" : "-"
            } ${percentageNum}) = ${newValueCalculated}\nResult: The new value is ${newValueCalculated}`
        );
    };

    const handleClear = () => {
        setXValue1("");
        setZValue1("");
        setXValue2("");
        setYValue2("");
        setXValue3("");
        setYValue3("");
        setOldValue("");
        setNewValue("");
        setOldValForIncrease("");
        setPercentage("");
        setResult1(null);
        setResult2(null);
        setResult3(null);
        setResultDiff(null);
        setResultIncrease(null);
    };
    return (
        <div className="container mx-auto px-4 py-6">
            <Card className="mx-auto w-full max-w-2xl p-6 shadow-md">
                <CardHeader>
                    <CardTitle className="text-center text-xl font-semibold">
                        Percentage Calculator
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* First Calculation */}
                    <div>
                        <p className="mb-2 font-medium">X is Y% of Z:</p>
                        <div className="flex space-x-2">
                            <Input
                                type="number"
                                value={xValue1}
                                onChange={(e) => setXValue1(e.target.value)}
                                placeholder="Enter X"
                            />
                            <Input
                                type="number"
                                value={zValue1}
                                onChange={(e) => setZValue1(e.target.value)}
                                placeholder="Enter Z"
                            />
                        </div>
                        <Button
                            className="mt-2 w-full"
                            onClick={calculateXIsYPercentOfZ}
                        >
                            Calculate X is Y% of Z
                        </Button>
                        {result1 && (
                            <p className="mt-2 whitespace-pre-wrap text-green-600">
                                {result1}
                            </p>
                        )}
                    </div>

                    {/* Second Calculation */}
                    <div>
                        <p className="mb-2 font-medium">What is X% of Y:</p>
                        <div className="flex space-x-2">
                            <Input
                                type="number"
                                value={xValue2}
                                onChange={(e) => setXValue2(e.target.value)}
                                placeholder="Enter X%"
                            />
                            <Input
                                type="number"
                                value={yValue2}
                                onChange={(e) => setYValue2(e.target.value)}
                                placeholder="Enter Y"
                            />
                        </div>
                        <Button
                            className="mt-2 w-full"
                            onClick={calculateWhatIsXPercentOfY}
                        >
                            Calculate What is X% of Y
                        </Button>
                        {result2 && (
                            <p className="mt-2 whitespace-pre-wrap text-green-600">
                                {result2}
                            </p>
                        )}
                    </div>

                    {/* Third Calculation */}
                    <div>
                        <p className="mb-2 font-medium">X is what % of Y:</p>
                        <div className="flex space-x-2">
                            <Input
                                type="number"
                                value={xValue3}
                                onChange={(e) => setXValue3(e.target.value)}
                                placeholder="Enter X"
                            />
                            <Input
                                type="number"
                                value={yValue3}
                                onChange={(e) => setYValue3(e.target.value)}
                                placeholder="Enter Y"
                            />
                        </div>
                        <Button
                            className="mt-2 w-full"
                            onClick={calculateXIsWhatPercentOfY}
                        >
                            Calculate X is what % of Y
                        </Button>
                        {result3 && (
                            <p className="mt-2 whitespace-pre-wrap text-green-600">
                                {result3}
                            </p>
                        )}
                    </div>

                    {/* Percentage Difference Calculation */}
                    <div>
                        <p className="mb-2 font-medium">
                            Percentage Difference:
                        </p>
                        <div className="flex space-x-2">
                            <Input
                                type="number"
                                value={oldValue}
                                onChange={(e) => setOldValue(e.target.value)}
                                placeholder="Enter Old Value"
                            />
                            <Input
                                type="number"
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                                placeholder="Enter New Value"
                            />
                        </div>
                        <Button
                            className="mt-2 w-full"
                            onClick={calculatePercentageDifference}
                        >
                            Calculate Percentage Difference
                        </Button>
                        {resultDiff && (
                            <p className="mt-2 whitespace-pre-wrap text-green-600">
                                {resultDiff}
                            </p>
                        )}
                    </div>
                    <div className="space-y-4">
                        {/* Old Value and Percentage for Increase/Decrease */}
                        <p className="mb-2 font-medium">Percentage Change:</p>
                        <div>
                            <Input
                                type="number"
                                value={oldValForIncrease}
                                onChange={(e) =>
                                    setOldValForIncrease(e.target.value)
                                }
                                placeholder="Old Value"
                            />
                        </div>
                        <div>
                            <Input
                                type="number"
                                value={percentage}
                                onChange={(e) => setPercentage(e.target.value)}
                                placeholder="Percentage"
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="w-full" variant="outline">
                                    {mode === "increase"
                                        ? "Increase"
                                        : "Decrease"}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    onClick={() => setMode("increase")}
                                >
                                    Increase
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => setMode("decrease")}
                                >
                                    Decrease
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            onClick={calculatePercentageIncreaseDecrease}
                            className="mt-2 w-full"
                        >
                            Calculate Percentage Change
                        </Button>

                        {resultIncrease && (
                            <p className="mt-2 whitespace-pre-wrap text-green-600">
                                {resultIncrease}
                            </p>
                        )}
                    </div>
                </CardContent>

                <CardFooter>
                    <Button
                        variant="outline"
                        onClick={handleClear}
                        className="w-full"
                    >
                        Clear All
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PercentageCalculator;
