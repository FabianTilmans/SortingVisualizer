import React, { FC, Fragment } from 'react';

type Props = {
    onGenerateNewArray: () => void;
    onSort: () => void;
};

const HeaderControls: FC<Props> = ({onGenerateNewArray, onSort}) => {

    return(
        <Fragment>
            <button onClick={onSort}>Sort</button>
            <button onClick={onGenerateNewArray}>Generate New Array</button>
            {/* MenuAlgo */}
            {/* MenuSize */}
        </Fragment>
    );
}

export default HeaderControls;