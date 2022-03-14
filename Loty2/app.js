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


class WeightedGraph {
    constructor() {
        this.adjacencyList = {
        };
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []
        let smallest;
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
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}

//Wprowadzenie wierzchołków
var graph = new WeightedGraph()
 graph.addVertex("ATH");
 graph.addVertex("BSL");
 graph.addVertex("BFS");
 graph.addVertex("BLQ");
 graph.addVertex("BTS");
 graph.addVertex("BRS");
 graph.addVertex("CRL");
 graph.addVertex("BUD");
 graph.addVertex("DUB");
 graph.addVertex("EDI");
 graph.addVertex("EIN");
 graph.addVertex("GLA");
 graph.addVertex("HAM");
 graph.addVertex("CTA");
 graph.addVertex("KEF");
 graph.addVertex("CGN");
 graph.addVertex("SUF");
 graph.addVertex("LCA");
 graph.addVertex("LPL");
 graph.addVertex("LIS");
 graph.addVertex("LTN");
 graph.addVertex("STN");
 graph.addVertex("MAD");

 //przyjętę połączenia oraz ich wartości (Lotniska A, Lotnisko B, czas lotu w minutach)
 //wartości lotu w minutach zostały przyjete za pośrednictwem strony https://www.trwanie-lotu.pl/
 graph.addEdge('ATH','EDI', 255);
 graph.addEdge('ATH','GLA', 370);
 graph.addEdge('ATH','CTA', 100);
 graph.addEdge('BFS','CGN', 551);
 graph.addEdge('BFS','LTN', 81);
 graph.addEdge('BFS','CTA', 493);
 graph.addEdge('BTS','STN', 587);
 graph.addEdge('BTS','BLQ', 524);
 graph.addEdge('CRL','BLQ', 660);
 graph.addEdge('CRL','BSL', 627);
 graph.addEdge('CRL','LTN', 574);
 graph.addEdge('DUB','LCA', 326);
 graph.addEdge('LTN','DUB', 592);
 graph.addEdge('LTN','MAD', 591);
 graph.addEdge('LCA','HAM', 259);
 graph.addEdge('EIN','BUD', 109);
 graph.addEdge('EIN','MAD', 145);
 graph.addEdge('HAM','BRS', 336);
 graph.addEdge('KEF','LPL', 196);
 graph.addEdge('KEF','CGN', 211);
 graph.addEdge('SUF','LIS', 204);
 graph.addEdge('SUF','BUD', 112);
 graph.addEdge('SUF','STN', 177);
 graph.addEdge('STN','EIN', 55);
 graph.addEdge('STN','HAM', 106);
 graph.addEdge('STN','DUB', 73);
 graph.addEdge('STN','KEF', 175);

function myFunction(){

  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const spis =document.getElementById("spis");

  spis.innerHTML = graph.Dijkstra(start, end);
}

 //alert(graph.Dijkstra("ATH", "LIS"));

