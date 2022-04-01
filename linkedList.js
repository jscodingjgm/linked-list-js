class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add = (element) => {
        const node = new Node(element);

        let current;

        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    insertAt = (element, index) => {
        if(index < 0 || index > this.size){
            console.log('Enter valid index');
        }else{
            const node = new Node(element);

            let current, previous;

            current = this.head;

            if(index == 0){
                node.next = this.head;
                this.head = node;
            }else{
                // current = this.head;
                let count = 0;

                while(count < index){
                    count++;
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }

    printElement = () => {
        const linkedListArr = [];
        let current = this.head;
        linkedListArr.push(current.element)
        while (current.next) {
            current = current.next;
            if(current.element){
                linkedListArr.push(current.element)
            }
        }
        return linkedListArr;
    }
}

module.exports = LinkedList;
