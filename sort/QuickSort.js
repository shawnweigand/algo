/*
Quick Sort
O(nlogn)
Visualize: https://www.youtube.com/watch?v=Hoixgm4-P4M
*/

let arr = [ 5, 2, 8 ,5, 3, 3, 0, 1, 9, 2, 7 ]


class QuickSort {

    constructor(arr) {
        this.arr = arr
    }

    sort(arr = this.arr, start = 0, end = arr.length - 1) {

        if (end <= start) return arr

        let pivot = this.partition(arr, start, end)
        this.sort(arr, start, pivot - 1)
        this.sort(arr, pivot + 1, end)

        return arr

    }

    partition(arr, start, end) {

        let pivot = end
        let index = start - 1

        for (let j = start; j < end; j++) {
            if (arr[j] < arr[pivot]) {
                index++
                let temp = arr[index]
                arr[index] = arr[j]
                arr[j] = temp
            }
        }

        index++
        let temp = arr[index]
        arr[index] = arr[pivot]
        arr[pivot] = temp

        return index

    }

}

const sorter = new QuickSort(arr)
console.log(sorter.sort())








// class QuickSort {

//     constructor(arr) {
//         this.arr = arr
//     }

//     sort(arr = this.arr, start = 0, end = arr.length - 1) {

//         if (end <= start) return arr
//         let pivot = this.partition(arr, start, end)
//         this.sort(arr, start, pivot - 1)
//         this.sort(arr, pivot + 1, end)
//         return arr

//     }

//     partition(arr, start, end) {

//         let index = start - 1
//         let pivot = end
//         for (let j = start; j < end; j++) {
//             if (arr[j] < arr[pivot]) {
//                 index++
//                 let temp = arr[j]
//                 arr[j] = arr[index]
//                 arr[index] = temp
//             }
//         }

//         index++
//         let temp = arr[pivot]
//         arr[pivot] = arr[index]
//         arr[index] = temp

//         return index

//     }

// }