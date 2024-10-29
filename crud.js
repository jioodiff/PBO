// Fungsi Create
function createItem(collection, keyOrValue, value) {
    if (Array.isArray(collection)) {
        collection.push(keyOrValue);
    } else if (collection instanceof Set) {
        collection.add(keyOrValue);
    } else if (collection instanceof Map) {
        collection.set(keyOrValue, value);
    }
}

// Fungsi Read
function readItem(collection, key) {
    if (Array.isArray(collection)) {
        return collection;
    } else if (collection instanceof Set) {
        return Array.from(collection);
    } else if (collection instanceof Map) {
        return collection.get(key);
    }
}

// Fungsi Update
function updateItem(collection, oldKeyOrValue, newValueOrValue, newValue) {
    if (Array.isArray(collection)) {
        const index = collection.indexOf(oldKeyOrValue);
        if (index !== -1) collection[index] = newValueOrValue;
    } else if (collection instanceof Set) {
        if (collection.has(oldKeyOrValue)) {
            collection.delete(oldKeyOrValue);
            collection.add(newValueOrValue);
        }
    } else if (collection instanceof Map) {
        if (collection.has(oldKeyOrValue)) {
            collection.set(oldKeyOrValue, newValueOrValue || newValue);
        }
    }
}

// Fungsi Delete
function deleteItem(collection, keyOrValue) {
    if (Array.isArray(collection)) {
        const index = collection.indexOf(keyOrValue);
        if (index !== -1) collection.splice(index, 1);
    } else if (collection instanceof Set || collection instanceof Map) {
        collection.delete(keyOrValue);
    }
}

// Contoh penggunaan generik:
let arrayExample = ["Budi", "Siti"];
let setExample = new Set(["Budi", "Siti"]);
let mapExample = new Map([["Budi", 90], ["Siti", 85]]);

createItem(arrayExample, "Agus");
createItem(setExample, "Agus");
createItem(mapExample, "Agus", 88);

console.log(arrayExample); // Output: ["Budi", "Siti", "Agus"]
console.log(readItem(setExample)); // Output: ["Budi", "Siti", "Agus"]
console.log(readItem(mapExample, "Agus")); // Output: 88
updateItem(arrayExample, "Siti", "Dewi");
updateItem(setExample, "Siti", "Dewi");
updateItem(mapExample, "Siti", 90);

console.log(arrayExample); // Output: ["Budi", "Dewi", "Agus"]
console.log(readItem(setExample)); // Output: ["Budi", "Agus", "Dewi"]
console.log(readItem(mapExample, "Siti")); // Output: 90
deleteItem(arrayExample, "Budi");
deleteItem(setExample, "Budi");
deleteItem(mapExample, "Budi");

console.log(arrayExample); // Output: ["Dewi", "Agus"]
console.log(readItem(setExample)); // Output: ["Agus", "Dewi"]
console.log(mapExample); // Output: Map(2) { "Siti" => 90, "Agus" => 88 }
