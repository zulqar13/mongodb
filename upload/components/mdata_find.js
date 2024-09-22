var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/employee");
var conn = mongoose.connection;

var employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  etype: String,
  hourlyrate: Number,
  totalhour: Number,
});

employeeSchema.methods.totalSalary = function () {
  return this.hourlyrate * this.totalhour;
};

var employeeModel = mongoose.model("Employee", employeeSchema);

var employees = new employeeModel({
  name: "Ahmad",
  email: "zulqar13@yahoo.com",
  etype: "hourly",
  hourlyrate: 10,
  totalhour: 16,
});

employees.total = employees.totalSalary();

conn.on("connected", function () {
  console.log("Connected successfully");
});
conn.on("disconnected", function () {
  console.log("Disconnected successfully");
});
conn.on("error", console.error.bind(console, "connection error:"));

// employeeModel
//   .find()
//   .then(employees, () => {
//     console.log(employees);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

employeeModel
  .find()
  .then(employeeModel, () => {
    console.log(employeeModel);
  })
  .catch((err) => {
    console.log(err);
  });

conn.close();
