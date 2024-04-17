class Node {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isWord;
    }

    deletion(word) {
        const helper = (node, word, depth) => {
            if (depth === word.length) {
                if (!node.isWord) {
                    return false;
                }
                node.isWord = false;
                return Object.keys(node.children).length === 0;
            }

            const char = word[depth];
            if (!node.children[char]) {
                return false;
            }
            const shouldDeleteCurrentNode = helper(node.children[char], word, depth + 1);
            if (shouldDeleteCurrentNode) {
                delete node.children[char];
                return Object.keys(node.children).length === 0 && !node.isWord;
            }
            return false;
        }

        helper(this.root, word, 0);
    }

    getSuggestions(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                return [];
            }
            curr = curr.children[char];
        }

        return this.collectWords(word, curr);
    }

    collectWords(word, node) {
        let suggestions = [];
        if (node.isWord) {
            suggestions.push(word);
        }
        for (let child in node.children) {
            suggestions = suggestions.concat(this.collectWords(word + child, node.children[child]));
        }
        return suggestions;
    }
}

const trie = new Trie();

trie.insert("sebi");
trie.insert("serbia");

console.log("trie: ", trie);
console.log("suggestions: ", trie.getSuggestions("se"));
