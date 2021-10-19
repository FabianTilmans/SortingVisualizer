import React, { Component } from "react";

//Components
import Footer from "./components/Footer";
import SortingVisualiszer from "./components/SortingVisualizer/SortingVisualizer";

//Constants
import { ALGORITHM } from "./algorithms";

//Types
import { TraceItem } from "./types/Trace";

type Props = {};

type State = {
    algorithm: string;
    array: number[];
    arraySize: number;
    trace: TraceItem[];
};

class App extends Component<Props, State> {
    //State
    state = {
        algorithm: "Bubble Sort",
        array: [],
        arraySize: 40,
        trace: [],
    };

    //Hooks
    componentDidMount() {
        this.generateRandomArray();
    }

    //Methods
    generateRandomArray = () => {
        const getRandomNumber = (max: number): number => {
            return Math.floor(Math.random() * max) + 1;
        };

        let array: number[] = [];
        for (let i = 0; i < this.state.arraySize; i++) {
            array.push(getRandomNumber(this.state.arraySize * 5));
        }

        this.setState(
            {
                array,
                trace: [],
            },
            this.generateTrace
        );
    };

    generateTrace = () => {
        const arr = [...this.state.array];
        const algo = ALGORITHM[this.state.algorithm];
        if (algo) {
            const trace = algo(arr);
            console.log(trace)
            this.setState({ trace });
        }
    };

    handleAlgorithmChange = (algorithm: string) => {
        this.setState({algorithm}, this.generateRandomArray)
    }

    render() {
        return (
            <div className="app">
                <main className="sorting-visualizer">
                    <SortingVisualiszer
                        array={this.state.array}
                        arraySize={this.state.arraySize}
                        trace={this.state.trace}
                        selectedAlgorithm={this.state.algorithm}
                        onAlgoChange={this.handleAlgorithmChange}
                        shuffleArray={this.generateRandomArray}
                    />
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
