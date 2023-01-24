// const DATA = {
//     employees: [
//         {
//             id: 1,
//             name: "Peter",
//             surname: "Peterson",
//             department: "IT"
//         },
//         {
//             id: 2,
//             name: "Misha",
//             surname: "Mishin",
//             department: "HR"
//         },
//         {
//             id: 3,
//             name: "Grisha",
//             surname: "Grishin",
//             department: "SALES"
//         },
//     ]
// }

function findByName(name, surname) {
    return DATA.employees.filter(
        elem =>
            (!name || elem.name === name)
            && (!surname || elem.surname === surname)
    )
}

console.log(findByName("Peter", "Peterson"))

function addEmployee(name, surname) {
    if (!name || name.length==0 || !surname || surname.length==0) {
        throw new Error("name and surname should be not empty");
    }
    let max = 0;
    for (let e of DATA.employees) {
        if (e.id>max) max = e.id;
    }
    let id = max+1;
    DATA.employees.push({id,name,surname});
    return id;
}

console.log(addEmployee("Ilia", "Petrov"))
console.log(DATA)

function removeEmployee(id) {
    let index = 0;
    for (let e of DATA.employees) {
        if (e.id===id) break;
        index++;
    }
    DATA.employees.splice(index, 1);
}

function showEmployee(employee) {
    const keys = Object.keys(employee);
    console.log("Employee info "+employee["name"]+":");
    for (let key of keys) {
        console.log(key+ " = "+employee[key]);
    }
}

function showEmployees() {
    // alternative option:
    // DATA.employees.forEach(showEmployee);
    for (let e of DATA.employees) {
        showEmployee(e);
    }
}

