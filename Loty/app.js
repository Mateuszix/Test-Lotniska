class PriorityQueue {
  constructor(){
      this.values = [];
  }
  enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
  };
  dequeue() {
      return this.values.shift();
  };
  sort() {
      this.values.sort((a, b) => a.priority - b.priority);
  };
}

//dijkstra
class WeightedGraph {
  constructor() {
      this.adjacencyList = {
        AbuDhabi: {
            Brisbane: 1296,
            Melbourne: 1285,
            Dublin: 472
        },
        AliceSprings: {
            Brisbane: 457,
            Melbourne: 480,
            Perth: 563,
            Sydney: 401
        },
        Brisbane: {
            AbuDhabi: 1296,
            HongKong: 518,
            AliceSprings: 457
        },
        Sydney: {
            AliceSprings: 401,
            Dubai: 1312,
            Doha: 1612,
            HongKong: 510
        },
        Dublin: {
          AbuDhabi: 472,
          HongKong: 1168,
          Dubai: 530,
          Doha: 820
        },
        HongKong: {
          Dublin: 1168,
          Brisbane: 518,
          Merbourne: 592,
          Sydney: 510
        },
        Merbourne: {
          HongKong: 592,
          AbuDhabi: 1285,
          AliceSprings: 480
        },
        Doha: {
          Dublin: 820,
          Sydney: 1612,
          Perth: 1591
        },
        Dubai: {
          Dublin: 530,
          Sydney: 1312,
          Perth: 1228
        },
        Perth: {
          Dubai: 1228,
          Doha: 1591,
          AliceSprings: 563
        },
      };
      console.log(this.adjacencyList);
  }
  addVertex(vertex) {
    // if (!this.adjacencyList[name]) 
    // {
    //   this.adjacencyList[name] = {};
    // }
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    // this.adjacencyList[vertex1][vertex2] = weight;
    // this.adjacencyList[vertex2][vertex1] = weight;
    this.adjacencyList[vertex1].push({node:vertex2,weight});
    this.adjacencyList[vertex2].push({node:vertex1,weight});

  }
  // removeEdge(v1,v2) {
  //   delete this.adjacencyList[v1][v2];
  //   delete this.adjacencyList[v2][v1];
  // }
  // removeVertex(vert) {
  //   for (let i in this.adjacencyList[vert]) 
  //   {
  //     this.removeEdge(vert, i);
  //   }
  //   delete this.adjacencyList[vert];
  // }
  // DFS(target) {
  //   const result = [];
  //   const visited = {};
  //   const helper = (vert) => {
  //     if (!vert) return null;
  //       visited[vert] = true;
  //       result.push(vert);
  //       for (let neighbor in this.adjacencyList[vert]) 
  //       {
  //         if (!visited[neighbor]) 
  //         {
  //           return helper(neighbor)
  //         }
  //       }
  //     }
  //       helper(target);
  //       return result;
  // }
  // BFS(start) {
  //   const queue = [start];
  //   const result = [];
  //   const visited = {};
  //   while(queue.length) {
  //     let current = queue.shift();
  //     visited[current] = true;
  //     result.push(current)
  //     for (let neighbor in this.adjacencyList[current]) 
  //     {
  //       if (!visited[neighbor]) 
  //       {
  //         visited[neighbor] = true;
  //         queue.push(neighbor);
  //       }
  //     }
  //   }
  //   return result;
  // }
  // Dijkstra(start, finish) {
  //   // List1
  //   const costFromStartTo = {};
  //   // List2
  //   const checkList = new PriorityQueue();
  //   // List3
  //   const prev = {};

  //   let current;
  //   let result = [];
  //   for (let vert in this.adjacencyList) 
  //   {
  //     let current;
  //       let result = [];
  //       for (let vert in this.adjacencyList) 
  //       {
  //         if (vert === start) 
  //         {
  //           costFromStartTo[vert] = 0;
  //           checkList.enqueue(vert, 0);
  //         } 
  //         else 
  //         {
  //           costFromStartTo[vert] = Infinity;
  //         }
  //         prev[vert] = null;
  //       }
  //   }
  //   while (checkList.values.length) {
  //     current = checkList.dequeue().val;
  //     if (current === finish) 
  //     {
  //     // Done
  //       while (prev[current]) 
  //       {
  //         result.push(current);
  //         current = prev[current];
  //       }
  //         break;
  //     }
  //     else 
  //     {
  //     for (let neighbor in this.adjacencyList[current]) 
  //     {
  //       let costToNeighbor = costFromStartTo[current] + this.adjacencyList[current][neighbor];
  //       if (costToNeighbor < costFromStartTo[neighbor]) 
  //       {
  //         costFromStartTo[neighbor] = costToNeighbor;
  //         prev[neighbor] = current;
  //         checkList.enqueue(neighbor, costToNeighbor);
  //       }
  //     }
  //     }
  //   }
  // return result.concat(current).reverse();
  // }
  Dijkstra(start, finish){
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [] //to return at end
    let smallest;
    //build up initial state
    for(let vertex in this.adjacencyList){
        if(vertex === start){
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }
    // as long as there is something to visit
    while(nodes.values.length){
        smallest = nodes.dequeue().val;
        if(smallest === finish){
            //WE ARE DONE
            //BUILD UP PATH TO RETURN AT END
            while(previous[smallest]){
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        } 
        if(smallest || distances[smallest] !== Infinity){
            for(let neighbor in this.adjacencyList[smallest]){
                //find neighboring node
                let nextNode = this.adjacencyList[smallest][neighbor];
                //calculate new distance to neighboring node
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;
                if(candidate < distances[nextNeighbor]){
                    //updating new smallest distance to neighbor
                    distances[nextNeighbor] = candidate;
                    //updating previous - How we got to neighbor
                    previous[nextNeighbor] = smallest;
                    //enqueue in priority queue with new priority
                    nodes.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    return path.concat(smallest).reverse();     
}
  
}

// let Lot = new WeightedGraph()
// Lot.Dijkstra("Dublin", "AliceSprings");
// function myFunction(){

//   const start = document.getElementById("start").value;
//   const end = document.getElementById("end").value;
//   const spis =document.getElementById("spis");

//   spis.innerHTML = Lot.Dijkstra(start, end);
  

//   alert(Lot.Dijkstra(start, end))
// }

    
// var graph = new WeightedGraph()
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A","B", 4);
// graph.addEdge("A","C", 2);
// graph.addEdge("B","E", 3);
// graph.addEdge("C","D", 2);
// graph.addEdge("C","F", 4);
// graph.addEdge("D","E", 3);
// graph.addEdge("D","F", 1);
// graph.addEdge("E","F", 1);


// graph.Dijkstra("A", "E");

//  var graph = new WeightedGraph()
//  graph.addVertex("AliceSprings");
//  graph.addVertex("Dublin");
//  graph.addVertex("HongKong");
//  graph.addVertex("Sydney");
//  graph.addVertex("AbuDhabi");
//  graph.addVertex("Merbourne");

//  graph.addEdge("Dublin","HongKong", 1168);
//  graph.addEdge("HongKong","Dublin", 1168);
//  graph.addEdge("Dublin","AbuDhabi", 472);
//  graph.addEdge("AbuDhabi","Dublin", 472);
//  graph.addEdge("HongKong","Merbourne", 592);
//  graph.addEdge("Merbourne","HongKong", 592);
//  graph.addEdge("HongKong","Sydney", 510);
//  graph.addEdge("Sydney","HongKong", 510);
//  graph.addEdge("HongKong","Sydney", 510);
//  graph.addEdge("Sydney","HongKong", 510);
//  graph.addEdge("Sydney","AliceSprings", 401);
//  graph.addEdge("AliceSprings","Sydneys", 401);
//  graph.addEdge("AliceSprings","Merbourne", 480);
//  graph.addEdge("Merbourne","AliceSprings", 480);
//  graph.addEdge("AbuDhabi","Merbourne", 1285);
//  graph.addEdge("Merbourne","AbuDhabi", 1285);

//  alert(graph.Dijkstra("Dublin", "AliceSprings"));

 var graph = new WeightedGraph()
 graph.addVertex("A");
 graph.addVertex("B");
 graph.addVertex("C");
 graph.addVertex("D");
 graph.addVertex("E");
 graph.addVertex("F");
 
 graph.addEdge("A","B", 4);
 graph.addEdge("A","C", 2);
 graph.addEdge("B","E", 3);
 graph.addEdge("C","D", 2);
 graph.addEdge("C","F", 4);
 graph.addEdge("D","E", 3);
 graph.addEdge("D","F", 1);
 graph.addEdge("E","F", 1);
 
 
 graph.Dijkstra("A", "E");









