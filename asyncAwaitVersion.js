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

const doSummerChores = async () => {
    
    try {
        const firstThing = await mowYard();
        console.log(firstThing);

        const taskOne = await weedEat();
        console.log(taskOne);

        const taskTwo = await trimHedges()
        console.log(taskTwo)

        const taskThree = await collectWood()
        console.log(taskThree)

        const taskFour = await waterGarden();
        console.log(taskFour)

        console.log((`${name} finished your chores!`));

     }catch(error) {
        console.error(error);
     }
  }
  doSummerChores()
