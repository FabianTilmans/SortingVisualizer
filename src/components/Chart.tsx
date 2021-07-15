import React, { FC } from "react";
import Bar from "./elements/Bar/Bar";

type Props = {
    array: number[];
    arraySize: number;

    currentSwapped: number[],
    currentCompared: number [],
    sorted: number[],
};

const Chart: FC<Props> = ({ array, arraySize, currentCompared, currentSwapped, sorted }) => {
    const max: number = Math.max(...array);

    const bars = array.map((item, i) => {
        const width: number = 100 / arraySize;
        const height: number = (item / max) * 100;
        const swapping: boolean = currentSwapped.includes(i);
        const comparing: boolean = currentCompared.includes(i);
        const _sorted: boolean = sorted.includes(i);

        const margin: string = i === arraySize ? "0" : width > 3 ? "0.5rem" : "0.125rem";

        return (
            <Bar
                key={`${i}_${item}`}
                width={width}
                height={height}
                val={item}
                swapping={swapping}
                comparing={comparing}
                sorted={_sorted}
                style={{ marginRight: `${margin}` }}
            />
        );
    });

    return <div className="chart">{bars}</div>;
};

export default Chart;
