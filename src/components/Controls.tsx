import React, { FC, Fragment } from 'react';
import Button from './elements/Button';

type Props = {
    onStart: () => void;
}

const Controls: FC<Props> = ({onStart}) => {

    return(
        <Fragment>
            <Button label="Start" onClick={onStart}/>
        </Fragment>
    )
}

export default Controls;