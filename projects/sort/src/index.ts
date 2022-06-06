import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";

//const numberCollection = new NumberCollection([10, 3, -5, 0]);
//const sorter = new Sorter(numberCollection);
//sorter.sort();
//console.log(numberCollection.data);

const characterCollection = new CharacterCollection("raqbj");
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(characterCollection.data);
