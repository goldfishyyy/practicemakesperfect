//problem 1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
//grab container
const studentTableContainer = document.querySelector(
  "#student-table-container"
);
//create <table></table>
const studentTable = document.createElement("table");
//create head row
const headRow = document.createElement("tr");
studentTable.append(headRow);

//create header, adding value
tableInfo.tableHeader.forEach((head) => {
  let header = document.createElement("th");
  let headText = document.createTextNode(head);
  header.appendChild(headText);
  headRow.append(header);
});

//append table to table container
studentTableContainer.append(studentTable);

//adding table content
const tableContentLength = tableInfo.tableContent.length;
for (let i = 0; i < tableContentLength; i++) {
  //add <tr> to each object
  const tableRow = document.createElement("tr");
  //append to table
  studentTable.append(tableRow);
  //loop throuth each object value, create <td>
  Object.values(tableInfo.tableContent[i]).forEach((content) => {
    //create <td>
    let data = document.createElement("td");
    let dataText = document.createTextNode(content);
    data.append(dataText);
    tableRow.append(data);
  });
}

//problem2.1
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
//grab container
const orderedListContainer = document.querySelector(".ordered-list-container");
//create <ol>
const orderedList = document.createElement("ol");
orderedListContainer.appendChild(orderedList);
list.forEach((element) => {
  //create <li></li>
  let list = document.createElement("li");
  let listText = document.createTextNode(element);
  list.appendChild(listText);
  orderedList.appendChild(list);
});

//problem 2.2
//grab container
const unorderedListContainer = document.querySelector(
  ".unordered-list-container"
);
//create <ul></ul>
const unordedList = document.createElement("ul");
unorderedListContainer.appendChild(unordedList);
list.forEach(item=>{
    //create <li>
    let list = document.createElement("li");
    let listText = document.createTextNode(item);
    list.appendChild(listText);
    unordedList.append(list);
})

//problem 3
const dropDownList = [ 
    { value: 'newark', content: 'Newark' }, 
    { value: 'santaClara', content: 'Santa Clara' }, 
    { value: 'unionCity', content: 'Union City' }, 
    { value: 'albany', content: 'Albany' }, 
    { value: 'dalyCity', content: 'Daly City' }, 
    { value: 'sanJose', content: 'San Jose' }, 
    ];
//grab container
const dropdownContainer = document.querySelector(".dropdown-container");
//create <select>
const select = document.createElement("select");
dropdownContainer.append(select);
console.log(dropdownContainer);
//get values 
const dropdownValues = dropDownList.map(object=>{
    return object.content; 
});

dropdownValues.forEach(content=>{
    //create <option>
    let option = document.createElement("option");
    let optionText = document.createTextNode(content);
    option.append(optionText);
    select.append(option);
})
