let LinkedList = require("../../../lesson2/src/linked_list/list")
let Stack = require("../../../lesson1/src/stacks_queues/stack")
let Queue = require("../../../lesson1/src/stacks_queues/queue")

class MyGraph {
    // E is number of edges
    constructor() {
        this.ne = 0
        // adjlist is a dictionary of LinkedLists
        // For every vertex (key), we maintain a list of its neighbours (value)
        this.adjlist = []
    }

    addEdge(from, to) {
    //add "to" in the LinkedList of "from"
        if(adjlist.has(from)) {
            adjlist[from].append(to)
        } else {
            adjlist[from] = new LinkedList()
        }

        this.ne += 1
    }

    display() {
        for (let v in this.adjlist.keys()) {
            neighbours = adjlist[v].toArray()
            console.log(v, ":" , neighbours.toString())
        }
    }

    bfs(v) {
        this.display()
    }

    dfs(v) {
        this.display()
    }
}
