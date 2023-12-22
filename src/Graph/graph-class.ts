import Dictionary from '../Dictionary-Hash/dictionary/dictionary-class';

export class Graph<T> {
  protected vertices: T[] = [];
  protected adjList = new Dictionary<T, T[]>();

  constructor(public isDirected: boolean = false) {}

  addVertex(...nodes: T[]): void {
    nodes.forEach((node) => this.addVertexOne(node));
  }

  protected addVertexOne(v: T): void {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v: T, w: T): void {
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }

    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }

    this.adjList.get(v).push(w);
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
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
