export class Point {

  public constructor(
    private readonly x: number,
    private readonly y: number
  ) {
  }

  public distance(point: Point): number {
    return Math.abs(this.x - point.x) + Math.abs(this.y - point.y);
  }
}