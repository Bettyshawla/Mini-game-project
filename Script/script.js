class Ship {
    constructor(hull, firepower, accuracy, alive) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.alive = alive;
    }
}

//======EARTH SHIP======

const uss = new Ship(20, 5, .7, true)
{
    {
        console.log()
        console.log()
        console.log()
        console.log()
    }
    console.log("============================USS Ship =========================")
    {
        console.log()
        console.log()
        console.log()
        console.log()
    }
    console.log(uss)

    {
        console.log()
        console.log()
        console.log()
    }
}

//=======ALIEN SHIP========

let alienShipArr = [];


function setAlienShip() {
    let hull = Math.floor(Math.random() * 4 + 3);
    let firepower = Math.floor(Math.random() * 3 + 2);
    let accuracy = Math.random() * 0.2 + 0.6;  // is the logic we used to get the decimal let accuracy = Math.random() * (MAX - min) + min
    let alive = true
    let alienShip = new Ship(hull, firepower, accuracy, alive)

    return alienShip;
}


for (let i = 0; i < 6; i++) {
    let newAlienShip = setAlienShip();
    alienShipArr.push(newAlienShip);
}

{
    console.log("============================ALien Ship Array =========================")
    {
        console.log()
        console.log()
        console.log()
    }
    console.log(alienShipArr)

    {
        console.log()
        console.log()
        console.log()
    }
}



// Alien Attack
function alienAttack() {
    if(uss.alive != false){

    for (let i = 0; i < alienShipArr.length; i++) {

  let alienIsAttacking = alienShipArr[i].accuracy > uss.accuracy;

    let alienHealth = alienShipArr[i].hull - uss.firepower;

    

        if (alienShipArr[i] != null) {

            if (alienIsAttacking) {
                if (uss.hull <= 0 && alienShipArr[i].hull > 0 && uss.alive != false) {

                    uss.alive = false
                    console.log(uss)

                    console.log("=====================================================")
                    {
                        console.log()
                        console.log()
                        console.log()

                    }
                    console.log(` Alien ${i} Attacked and killed the USS Ship`)
                    console.log("USS IS DEFEATED")

                } else if (uss.hull > 0 && alienShipArr[i].hull > 0 && uss.alive != false) {
                    let ussHealth = uss.hull - alienShipArr[i].firepower
                    console.log(alienShipArr[i], "alien ship attacking currently")
                    uss.hull = ussHealth

                    console.log("=====================================================")
                    {
                        console.log()
                        console.log()
                        console.log()

                    }
                    attackAliensThatWereMissed()
                    alienAttack()
                    console.log(`The USS ship has been -- Damaged --  but --- Survived--- the attack by ${i}`)
                }

            }

        } else {
            console.log('ALien has been defeated')
        }

    }
    }
}


// //========USS ATTACK=========



function ussAttack() {

    for (let i = 0; i <= alienShipArr.length; i++) {


        if (alienShipArr[i] != null) {

            let alienHealth = alienShipArr[i].hull - uss.firepower;

            let ussHealth = uss.hull - alienShipArr[i].firepower;

            let ussIsAttacking = uss.accuracy > alienShipArr[i].accuracy;

            if (ussIsAttacking) {
                console.log('====The US is ATTACKING!=====');

                if (alienHealth > 0 && ussHealth > 0) {
                    alienShipArr[i].hull = alienHealth

                    console.log("======================Alien Ship after The USS has ATTACKED  ======================")
                    console.log(alienShipArr[i], `The new ALien ship number ${i} `)

                    ussAttack()
                    {
                        console.log()
                        console.log()
                        console.log()
                    }

                } else if (alienHealth <= 0 && ussHealth > 0) {
                    alienShipArr[i].alive = false
                    console.log("======================Ship that is about to DIE ======================")
                    console.log(alienShipArr[i])
                    alienShipArr.splice(i, 1)
                }
                retreat()
                console.log(alienShipArr.length, "Array length")
            }
        }
    }


}

function attackAliensThatWereMissed(){
 for(let i = 0; i < alienShipArr.length; i++){
    if(uss.accuracy < alienShipArr[i].accuracy){
        let alienHealth = alienShipArr[i].hull - uss.firepower;
        if(alienShipArr[i].hull > 0){
            alienShipArr[i].hull = alienHealth;
            attackAliensThatWereMissed();
        } else if(alienShipArr[i].hull <= 0){
            alienShipArr.splice(i, 1);
        } else if(alienShipArr[i].alive === false){
            alienShipArr.splice(i, 1);
        }
    }
 }
}

ussAttack()

alienAttack()

if(uss.alive === true && alienShipArr.length === 0){
    console.log("Earth has been saved Uss won")
}

function retreat() {
    if (alienShipArr.hull <= 0) {
        alienShipArr[i].alive = true;
        console.log(`alien ${[i]} is dead, Do you want to continue OR retreat???`); // player recieves option to continue or retreat
        return ("you retreated! GAME OVER") // player clicked retreat button
    }
}






