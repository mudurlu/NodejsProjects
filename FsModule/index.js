
const fs = require("fs")

fs.writeFile("employees.json", `{"name": "Employee 1 Name", "salary": 2000}`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("JSON dosyası oluşturuldu")
  }
})

fs.readFile("./employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Dosya başarılı bir şekilde okundu.");
  }
});

fs.writeFile(
  "./employees.json",
  '{ "name": "Employee 3 Name", "salary": 3000 }',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Dosya başarılı bir şekilde güncellendi.");
    }
  }
);

fs.unlink("./employees.json", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Dosya başarılı bir şekilde silindi.");
  }
});
