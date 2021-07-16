import { addToTrace, lastSorted, newTrace, swap } from "./helper";

const QuickSort = (array: number[]) => {
    const trace = newTrace(array);

    const partition = (array: number[], start: number, end: number) => {
        let i = start + 1;
        let j = start + 1;

        while (j <= end) {
            addToTrace(trace, array, lastSorted(trace), [], [j, start])
            if (array[j] < array[start]) {
                swap(array, i, j);
                addToTrace(trace,array,lastSorted(trace), [i,j]);
                i += 1;
            }
            j += 1;
        }

        addToTrace(trace, array, lastSorted(trace), [start, i-1]);
        swap(array, start, i - 1);

        return i - 1;
    };

    const recursiveQuickSort = (array: number[], start: number, end: number) => {
        if (start >= end) {
            if (start === end) {
                addToTrace(trace, array, [...lastSorted(trace), start])
            }
            return null;
        }

        let pivot = end;

        swap(array, start, pivot);
        addToTrace(trace, array, lastSorted(trace), [start, pivot])

        pivot = partition(array, start, end);

        addToTrace(trace, array, [...lastSorted(trace), pivot]);

        recursiveQuickSort(array, start, pivot - 1);
        recursiveQuickSort(array, pivot + 1, end);
    };

    recursiveQuickSort(array, 0, array.length - 1);

    return trace;
};

export default QuickSort;
