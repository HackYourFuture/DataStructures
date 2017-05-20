let MyGraph = require("../src/graphs/graph");
describe("Graphs", function () {

  console.log("\nTesting the Graph..");

  let gra = new MyGraph();
  it("should be able to create a graph with 5 edges", function () {
    gra.addEdge(1,2);
    gra.addEdge(1,4);
    gra.addEdge(2,3);
    gra.addEdge(2,5);
    gra.addEdge(3,4);
    expect(gra.ne).toBe(5);
  });

/*
  it("should be able to traverse in BFS order", function () {
    expect(graph.bfs(1)).toEqual([1,2,4,3,5]);
  });

  it("should be able to traverse in DFS order", function () {
    expect(graph.bfs(1)).toEqual([1,2,3,4,5]);
  });
*/
});
