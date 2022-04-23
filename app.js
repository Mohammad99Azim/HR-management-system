let employyeeArr = [];

function Person(Employee_ID, Full_Name, Department, Level, Image_URL, Salary) {
    this.Employee_ID = Employee_ID;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.Level = Level;
    this.Image_URL = Image_URL;
    this.Salary = Salary;
    employyeeArr.push(this);

}

Person.prototype.salaryCalc = function() {
    let netSalary = 0;
    let tax = 0;
    if (this.Level == "Senior") {
        netSalary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    } else if (this.Level == "Mid-Senior") {
        netSalary = Math.floor(Math.random() * (1500 - 1000) + 1000);
    } else if (this.Level == "Junior") {
        netSalary = Math.floor(Math.random() * (1000 - 500) + 500);
    }

    tax = netSalary * 0.075;
    netSalary -= tax;
    this.Salary = netSalary;
}

Person.prototype.render = function() {
    document.getElementById('person').innerHTML += (`
    <div class="employeeNS">
        <p>Name : ${this.Full_Name}</p>
        <p>Net Salary : ${this.Salary}</p>
        <br><br>
    <div>
    `);
}

let Ghazi = new Person(1000, 'Ghazi Samer', 'Administration', 'Senior', '', 0);
let Lana = new Person(1001, 'Lana Ali', 'Finance', 'Senior', '', 0);
let Tamara = new Person(1002, 'Tamara Ayoub', 'Marketing', 'Senior', '', 0);
let Safi = new Person(1003, 'Safi Walid', 'Administration', 'Mid-Senior', '', 0);
let Omar = new Person(1004, 'Omar Zaid', 'Development', 'Senior', '', 0);
let Rana = new Person(1005, 'Rana Saleh', 'Development', 'Junior', '', 0);
let Hadi = new Person(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', '', 0);



for (let i = 0; i < employyeeArr.length; i++) {
    employyeeArr[i].salaryCalc();
    employyeeArr[i].render();
}

// Ghazi.salaryCalc();
// Ghazi.render();


// Lana.salaryCalc();
// Lana.render();

// Tamara.salaryCalc();
// Tamara.render();

// Safi.salaryCalc();
// Safi.render();


// Omar.salaryCalc();
// Omar.render();

// Rana.salaryCalc();
// Rana.render();

// Hadi.salaryCalc();
// Hadi.render();