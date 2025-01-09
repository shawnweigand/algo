/*
    Given a graph represented as an adjacency list and two nodes start and end, write a function to determine if a path exists between the two nodes.
*/

const graph = {
    0: [1, 2],
    1: [3],
    2: [3, 4],
    3: [5],
    4: [2],
    5: []
};


class Maze {

    constructor(graph) {
        this.graph = graph
        this.visited = new Set()
    }

    hasPath(start, end) {
        const res = this.dfs(start, end)
        this.visited.clear()
        return res
    }

    dfs(start, end) {
        if (this.visited.has(start)) return false
        if (start === end) return true
        this.visited.add(start)
        for (const neighbor of this.graph[start]) {
            if (this.dfs(neighbor, end)) return true
        }
        return false
    }

}

const maze = new Maze(graph)
console.log(maze.hasPath(0, 5)); // Output: true
console.log(maze.hasPath(0, 4)); // Output: true
console.log(maze.hasPath(4, 0)); // Output: false























// class Maze {

//     constructor(graph) {
//         this.graph = graph
//         this.visited = new Set()
//     }

//     hasPath(start, end) {
//         const res = this.dfs(start, end)
//         this.visited.clear()
//         return res
//     }

//     dfs(start, end) {

//         if (this.visited.has(start)) return false
//         if (start === end) return true

//         this.visited.add(start)

//         for (const neighbor of this.graph[start]) {
//             if (this.dfs(neighbor, end)) return true
//         }

//         return false

//     }

// }