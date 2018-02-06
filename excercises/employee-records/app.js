var employees = []



function EmployeeRecords(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status || "Full time"


}
EmployeeRecords.prototype.print = function(){
    console.log(" My name is " + this.name + " my title is " + this.title + " i make " + this.salary + " per day" + " I am currently working" + this.status + " .")
}
var luke = new EmployeeRecords("Luke", "Web Developer", "100$" , "Part time")
var steve = new EmployeeRecords("Steve", "Janitor", "100,000,000$", )
var joe = new EmployeeRecords("joe", "windowlicker", "420$", )

employees.push(luke)
employees.push(steve)
employees.push(joe)
luke.print()
console.log(employees)
