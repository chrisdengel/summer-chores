const name = 'Chris';

function mowYard(callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard`);
    callback();
  }, 2000);
}

function weedEat(callback) {
  setTimeout(() => {
    const chanceComplete = Math.random() >= 0.2;
    if (chanceComplete) {
      console.log(`${name} finished using the weed eater.`);
      callback();
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, 1500);
}

function trimHedges(callback) {
  setTimeout(() => {
    const chanceComplete = Math.random() >= 0.2;
    if (chanceComplete) {
    console.log(`${name} finished trimming the hedges.`);
    callback();
  } else {
    console.log((`${name} fell asleep after weed eating the yard`));
  }
  }, 1000);
}

function collecWood(callback) {
    setTimeout(() => {
        const chanceComplete = Math.random() >= 0.2;
        if (chanceComplete) {
            console.log(`${name} finished collecting wood`);
            callback();
        } else {
            console.log(`${name} fell asleep after trimming the hedges`);
        }
        
    }, 2500);
}

function waterGarden(callback) {
    setTimeout(() => {
        const chanceComplete = Math.random() >= 0.2;
        if (chanceComplete) {
            console.log(`${name} finished watering the garden`);
            callback()
        } else {
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 500);
}

mowYard(() => {
  weedEat(() => {
    trimHedges(() => {
        collecWood(() => {
            waterGarden(() => {
                console.log(`${name} finished all their chores!`);
            })
        })
    });
  });
});