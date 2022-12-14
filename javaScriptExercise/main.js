function raceGame(carCount) {
  console.log("Welcome to RaceGame!");
  let cars = [];
  for (let i = 0; i < carCount; i++) {
    let inputCarName = prompt(`You have ${carCount} cars.\n
    Enter name of car #${i + 1}`);
    if (!inputCarName) {
      console.log(`Please enter a valid name. (no empty strings!)`);
      i--;
      continue;
    }
    if (
      cars.filter((item) => {
        return item.carName == inputCarName;
      }).length
    ) {
      console.log(
        `"${inputCarName}" is assigned before!\nPlease enter another name!`
      );
      i--;
      continue;
    }
    cars.push(new CarGenerator(inputCarName));
  }
  let randomOrders = randomOrder(carCount);
  cars.forEach((item, index) => {
    item.order = randomOrders[index];
    item.position = 0;
  });
  cars.sort((a, b) => {
    return a.order - b.order;
  });
  console.log(`Starting Oreder:`);
  cars.forEach((el) => {
    console.log(el.carName);
  });
  let track = [..."*".repeat(300)];
  let ranking = [];
  while (
    cars.filter((item) => {
      return item.position > 300;
    }).length < carCount
  ) {
    let dice = diceArray(10, carCount);
    track = [..."*".repeat(300)];

    for (let i = 0; i < carCount; i++) {
      cars[i].position += dice[i];
      if (cars[i].position < 300) {
        track[cars[i].position] = cars[i].carName;
        cars
          .filter((el) => {
            return (
              (el.position === cars[i].position) &
              (el.carName !== cars[i].carName)
            );
          })
          .forEach((comp) => {
            comp.position = 0;
            console.log(`"${comp.carName}" hitted by "${cars[i].carName}"`);
          });
      } else {
        ranking.push(cars[i].carName);
      }
    }

    console.log(track.join(""));
  }
  console.log(`And the winner is: ${ranking[0]}`);
}

function raceGameRunner() {
  let carCount = parseInt(+prompt("Enter cars count:"));
  if (isNaN(carCount)) {
    console.log(new Error("You must enter a number!"));
    return;
  }
  if (!naturalNumberValidator(carCount)) {
    console.log(new Error("You must enter a natural number!"));
    return;
  }
  raceGame(carCount);
}

function CarGenerator(inputName) {
  this.carName = inputName;
}
raceGameRunner();

function randomOrder(inputCarCount) {
  let randomNumbers = [];
  while (randomNumbers.length < inputCarCount) {
    let randOrder = parseInt(Math.random() * inputCarCount + 1);
    if (!randomNumbers.includes(randOrder)) {
      randomNumbers.push(randOrder);
    }
  }
  return randomNumbers;
}

function diceArray(inputMax, inputCount) {
  let diceOrder = [];
  while (diceOrder.length < inputCount) {
    diceOrder.push(parseInt(Math.random() * inputMax + 1));
  }
  return diceOrder;
}
