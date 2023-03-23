// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm')
let employeeTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let countEmployees = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.getElementById('id').value
    let empName = document.getElementById('name').value
    let empExt = document.getElementById('extension').value
    let empEmail = document.getElementById('email').value
    let empDepartment = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = employeeTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = newRow.insertCell()
    let cellName = newRow.insertCell()
    let cellExt = newRow.insertCell()
    let cellEmail = newRow.insertCell()
    let cellDepartment = newRow.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    empID = document.createTextNode(empID)
    cellID.appendChild(empID)
    empName = document.createTextNode(empName)
    cellName.appendChild(empName)    
    empExt = document.createTextNode(empExt)
    cellExt.appendChild(empExt)    
    empEmail = document.createTextNode(empEmail)
    cellEmail.appendChild(empEmail)
    empDepartment = document.createTextNode(empDepartment)
    cellDepartment.appendChild(empDepartment)

    // CREATE THE DELETE BUTTON
    const delButton = document.createElement('button')
    delButton.className = 'btn btn-danger btn-sm delete'
    let x = document.createTextNode('X')
    delButton.appendChild(x)
    let cellDel = newRow.insertCell()
    cellDel.appendChild(delButton)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    empID = document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    countEmployees++;
    document.querySelector('output').innerHTML = `(${countEmployees})`;

})

// DELETE EMPLOYEE
    employeeTable.addEventListener('click', (e) =>{
        if (confirm(`Are you sure you want to delete employee ${e.target.parentElement.parentElement.children[1].innerText}?`)) {

            employeeTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            countEmployees -= 1;
            document.querySelector('output').innerHTML = `(${countEmployees})`;
            if (countEmployees === 0) {
                let output = document.querySelector('output');
                output.innerHTML = '';
            }
        }
    })

    

