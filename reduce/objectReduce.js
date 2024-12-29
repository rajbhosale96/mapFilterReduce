// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }

const addToGroups = (group, string) => {
  const length = string.length;

  if (!group[length]) {
    group[length] = [];
  }

  group[length].push(string);
  return group;
};

const groupByLength = (strings) => {
  return strings.reduce((group, string) => addToGroups(group, string), {});
};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = (strings) => {
  return strings.reduce((count, string) => {
    count[string] = (count[string] || 0) + 1;

    return count;
  }, {});
};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = (objects) => {
  return objects.reduce((merged, object) => {
    Object.keys(object).forEach(
      (key) => (merged[key] = (merged[key] || 0) + object[key])
    );

    return merged;
  }, {});
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = (keys, values) => {
  return keys.reduce((object, key, index) => {
    object[key] = values[index];

    return object;
  }, {});
};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = (keys, values) => {
  return zip(keys, values);
};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  return zip(values, keys);
};
