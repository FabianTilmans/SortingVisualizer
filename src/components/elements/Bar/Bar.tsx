import React, { FC } from "react";

//Styles
import "./Bar.css";

type Props = {
    width: number;
    height: number;
    val: number;
    sorted: boolean;
    swapping: boolean;
    comparing: boolean;
    style: {};
};

const Bar: FC<Props> = ({ val, width, height, sorted, swapping, comparing, style }) => {
    const barStyle = { ...style, width: `${width}%`, height: `${height}%` };
    let classes = "bar";
    if(sorted) classes += " sorted";
    if(swapping) classes += " swapping";
    else if(comparing) classes += " comparing";

    return (
        <div className={classes} style={barStyle}>
            <span className="bar-value">{val}</span>
        </div>
    );
};

export default Bar;
