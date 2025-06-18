// encapsulation

let employee = 
{
  anualSalary: 5000,
  overtime: 20,
  rate: 10,
  getWage: function()
  {
    return this.anualSalary + (this.overtime*this.rate);
  }
};
console.log(employee.getWage());
