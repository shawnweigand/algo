// https://neetcode.io/problems/count-number-of-islands

const grid1 = [
    ["0","1","1","1","0"],
    ["0","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

const grid2 = [
    ["1","1","0","0","1"],
    ["1","1","0","0","1"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]

class Solution {

    constructor(grid) {
        this.grid = grid
        this.ROWS = grid.length
        this.COLS = grid[0].length
        this.visited = new Set()
        this.islands = 0
    }

    countIslands() {

        for (let r = 0; r < this.ROWS; r++) {
            for (let c = 0; c < this.COLS; c++) {
                if (!this.visited.has(`${r},${c}`) && this.grid[r][c] === '1') {
                    this.islands++
                    this.bfs(r, c)
                }
            }
        }

        return this.islands

    }

    bfs(r, c) {

        this.visited.add(`${r},${c}`)
        let queue = [[r, c]]

        while (queue.length > 0) {

            let [x, y] = queue.shift()
            let neighbors = []

            if (x > 0) neighbors.push([x - 1, y])
            if (x < this.ROWS - 1) neighbors.push([x + 1, y])
            if (y > 0) neighbors.push([x, y - 1])
            if (y < this.COLS - 1) neighbors.push([x, y + 1])

            for (const [row, col] of neighbors) {
                if (!this.visited.has(`${row},${col}`) && this.grid[row][col] === '1') {
                    this.visited.add(`${row},${col}`)
                    queue.push([row, col])
                }
            }
        }

    }

}

const sol1 = new Solution(grid1)
console.log(sol1.countIslands())

const sol2 = new Solution(grid2)
console.log(sol2.countIslands())





// class Solution {

//     constructor(grid) {
//         this.grid = grid
//         this.ROWS = grid.length
//         this.COLS = grid[0].length
//         this.visited = new Set()
//         this.islands = 0
//     }

//     countIslands() {

//         for (let r = 0; r < this.ROWS; r++) {
//             for (let c = 0; c < this.COLS; c++) {
//                 if (this.grid[r][c] === '1' && !(this.visited.has(`${r},${c}`))) {
//                     this.islands++
//                     this.bfs(r, c)
//                 }
//             }
//         }

//         return this.islands

//     }

//     bfs(r, c) {

//         this.visited.add(`${r},${c}`)
        
//         let queue = [[r, c]]

//         while (queue.length > 0) {

//             let [x, y] = queue.shift()
//             let neighbors = []

//             if (x > 0) neighbors.push([x - 1, y])
//             if (x < this.ROWS - 1) neighbors.push([x + 1, y])
//             if (y > 0) neighbors.push([x, y - 1])
//             if (y < this.COLS - 1) neighbors.push([x, y + 1])

//             for (const [row, col] of neighbors) {
//                 if (this.grid[row][col] === '1' && !(this.visited.has(`${row},${col}`))) {
//                     this.visited.add(`${row},${col}`)
//                     queue.push([row, col])
//                 }
//             }

//         }

//     }

// }