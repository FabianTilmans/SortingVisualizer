import React, { Component, Fragment } from "react";
import { TraceItem } from "../types/Trace";
import Chart from "./Chart";
import Controls from "./Controls";

type Props = {
    trace: TraceItem[];
    array: number[];
    arraySize: number;
};

type State = {
    trace: TraceItem[];
    traceStep: number;

    array: number[];
    originalArray: number[];
    currentSwapped: number[];
    currentCompared: number[];
    sorted: number[];

    timeoutIds: NodeJS.Timeout[];
    speed: number;
};

class SortingVisualiszer extends Component<Props, State> {
    state: State = {
        trace: [],
        traceStep: -1,

        array: [],
        originalArray: [],
        currentSwapped: [],
        currentCompared: [],
        sorted: [],

        timeoutIds: [],
        speed: 1,
    };

    componentDidUpdate(prevProps: Props) {
        if (prevProps.array !== this.props.array) {
            this.reset(this.props.array);
        }
        if (prevProps.trace !== this.props.trace) {
            this.clearTimeouts();
            this.setState({ trace: this.props.trace });
        }
    }

    clearTimeouts = () => {
        this.state.timeoutIds.forEach((timeoutid) => clearTimeout(timeoutid));
        this.setState({ timeoutIds: [] });
    };

    run = (trace: TraceItem[]): void => {
        const timeoutIds = [];
        const timer = 250 / this.state.speed;

        trace.forEach((item, i) => {
            const timeout = setTimeout(
                (item: TraceItem) => {
                    this.setState(
                        (prevState) => ({
                            traceStep: prevState.traceStep + 1,
                        }),
                        () => this.displayTraceStep(item)
                    );
                },
                i * timer,
                item
            );

            timeoutIds.push(timeout);
        });

        const timeoutId = setTimeout(this.clearTimeouts, trace.length * timer);

        timeoutIds.push(timeoutId);

        this.setState({ timeoutIds });
    };

    pause = () => {
        this.clearTimeouts();
    };

    continue = () => {
        const step = this.state.trace.slice(this.state.traceStep);
        this.run(step);
    };

    repeat = () => {
        this.clearTimeouts();
        this.setState((prevState) => ({
            array: [...prevState.originalArray],
            traceStep: -1,
            currentCompared: [],
            currentSwapped: [],
            sorted: [],
        }));
        this.run(this.state.trace);
    };

    reset = (array: number[]) => {
        this.setState({
            array,
            trace: [],
            traceStep: -1,
            currentSwapped: [],
            currentCompared: [],
            sorted: [],
            originalArray: [...array],
        });
    };

    displayTraceStep = (step: TraceItem): void => {
        this.setState({
            array: step.array,
            sorted: step.sorted,
            currentSwapped: step.swapped,
            currentCompared: step.compared,
        });
    };

    render() {
        return (
            <Fragment>
                <section className="controls"></section>
                <Controls
                    onStart={
                        this.state.traceStep === -1
                            ? this.run.bind(this, this.state.trace)
                            : this.continue.bind(this)
                    }
                />
                <section className="chart">
                    <Chart
                        array={this.state.array}
                        arraySize={this.props.arraySize}
                        currentCompared={this.state.currentCompared}
                        currentSwapped={this.state.currentSwapped}
                        sorted={this.state.sorted}
                    />
                </section>
                <section className="desciption"></section>
            </Fragment>
        );
    }
}

export default SortingVisualiszer;
