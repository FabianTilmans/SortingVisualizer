import { addToTrace, newTrace } from "./helper";

const MergeSort = (array: number[]) => {
    // Initial State
    const trace = newTrace(array);

    const merge = (original: number[], start: number, mid: number, end: number) => {
        const left = original.slice(start, mid);
        const right = original.slice(mid, end);
        let i = 0;
        let j = 0;
        let k = 0;
        while (i < left.length && j < right.length) {
            addToTrace(trace, original, [], [], [i,j+mid]);
            if (left[i] <= right[j]) {
                addToTrace(trace, original, [], [k + start, i]);
                original[k + start] = left[i];
                i++;
            } else {
                addToTrace(trace, original, [], [k+start, j+mid]);
                original[k + start] = right[j];
                j++;
            }
            k++;
        }
        while (i < left.length) {
            addToTrace(trace, original, [], [k + start, i]);
            original[k + start] = left[i];
            i++;
            k++;
        }
        while (j < right.length) {
            addToTrace(trace, original, [], [k+start, j+mid]);
            original[k + start] = right[j];
            j++;
            k++;
        }

        left.length = 0;
        right.length = 0;
    };

    const recursiveMergeSort = (original: number[], start: number, end: number) => {
        const length = end - start;
        if (length < 2) {
            // original = []
            if (length < 1) return original;
            // original = [x]
            else return [original[start]];
        }

        const midPoint = Math.floor((start + end) / 2);

        recursiveMergeSort(original, start, midPoint);

        recursiveMergeSort(original, midPoint, end);

        merge(original, start, midPoint, end);
    };

    recursiveMergeSort(array, 0, array.length);

    addToTrace(trace, array, [...Array(array.length).keys()])

    return trace;
};

export default MergeSort;
