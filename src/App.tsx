import React, { Component } from "react";
import "./App.css";
import Header, {HeaderControls} from "./components/Header";

type Props = {};

type State = {
    algorithm: string;
    array: number[];
    arraySize: number;
    history: number[];
};

class App extends Component<Props, State> {
    //State
    state: State = {
        algorithm: "Bubble Sort",
        array: [],
        arraySize: 25,
        history: [],
    };

    //Hooks
    componentDidMount() {
        this.generateRandomArray();
    }

    //Functions
    generateRandomArray = (): void => {
        //Generate a random Number
        const getRandomNumber = (max: number): number => {
            return Math.floor(Math.random() * max) + 1;
        };

        let array: number[] = [];
        for (let i = 0; i < this.state.arraySize; i++) {
            array.push(getRandomNumber(this.state.arraySize * 2));
        }

        console.log(array)

        this.setState(
            {
                array,
                history: [],
            },
            this.createHistory
        );
    };

    createHistory = (): void => {
        this.setState({ history: [] });
    };

    handleAlgorithmChange = (algorithm: string): void => {
        this.setState({ algorithm }, this.generateRandomArray);
    };

    //Render
    render() {

        const headerControls = <HeaderControls onGenerateNewArray={this.generateRandomArray} onSort={() => console.log("Sort")}/>

        return (
            <div className="App">
                <Header>{headerControls}</Header>

                <main className="sortingVisualizer">{/* SortingVisualizer */}</main>
                {/* Footer */}
            </div>
        );
    }
}

export default App;
