import Dictionary from '../Dictionary-Hash/dictionary/dictionary-class';

export class Graph<T> {
  protected vertices: T[] = [];
  protected adjList: Dictionary<T, T[]> = new Dictionary();

  constructor(public isDirected: boolean = false) {}

  addVertex(...nodes: T[]): void {
    nodes.forEach((node) => this.addVertexOne(node));
  }

  protected addVertexOne(vertex: T): void {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.adjList.set(vertex, []);
    }
  }

  addEdge(vertex: T, node: T): void {
    if (!this.adjList.get(vertex)) {
      this.addVertex(vertex);
    }

    if (!this.adjList.get(node)) {
      this.addVertex(node);
    }

    this.adjList.get(vertex).push(node);
    if (!this.isDirected) {
      this.adjList.get(node).push(vertex);
    }
  }

  getVertices(): T[] {
    return this.vertices;
  }

  getAdjList(): Dictionary<T, T[]> {
    return this.adjList;
  }

  toString(): string {
    let s = '';
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]);

      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `;
      }
      s += '\n';
    }

    return s;
  }
}
