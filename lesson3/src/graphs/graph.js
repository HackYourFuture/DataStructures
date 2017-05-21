let LinkedList = require("../../../lesson2/src/linked_list/list")
let Stack = require("../../../lesson1/src/stacks_queues/stack")
let Queue = require("../../../lesson1/src/stacks_queues/queue")



class Graph {
    // E is number of edges
    constructor() {
        this.ne = 0
        // adjlist is a dictionary of LinkedLists
        // For every vertex (key), we maintain a list of its neighbours (value)
        this.adjlist = {}
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
        if(!this.adjlist[from]) {
            this.adjlist[from] = new LinkedList()
        }
        this.adjlist[from].append(to)
        this.ne += 1

        if(!this.adjlist[to]) {
            this.adjlist[to] = new LinkedList()
        }
        this.adjlist[to].append(from)
        this.ne += 1
    }

    display() {
        for (let v in this.adjlist) {
            neighbours = adjlist[v].toArray()
            console.log(v, ":" , neighbours.toString())
        }
    }

    bfs(v) {
        //this.display()
    }

    getFirstUnvisitedNeighbour(list, visited) {
        let nav = list.head
        while (nav != null) {
            if (visited[nav.data] !== true) {
                return nav.data
            }
            nav = nav.next
        }
        return -1
    }
 
    allVisited(visited) {
        for (let key in this.adjlist) {
            if (visited[key] === false) {
                return false
            }
        }
        return true
    }
    dfs(v) {
        /*
        1. Initialize the visited array to false for all nodes (vertices)
        2. make visited[v] = TRUE
        3. Go to the adjacency list of 'v'
        4. Push 'v' on the stack
        5. v =  first unvisited neighbour of 'v'
        Goto step 2
        Repeat until visited array is TRUE
        */
        let visited = {}
        for (let key in this.adjlist) {
            visited[key] = false
        }

        let stack = new Stack()
        
        visited[v] = true
        let dfsArray = [v]
        stack.push(v)
        // [1, 2, 3, 4
        while(!this.allVisited(visited)) {
            let u = this.getFirstUnvisitedNeighbour(this.adjlist[v], visited)//adjlist[1]
            if ( u == -1) {
                v = stack.pop()
            } else {
                visited[u] = true
                dfsArray.push(u)
                stack.push(u)
                v = u
            }
        }

        console.log(dfsArray)
        return dfsArray
        // For all nodes, initialize the visited object/array
        //for (let key in this.adjlist) {
        //    console.log(key , " :" , this.adjlist[key].toArray())
        //}
    }
}
module.exports = Graph;
