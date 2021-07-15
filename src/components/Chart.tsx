import React, { FC } from "react";
import Bar from "./elements/Bar";

type Props = {
    array: number[];
    arraySize: number;
};

const Chart: FC<Props> = ({ array, arraySize }) => {
    const max: number = Math.max(...array);

    const bars = array.map((item, i) => {
        const width: number = 100 / arraySize;
        const height: number = (item / max) * 100;

        const margin: string = i === arraySize ? "0" : width > 3 ? "0.5rem" : "0.125rem";

        return (
            <Bar
                key={`${i}_${item}`}
                width={width}
                height={height}
                val={item}
                style={{ marginRight: `${margin}` }}
            />
        );
    });

    return <div className="chart">{bars}</div>;
};

export default Chart;
