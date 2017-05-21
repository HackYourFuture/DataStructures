let LinkedList = require("../../../lesson2/src/linked_list/list")
let Stack = require("../../../lesson1/src/stacks_queues/stack")
let Queue = require("../../../lesson1/src/stacks_queues/queue")

class Graph {
    // E is number of edges
    constructor() {
        this.ne = 0
        // adjlist is a dictionary of LinkedLists
        // For every vertex (key), we maintain a list of its neighbours (value)
        this.adjlist = new Map()
    }

    // addEdge(1,2)
    /*
    from 1
    to 2
    adjlist = {'1' : []}
    adjlist.has(1) == false
    */
    addEdge(from, to) {
    //add "to" in the LinkedList of "from"
        if(!this.adjlist.has(from)) {
            this.adjlist[from] = new LinkedList()
        }
        this.adjlist[from].append(to)
        this.ne += 1

        if(!this.adjlist.has(to)) {
            this.adjlist[to] = new LinkedList()
        }
        this.adjlist[to].append(from)
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
module.exports = Graph;
