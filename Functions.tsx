https://github.com/GowingRees/List-filtering-Library/blob/main/.git/Functions.tsx#L93
// Test Data
var testList = [1, 2, 3, 4, 5, 2, 2, 6, 9, 0, 7, 4, 21, 346, 6, 8998, 6, 7, 8, 9, 10, 3, 2, 1, 7, 5, 3, 2];
var animals = ["lion", "fish", "shark", "cat", "monkey", "dog", "rabbit", "jellyfish"];
var animalType = ["cat", "fish", "fish", "cat", "mammal", "mammal", "mammal", "fish"];
var recipe = [
  "2 and 1/4 cups (280g) all-purpose flour (spooned & leveled)",
  "1 teaspoon baking soda",
  "1 and 1/2 teaspoons cornstarch",
  "1/2 teaspoon salt 3/4 cup",
  "(170g) unsalted butter, melted & cooled 5 minutes",
  "3/4 cup (150g) packed light or dark brown sugar",
  "1/2 cup (100g) granulated sugar",
  "1 large egg + 1 egg yolk, at room temperature",
  "2 teaspoons pure vanilla extract",
  "1 and 1/4 cups (225g) semi-sweet chocolate chips or chocolate chunks"
];
// Function to filter two lists by a specific item
function filter2ListsByItem(list1: string[], list2: string[], item: string): [string[], string[]] {
  const tempList1: string[] = [];
  const tempList2: string[] = [];
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] === item) {
      tempList1.push(list1[i]);
      tempList2.push(list2[i]);
    }
  }
  return [tempList1, tempList2];
}

// Function to filter a list by a specific value
function filterListByValue(list: number[], value: number): number[] {
  const tempList: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      tempList.push(list[i]);
    }
  }
  return tempList;
}

// Function to remove repeated items in a list
function noRepeats(list: number[]): number[] {
  const filteredList: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (filteredList.indexOf(list[i]) < 0) {
      filteredList.push(list[i]);
    }
  }
  return filteredList;
}

// Function to find indexes of items within a group that includes a specific item
function findIndexOfItemWithinGroup(list: string[], item: string): number[] {
  const tempList: number[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].includes(item)) {
      tempList.push(i);
    }
  }
  return tempList;
}
// Test for filter2ListsByItem
const result1 = filter2ListsByItem(animalType, animals, "mammal").toString();
if (result1 !== "mammal,mammal,mammal,monkey,dog,rabbit") {
  console.log("FAIL for filter2ListsByItem");
}else{
  console.log("Working");
}

// Test for filterListByValue
const result2 = filterListByValue(testList, 2).toString();
if (result2 !== "2,2,2,2,2") {
  console.log("FAIL for filterListByValue");
}else{
  console.log("Working");
}

// Test for noRepeats
const result3 = noRepeats(testList).toString();
if (result3 !== "1,2,3,4,5,6,9,0,7,21,346,8998,8,10") {
  console.log("FAIL for noRepeats");
}else{
  console.log("Working");
}

// Test for findIndexOfItemWithinGroup
const result4 = findIndexOfItemWithinGroup(recipe, "butter").toString();
if (result4 !== "4") {
  console.log("FAIL for findIndexOfItemWithinGroup");
}else{
  console.log("Working");
}
("Hi there");
