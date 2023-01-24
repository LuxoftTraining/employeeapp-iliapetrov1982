const PLACEHOLDER = "employeesPlaceholder"

function clearEmployeesPlaceholder() {
    document.getElementById(PLACEHOLDER).innerHTML = '';
}

function showEmployees(employees) {
    clearEmployeesPlaceholder();
    const ul = document.createElement("ul");

    for (let employee of employees) {
        const li = document.createElement("li");
        ul.appendChild(li);

        li.innerHTML = employee.name + " " + employee.surname + " " + (employee.birthdate ? employee.birthdate : "");
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener('click', () => removeEmployeeUI(employee.id));
        li.appendChild(removeButton);

    }
    document.getElementById(PLACEHOLDER).appendChild(ul);
}

function removeEmployeeUI(id) {
    removeEmployee(id);
    showEmployees(DATA.employees);
}

function runUI() {
    showEmployees(DATA.employees);
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
}

function addEmployeeUI() {
    let errorHTML = "";
    const name = document.getElementById("name").value;
    if (name==="") {
        errorHTML += "- Employee name should be set<br>";
        alert("Employee Name should be set")
    }
    const surname = document.getElementById("surname").value;
    if (surname==="") {
        errorHTML += "- Employee surname should be set<br>";
        alert("Employee Surname should be set")
    }
    const birthdate = document.getElementById("dateOfBirth").value;
    if (birthdate==="") {
        errorHTML += "- Employee Birthdate should be set<br>";
        alert("Employee Birthdate should be set")
    }
    document.getElementById("addEmployeeFormErrorMessage")
        .innerHTML = errorHTML;
    if (errorHTML.length !== 0) return;

    addEmployee(name, surname, birthdate);
    showEmployees(DATA.employees);
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("dateOfBirth").value = "";
}

function fillSelect(select, values, selectedValue) {
    for (let val of values) {
        const option = document.createElement("option");
        option.text = val.text;
        option.value = val.value;
        if (selectedValue === option.value) option.selected=true;
        select.appendChild(option);
    }
}

function getEmployeesOptions() {
    let options = [];
    for (let e of DATA.employees) {
        options.push({text:e.name+' '+e.surname, value:e.id});
    }
    return options;
}
