// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {}; 

// 3. Use this function to update the filters. 
function updateFilters() {
    console.log("Inside update function");
    // 4a. Save the element that was changed as a variable.
    let changedElem = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let changedVal = changedElem.property("value");
    console.log(changedVal);
    // 4c. Save the id of the filter that was changed as a variable.
    let changedId = changedElem.attr("id");
    console.log(changedId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedVal) {
      filters[changedId] = changedVal;
      console.log("added to the filter")
    }
    else {
      delete filters[changedId];
      console.log("deleted from the filter")
    } 
    console.log(filters);
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filtData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    if (filters.datetime) {
      filtData = filtData.filter(row => row.datetime == filters.datetime);
    };
    if (filters.city) {
      filtData = filtData.filter(row => row.city === filters.city);
    };
    if (filters.state) {
      filtData = filtData.filter(row => row.state === filters.state);
    };
    if (filters.country) {
      filtData = filtData.filter(row => row.country === filters.country);
    };
    if (filters.shape) {
      filtData = filtData.filter(row => row.shape === filters.shape);
    };
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filtData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  // Input fields can trigger a change event when new text is entered.
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
