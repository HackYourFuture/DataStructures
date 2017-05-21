let Graph = require("../src/graphs/graph");
describe("Graphs", function () {

  console.log("\nTesting the Graph..");

  let gra = new Graph();
  it("should be able to create a graph with 5 edges", function () {
    gra.addEdge(1,2);
    gra.addEdge(1,4);
    gra.addEdge(2,3);
    gra.addEdge(2,5);
    gra.addEdge(3,4);
    // this graph is an undirected graph
    // so each edge counts twice
    expect(gra.ne).toBe(10);
  });


  it("should be able to traverse in BFS order", function () {
    expect(gra.bfs(1)).toEqual([1,2,4,3,5]);
  });

  it("should be able to traverse in DFS order", function () {
    expect(gra.dfs(1)).toEqual([1,2,3,4,5]);
  });

});
