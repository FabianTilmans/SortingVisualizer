import React, { FC } from "react";

type Props = {
    width: number;
    height: number;
    val: number;
    style: {};
};

const Bar: FC<Props> = ({val,width, height, style}) => {

    const barStyle = {...style, width: `${width}%`, height: `${height}%`}

    return(
        <div className="bar" style={barStyle}>
            <span className="bar-value">{val}</span>
        </div>
    )
};

export default Bar;
