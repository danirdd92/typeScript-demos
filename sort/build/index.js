"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollections_1 = require("./CharactersCollections");
var LinkedList_1 = require("./LinkedList");
var numCollection = new NumbersCollection_1.NumbersCollection([10, 6, -8, 0, -1]);
numCollection.bubbleSort();
console.log(numCollection);
var charCollection = new CharactersCollections_1.CharactersCollection('AkmdIkNfuY');
charCollection.bubbleSort();
console.log(charCollection);
var linkedList = new LinkedList_1.LinkedList();
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
