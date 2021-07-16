import BubbleSort from "./BubbleSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";

export const ALGORITHM: {[type: string]: (arr: number[]) => any[]} = {
    "Bubble Sort": BubbleSort,
    "Quick Sort": QuickSort,
    "Merge Sort": MergeSort
}