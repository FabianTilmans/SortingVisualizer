import { addToTrace, lastSorted, newTrace, swap } from "./helper";

const BubbleSort = (arr: number[]) => {
    const trace = newTrace(arr);

    //Bubble Sort
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            //Add compare process to trace.
            addToTrace(trace, arr, lastSorted(trace), [], [j, j + 1]);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                //Add swap process to trace.
                addToTrace(trace, arr, lastSorted(trace), [j, j + 1]);
            }
        }

        //Item (arr.length - 1 - i) is sorted. Adding to trace.
        addToTrace(trace, arr, [...lastSorted(trace), arr.length - 1 - i]);
    }

    return trace;
};

export default BubbleSort;
