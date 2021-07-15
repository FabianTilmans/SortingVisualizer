import React, { Component, Fragment } from "react";
import { TraceItem } from "../types/Trace";
import Chart from "./Chart";

type Props = {
    trace: TraceItem[];
    array: number[];
    arraySize: number;
};

type State = { 
    trace: TraceItem[];
};

class SortingVisualiszer extends Component<Props, State> {
    render(){

        return(
            <Fragment>
                <section className="controls">

                </section>
                <section className="chart">
                    <Chart array={this.props.array} arraySize={this.props.arraySize}/>
                </section>
                <section className="desciption">

                </section>
            </Fragment>
        )
    }
}

export default SortingVisualiszer;