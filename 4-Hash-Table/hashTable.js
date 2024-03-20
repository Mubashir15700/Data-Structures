class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    genKey(key) {
        let hashedKey = "";

        for (let i = 0; i < key.length; i++) {
            hashedKey += key.charCodeAt(i);
        }

        return hashedKey % this.size;
    }

    set(key, value) {
        const index = this.genKey(key);

        const bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const samekeyItem = bucket.find((item) => item[0] === key);
            if (samekeyItem) {
                samekeyItem[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }

    get(key) {
        const index = this.genKey(key);

        const bucket = this.table[index];

        if (!bucket) {
            return -1;
        }
        const samekeyItem = bucket.find((item) => item[0] === key);
        if (samekeyItem) {
            return samekeyItem[1];
        } else {
            return -1;
        }
    }

    remove(key) {
        const index = this.genKey(key);

        const bucket = this.table[index];

        if (bucket) {
            const samekeyItemIndex = bucket.findIndex((item) => item[0] === key);
            if (samekeyItemIndex !== -1) {
                bucket.splice(samekeyItemIndex, 1);
                return true;
            }
        }
        return false;
    }

    getTable() {
        let table = this.table.filter((item) => item !== undefined);
        console.log(table);
    }

    display() {
        console.log(this.table);
    }
}
