const name = "chris";


function mowYard() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const yardMowed = true;
            if(yardMowed) {
                resolve(`${name} mowed the yard.`)
            }
        }, 2000);
    })
}


function weedEat(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            const weedsAte = Math.random() >= 0.2;

            if(weedsAte) {
                resolve(`${name} finished using the weed eater.`);
            }
            else {
                reject(`${name} fell asleep after mowing the yard`)
            }
        }, 1500);
    });
}




function trimHedges(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = Math.random() >= 0.2;
  
            if(trashTakenOut) {
                resolve(`${name} finished trimming the hedges.`);
            }
            else {
                reject(`${name} fell asleep after weed eating the yard`)
            }
        }, 1000);
    })

}

function  collectWood(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const woodCollected = Math.random() >= 0.2;
  
            if(woodCollected) {
                resolve(`${name} finished collecting wood`);
            }
            else {
                reject(`${name} fell asleep after collecting wood.`)
            }
        }, 2500);
    })

}

function waterGarden(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const gardenWatered = Math.random() >= 0.2;
  
            if(gardenWatered) {
                resolve(`${name} finished watering the garden`);
            }
            else {
                reject(`${name} fell asleep after collecting wood.`)
            }
        }, 500);
    })

}


function doSummerChores() {
    return mowYard()
      .then(value => { console.log(value); return weedEat(); })
      .then(value => { console.log(value); return trimHedges(); })
      .then(value => { console.log(value); return collectWood(); })
      .then(value => { console.log(value); return waterGarden(); })
      .then(value => { console.log(value);
        console.log(`${name} finished all their chores!`);
      })
      .catch(error => console.error(error));
  }
  doSummerChores().catch(err => console.error(err));
