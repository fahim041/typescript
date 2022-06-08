import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

//const numberCollection = new NumberCollection([10, 3, -5, 0]);
//const sorter = new Sorter(numberCollection);
//numberCollection.sort();
//console.log(numberCollection.data);

//const characterCollection = new CharacterCollection("raqbj");
//const sorter = new Sorter(characterCollection);
//sorter.sort();
//console.log(characterCollection.data);

const linkList = new LinkedList();
linkList.add(500);
linkList.add(-10);
linkList.add(-3);
linkList.add(4);

linkList.sort();
linkList.print();
