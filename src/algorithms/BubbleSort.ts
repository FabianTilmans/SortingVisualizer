import { swap } from "./helper";

const BubbleSort = (arr: number[]) => {

    //Bubble Sort
    for(let i = 0;  i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);

                //TODO: History / Trace 
            }
        }
    }

    return {};
}

export default BubbleSort;