/*
    Merge Sort
    O(nlogn)
    Visualize: https://www.youtube.com/watch?v=4VqmGXwpLqc
*/

let arr = [ 5, 2, 8 ,5, 3, 3, 0, 1, 9, 2, 7 ]

class MergeSort {

    constructor(arr) {
        this.arr = arr
    }

    sort(arr = this.arr) {
        if (arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return this.merge(this.sort(left), this.sort(right))
    }

    merge(left, right) {
        let arr = []
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) arr.push(left.shift())
            else arr.push(right.shift())
        }
        return [...arr, ...left, ...right]
    }

}

const sorter = new MergeSort(arr)
console.log(sorter.sort())










// class MergeSort {

//     constructor(arr) {
//         this.arr = arr
//     }

//     sort(arr = this.arr) {

//         if (arr.length <= 1) return arr
//         let mid = Math.floor(arr.length / 2)
//         let left = arr.slice(0, mid)
//         let right = arr.slice(mid)
//         return this.merge(this.sort(left), this.sort(right))

//     }

//     merge(left, right) {

//         let arr = []
//         while (left.length > 0 && right.length > 0) {
//             if (left[0] < right[0]) arr.push(left.shift())
//             else arr.push(right.shift())
//         }
//         return [...arr, ...left, ...right]
    
//     }


// }