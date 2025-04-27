//your JS code here. If required.
// script.js

const output = document.getElementById("output");

// Step 1: Add Loading... row initially
const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.colSpan = 2;
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);

// Step 2: Create a function to make a promise
function createPromise(promiseNumber) {
  return new Promise((resolve) => {
    const time = (Math.random() * 2 + 1).toFixed(3); // Random between 1 and 3 seconds
    setTimeout(() => {
      resolve({ name: `Promise ${promiseNumber}`, time: parseFloat(time) });
    }, time * 1000);
  });
}

// Step 3: Create 3 promises
const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3),
];

// Step 4: Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // Remove loading row
  output.innerHTML = "";

  // Add each promise result to table
  results.forEach((result) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = result.name;

    const timeCell = document.createElement("td");
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);

    output.appendChild(row);
  });

  // Step 5: Add Total Row
  const totalRow = document.createElement("tr");

  const totalNameCell = document.createElement("td");
  totalNameCell.textContent = "Total";

  const maxTime = Math.max(...results.map(r => r.time));
  const totalTimeCell = document.createElement("td");
  totalTimeCell.textContent = maxTime.toFixed(3);

  totalRow.appendChild(totalNameCell);
  totalRow.appendChild(totalTimeCell);

  output.appendChild(totalRow);
});
