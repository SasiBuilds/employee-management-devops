
let employees = JSON.parse(localStorage.getItem('employees')) || [];

function saveData() {
  localStorage.setItem('employees', JSON.stringify(employees));
}

function render() {
  const table = document.getElementById('employeeTable');
  table.innerHTML = '';
  employees.forEach((e, i) => {
    table.innerHTML += `
      <tr>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.department}</td>
        <td>${e.designation}</td>
        <td>
          <button onclick="editEmp(${i})">Edit</button>
          <button onclick="deleteEmp(${i})">Delete</button>
        </td>
      </tr>`;
  });
}

document.getElementById('employeeForm').addEventListener('submit', function(ev){
  ev.preventDefault();
  const id = document.getElementById('empId').value;
  const emp = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    department: document.getElementById('department').value,
    designation: document.getElementById('designation').value
};

  if(id === '') employees.push(emp);
  else employees[id] = emp;

  saveData();
  render();
  this.reset();
  empId.value = '';
});

function editEmp(i){
    const e = employees[i];

    document.getElementById('empId').value = i;
    document.getElementById('name').value = e.name;
    document.getElementById('email').value = e.email;
    document.getElementById('department').value = e.department;
    document.getElementById('designation').value = e.designation;
}
document.getElementById('employeeForm').reset();
document.getElementById('empId').value = '';

function deleteEmp(i){
  employees.splice(i,1);
  saveData();
  render();
}

render();
