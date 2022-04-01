# linked-list-js

Example

const LinkedList = require('@jaivanthgm/linked-list-js');

const ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll.size);
ll.insertAt(5, 3);
console.log(ll.size);
console.log(ll.printElement());
