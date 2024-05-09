// Create a prompt for the user to input froyo flavors upon entering the website
const userInput = prompt(
  "Please enter some flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// Split user's input into an array of strings
const stringFlavors = userInput.split(",").map(flavor => flavor.trim());

// Function to count word occurrences
function countWordOccurrences(input) {
  const result = {};
  for (let word of input) {
      if (result[word]) {
          result[word]++;
      } else {
          result[word] = 1;
      }
  }
  return result;
}

// Count occurrences and display results
const flavorCounts = countWordOccurrences(stringFlavors);
console.log(`You have ordered: ${stringFlavors.length} froyos.`);
console.table(flavorCounts);
