import React, { FC, Fragment } from "react";
import Button from "./elements/Button";
import Dropdown from "./elements/Dropdown/Dropdown";
import { ALGORITHM } from "../algorithms/index";

type Props = {
    running: boolean;
    onStart: () => void;
    onPause: () => void;
    onRepeat: () => void;
    onAlgoChange: (algorithm: string) => void;
};

const Controls: FC<Props> = ({ running, onStart, onPause, onRepeat, onAlgoChange }) => {

    const algos = ALGORITHM;

    return (
        <Fragment>
            <Button label={running ? "Stop" : "Sort"} onClick={running ? onPause : onStart} />
            <Button label="Reset" onClick={onRepeat} />
            <Dropdown
                name="Algorithms"
                items={Object.keys(algos)}
                selected="Bubble Sort"
                onAlgoChange={onAlgoChange}
            />
        </Fragment>
    );
};

export default Controls;
