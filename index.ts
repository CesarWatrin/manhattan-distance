import {ManhattanDistance} from './src/manhattanDistance';
import {Point} from './src/point';


(function main() {
  const x = new Point(1, 2);
  const y = new Point(3, 4);

  const manhattanDistance = new ManhattanDistance(x, y);

  console.log(manhattanDistance.toString());
}());