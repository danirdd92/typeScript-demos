import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollections';
import { LinkedList } from './LinkedList';

const numCollection = new NumbersCollection([10, 6, -8, 0, -1]);
numCollection.bubbleSort();
console.log(numCollection);

const charCollection = new CharactersCollection('AkmdIkNfuY');
charCollection.bubbleSort();
console.log(charCollection);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(4);
linkedList.add(-4);
linkedList.add(-20);
linkedList.add(100);
linkedList.add(43);

linkedList.bubbleSort();
linkedList.print();

// using concurrently package
// "scripts": {
//   "start:build": "tsc -w", -> watch for changes in ts compiler
//   "start:run": "nodemon build/index.js", -> then run nodemon
//   "start": "concurrently npm:start:*" -> with npm start run both mentioned above
// }
