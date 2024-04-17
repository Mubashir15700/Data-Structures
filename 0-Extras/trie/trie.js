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

    delete(word) {
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

    suggestions(prefix) {
        let curr = this.root;
        for (let char of prefix) {
            if (!curr.children[char]) {
                return [];
            }
            curr = curr.children[char];
        }

        return this.collectWords(curr, prefix);
    }

    collectWords(node, prefix) {
        let suggestions = [];
        if (node.isWord) {
            suggestions.push(prefix);
        }

        for (let child in node.children) {
            suggestions = suggestions.concat(this.collectWords(node.children[child], prefix + child));
        }
        return suggestions;
    }
}

const trie = new Trie();

trie.insert("sebi");
trie.insert("serbia");

console.log("trie: ", trie);
console.log("suggestions: ", trie.suggestions("se"));
console.log("delete: ", trie.delete("sebis"));
