// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector('#addForm')
const employeeTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let countEmployees = 0

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let empID = document.getElementById('id').value
    const empName = document.getElementById('name').value
    const empExt = document.getElementById('extension').value
    const empEmail = document.getElementById('email').value
    const empDepartment = document.getElementById('department').value

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeeTable.insertRow()

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = newRow.insertCell()
    const cellName = newRow.insertCell()
    const cellExt = newRow.insertCell()
    const cellEmail = newRow.insertCell()
    const cellDepartment = newRow.insertCell()

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    // cellID.textContent = empID
    cellID.appendChild(document.createTextNode(empID))
    cellName.appendChild(document.createTextNode(empName))    
    cellExt.appendChild(document.createTextNode(empExt))    
    cellEmail.appendChild(document.createTextNode(empEmail))
    cellDepartment.appendChild(document.createTextNode(empDepartment))

    // CREATE THE DELETE BUTTON
    const cellDel = newRow.insertCell()
    const delBtn = document.createElement('button')
    delBtn.innerText = 'X'
    delBtn.className = 'btn btn-danger btn-sm'
    cellDel.appendChild(delBtn)

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    empID = document.getElementById('id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    countEmployees++;
    document.querySelector('output').innerText = `(${countEmployees})`;

})

// DELETE EMPLOYEE
    employeeTable.addEventListener('click', (e) =>{
        if (confirm(`Are you sure you want to delete employee ${e.target.parentElement.parentElement.children[1].innerText}?`)) {

            employeeTable.deleteRow(e.target.parentElement.parentElement.rowIndex)
            countEmployees --;
            document.querySelector('output').innerText = `(${countEmployees})`;
            if (countEmployees < 1) {
                const output = document.querySelector('output');
                output.innerText = '';
            }
        }
    })




