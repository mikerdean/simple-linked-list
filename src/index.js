export class Element {

    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

export class List {

    constructor(iterable) {

        this.head = null;

        if (iterable && (Array.isArray(iterable) || iterable[Symbol.iterator])) {
            for(let item of iterable) {
                this.add(item);
            }
        }

    }

    add(value) {

        if (value === undefined || value === null) {
            throw new Error(`value must not be null or undefined.`);
        }

        let element;

        if (value instanceof Element) {
            element = value;
        } else {
            element = new Element(value);
        }

        if (this.head === null) {
            this.head = element;
        } else {
            element.next = this.head;
            this.head = element;
        }

        return element;

    }

    get length() {
        
        let i = 0;

        for(let item of this) {
            i++;
        }

        return i;
    }

    reverse() {
        return new List(this.toArray());
    }

    toArray() {
        const output = [];
        for(let item of this) {
            output.push(item);
        }
        return output;
    }

    *[Symbol.iterator]() {

        let current = this.head;

        while(current) {
            yield current.value;
            current = current.next;
        }
    }
}