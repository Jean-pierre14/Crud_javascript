function onFormSubmit(){
    let formData = readFormData();
    insertNewRecord(formData);
}

function readFormData(){
    let formData = {};
    formData['fullname'] = document.getElementById("fullname").Value;
    formData['empCode'] = document.getElementById("empCode").Value;
    formData['salary'] = document.getElementById("salary").Value;
    formData['city'] = document.getElementById("city").Value;
    return formData;
}
function insertNewRecord(data){
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a>Edit</a>
                        <a>Delete</a>`;
}