/*
    Bubble Sort
    O(n^2)
    Visualize: https://www.youtube.com/watch?v=9I2oOAr2okY
*/

let arr = [ 5, 2, 8 ,5, 3, 3, 0, 1, 9, 2, 7 ]

class BubbleSort {

    constructor(arr) {
        this.arr = arr
    }

    sort(arr = this.arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j + 1] < arr[j]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        return arr
    }

}

const sorter = new BubbleSort(arr)
console.log(sorter.sort())

























// class BubbleSort {

//     constructor(arr) {
//         this.arr = arr
//     }

//     sort(arr = this.arr) {

//         for (let i = 0; i < arr.length; i++) {
//             for (let j = 0; j < arr.length - i - 1; j++) {
//                 if (arr[j + 1] < arr[j]) {
//                     let temp = arr[j]
//                     arr[j] = arr[j + 1]
//                     arr[j + 1] = temp
//                 }
//             }
//         }

//         return arr

//     }

// }