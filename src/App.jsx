import './App.css';
import Post from '../components/Post'

const App = () => {

  return (

    <div className='Entire App'>

      <h1>CSE Algorithms</h1>

      <div className="App">
        
        <div className='algorithm1'>
          <Post 
            title = ""
            imageURL = 'https://favtutor.com/resources/images/uploads/dijsktras_algorithm_cpp.png'
            body = "Dijkstra's Algorithm is a pathfinding algorithm that generates every single route through the graph, and then selects the route that has the lowest overall cost."
            />
        </div>

        <div className='algorithm2'>
          <Post 
            title = 'Gale Shapley Algorithm'
            imageURL = 'https://miro.medium.com/max/481/1*Q9fuszSJYriEzJ_L46-JWA.png'
            body = "
            Gale–Shapley algorithm provides a solution for finding stable relationships given a set of men and women. This algorithm can be used to solve a large number of problems, one such use case is matching interns to companies such that each company finds a suitable intern and each intern gets a desirable company."
            />
        </div>
        <div className='algorithm3'>
          <Post 
            title = 'BFS'
            imageURL = "https://www.guru99.com/images/1/020820_0543_BreadthFirs1.png"
            body = "Breadth-first search is an algorithm for searching a tree data structure for a node that satisfies a given property It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level."
            />
        </div>
        <div className='algorithm4'>
          <Post 
            title = 'DFS'
            imageURL = 'https://he-s3.s3.amazonaws.com/media/uploads/9fa1119.jpg'
            body = "Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node and explores as far as possible along each branch before backtracking."
            />
        </div>
        <div className='algorithm5'>
          <Post 
            title = 'Binary Search Algorithm'
            imageURL = 'https://i.ytimg.com/vi/HlEz93t628E/maxresdefault.jpg'
            body = 'In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.'
            />
        </div>
        <div className='algorithm6'>
          <Post 
            title = "Kruskal 's Algorithm"
            imageURL = 'https://i.ytimg.com/vi/jjarN3RXfSw/maxresdefault.jpg'
            body = "Kruskal's algorithm finds a minimum spanning forest of an undirected edge-weighted graph. If the graph is connected, it finds a minimum spanning tree. It is a greedy algorithm in graph theory as in each step it adds the next lowest-weight edge that will not form a cycle to the minimum spanning forest."
            />
        </div>
        <div className='algorithm7'>
          <Post 
            title = 'Quick Sort'
            imageURL = 'data:image/png;base64,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'
            body = 'Quicksort is an efficient, general-purpose sorting algorithm. Quicksort was developed by British computer scientist Tony Hoare in 1959 and published in 1961. It is still a commonly used algorithm for sorting.'
            />
        </div>
        <div className='algorithm8'>
          <Post 
            title = 'Bubble Sort'
            imageURL = 'https://www.productplan.com/uploads/bubble-sort-1024x683-2.png'
            body = 'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.'
            />
        </div>
        <div className='algorithm9'>
          <Post 
            title = 'Merge Sort'
            imageURL = 'https://www.programiz.com/sites/tutorial2program/files/merge-sort-example_0.png'
            body = "In computer science, merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output."
            />
        </div>
        <div className='algorithm10'>
          <Post 
            title = 'Floyd Warshall Algorithm'
            imageURL = 'https://favtutor.com/resources/images/uploads/floyd_warshall_algorithm.png'
            body = 'In computer science, the Floyd–Warshall algorithm is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights. A single execution of the algorithm will find the lengths of shortest paths between all pairs of vertices.'
            />
        </div>
      </div>
    </div>
  )
}

export default App