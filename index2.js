const x = {
  brands: "samsung",
  os: "Ios",
  screensize: "6 inch",
  turnOn: function () {
    console.log(`${this.brands} Is Trun On`);
  },
};

x.turnOn();

const y = {
  brands: "samsung",
  os: "Ios",
  screensize: "6 inch",
  turnOn: () => {
    console.log(`${this.brands} Is Trun On`);
  },
};

y.turnOn();
