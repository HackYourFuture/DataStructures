const LinkedList = require('./src/linked_list/list');
const ListProbs = require('./src/linked_list/listProblems');



const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);



const bla = ListProbs.kthToLast(list, 0);
console.log(bla);