import { TraceItem } from "../types/Trace";

//Trace
export const newTrace = (array: number[]): TraceItem[] => {
    return [{ array: [...array], swapped: [], compared: [], sorted: [] }];
};

export const addToTrace = (
    trace: TraceItem[],
    array: number[],
    sorted: number[] = [],
    swapped: number[] = [],
    compared: number[] = [],
    
) => {
    trace.push({
        array: [...array],
        swapped: [...swapped],
        compared: [...compared],
        sorted: [...sorted],
    });
};

export const lastSorted = (trace: TraceItem[]) => {
    return trace[trace.length - 1].sorted;
}

export const swap = (arr: number[], i: number, j: number) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
