import React, { FC } from "react";

type Props = {
    name: string;
    items: string[];
    selected: string;
    onAlgoChange: (algorithm: string) => void;
};

const Dropdown: FC<Props> = ({name, items, selected, onAlgoChange}) => {

    const options = items.map((item, i) => {
        return (<option key={i} value={item}>{item}</option>)
    })

    return(
        <div className="dropdown">
            <select name={name} id={name} onChange={(selected) => onAlgoChange(selected.target.value)}>
                {options}
            </select>
        </div>
    );
};

export default Dropdown;