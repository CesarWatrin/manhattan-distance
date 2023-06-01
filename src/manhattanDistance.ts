import {Point} from "./point";

export class ManhattanDistance {

  public constructor(
    private readonly x: Point,
    private readonly y: Point
  ) {
  }

  private calculateDistance(): number {
    return this.x.distance(this.y);
  }

  public toString(): string {
    return `ManhattanDistance: ${this.calculateDistance()}`;
  }
}