// let ROUND = 0;
// let healCounts = 3
// class Hero {
//     constructor(name, hp, mana, attack, armor) {
//         this.name = name;
//         this.hp = hp;
//         this.mana = mana;
//         this.attack = attack;
//         this.armor = armor
//     }
// }

// class Warrior extends Hero {
//     constructor(name, skill) {
//         super(name, 2500, 650, 130, 15)
//         this.skill = skill
//     }
//     set warriorstats(params) {
//         const { hp, mana, attack, armor } = params;
//         this.hp = hp ? hp : this.hp
//         this.mana = mana ? mana : this.mana
//         this.attack = attack ? attack : this.attack
//         this.armor = armor ? armor : this.armor
//     }
// }

// class Boss extends Hero {
//     set stats(params) {
//         const { hp, mana, attack, armor } = params
//         this.hp = hp ? hp : this.hp
//         this.mana = mana ? mana : this.mana
//         this.attack = attack ? attack : this.attack
//         this.armor = armor ? armor : this.armor
//     }
// }
// const huskar = new Warrior('Huskar', 'FireSpear');
// const roshan = new Boss('Roshan', 5000, 0, 60, 0)
// huskar.warriorstats = ({ hp: 2500, mana: 650, attack: 130, armor: 15 })
// const huskarNode = document.getElementById('huskar')
// const bossNode = document.getElementById('roshan')

// function objectStats(hero) {
//     let statsNode = ''
//     Object.keys(hero).forEach(key => {
//         statsNode += `
//         <div>
//         <span>${key}:</span>
//         <span>${hero[key]}</span>
//         </div>
//         `
//     })
//     return statsNode
// }
// function updateStats() {
//     huskarNode.innerHTML = objectStats(huskar);
//     bossNode.innerHTML = objectStats(roshan)
// }
// updateStats()


// function huskarAttack() {
//     roshan.hp = roshan.hp - huskar.attack
//     if (roshan.hp <= 0) {
//         roshan.hp = 0
//     }
//     console.log(roshan.hp);
//     updateStats()
// }
// function innerFire() {
//     roshan.hp = roshan.hp - (huskar.attack * 2.5)
//     huskar.mana = huskar.mana - 120
//     if (roshan.hp <= 0) {
//         roshan.hp = 0
//     }
//     if (huskar.mana <= 0) {
//         huskar.mana = 0
//     } else if (huskar.mana < 119) {
//         document.querySelector('#innerFire').disabled = true
//         console.log(roshan.hp);

//     }
//     console.log(roshan.hp);

//     updateStats()

// }
// function healing() {
//     let heal = Math.floor((huskar.hp / 100) * 30)
//     huskar.hp = huskar.hp + heal
//     huskar.mana = huskar.mana - 50;

//     if (huskar.mana < 50) {
//         document.querySelector('#heal').disabled = true
//     }

//     if(healCounts <= 0){
//         return;
//     }
//     heal = huskar.hp = huskar.hp +50;
//     huskar.mana = huskar.mana - 50
//     healCounts = healCounts - 1

//     updateStats()
// }
// function lifeBreak() {
//     const halfhuskar = (huskar.hp * 0.5);
//     const halfrosh = (roshan.hp * 0.5);
//     huskar.hp = huskar.hp - halfhuskar;
//     roshan.hp = roshan.hp - halfrosh;

//     if (this.isRun) {
//         return false
//     }
//     this.isRun = true
//     document.querySelector('#lifebreak').disabled = true
//     updateStats()
// }
// function manaRefresh(){
//     const refreshMana = Math.floor(huskar.mana /100) *100 
//     huskar.mana = huskar.mana + refreshMana
//     if(huskar.mana > 650){
//     }
//     document.querySelector('#manarefresh').disabled = true
//     updateStats()
// }
// function fixArmor(){
//     const armorfix = Math.floor(huskar.armor/100) *100
//     huskar.armor = huskar.armor + armorfix
//     if(huskar.armor > 15){

//     }
//     document.querySelector('#armorfixer').disabled = true
//     updateStats()
// }


let round = 1;
let heroUltimateCount = 0;
let heroHealCount = 0;
let heroArmorCount = 0;
let heroAddManaCount = 0;


// My Heroes Keys //
const hero_hp = 2500;
const hero_mana = 650;
const hero_attack = 120;
const hero_armor = 25;


// Enemy Keys //

const enemy_hp = 6000;
const enemy_mana = 0;
const enemy_attack = 75;
const enemy_armor = 0;

class Hero {
    constructor(name, hp, mana, attack, armor) {
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.attack = attack;
        this.armor = armor;
    }
}
class Huskar extends Hero {
    constructor(name) {
        super(name, hero_hp, hero_mana, hero_attack, hero_armor);
    }
    resetArmor() {
        this.armor = hero_armor
    }
}
// class Ursa extends Hero {
//     constructor(name) {
//         super(name, hero_hp, hero_mana, hero_attack, hero_armor);
//     }
//     resetArmor() {
//         this.armor = hero_armor
//     }
// }

class Roshan extends Hero {
    constructor(name) {
        super(name, enemy_hp, enemy_mana, enemy_attack, enemy_armor)
    }
    resetArmor() {
        this.armor = enemy_armor
    }
}


const huskar = new Huskar('Huskar');
// const ursa = new Ursa('Ursa')
const roshan = new Roshan('Roshan')

const heroesNode = document.getElementById('heroes')
const enemyNode = document.getElementById('enemy')
const roundNode = document.getElementById('round')

function renderStats(hero) {
    let statsNode = ""
    Object.keys(hero).forEach(key => {
        statsNode += `
        <div>
        <span>${key}:</span>
        <span>${hero[key]}</span>
        </div>
        `
    })
    return statsNode
}

function updateStats() {
    console.log(huskar);
    roundNode.innerHTML = `ROUND:${round}`
    heroesNode.innerHTML = renderStats(huskar).toUpperCase();
    enemyNode.innerHTML = renderStats(roshan).toUpperCase();
    round += 1
}
updateStats();
console.log(updateStats);
function gameOver() {
    if (roshan.hp <= 0) {
        roshan.hp = 0
        alert('Victory, Huskar slayed Roshan!')
    }
    if (huskar.hp <= 0) {
        huskar.hp = 0;
        alert('Defeat, Roshan is a King of Pit')
    }
}

updateStats()

/// Active buttons and Skills ///
function heroAttack() {
    huskar.hp -= Math.floor(Math.random() * 100);
    roshan.hp -= Math.floor(Math.random() * 100);
    gameOver();
    updateStats()
}

/// first skill ///

function heroSkill() {
    if (huskar.mana <= 150) {
        updateStats()
        return
    }
    roshan.hp -= Math.floor(Math.random() * 400)
    huskar.mana -= 150
    gameOver()
    updateStats()
}

///ultimate skill///

function heroUltimate() {
    heroUltimateCount += 1
    if (heroUltimateCount > 1) {
        heroUltimate() = false
    }
    const halfLife = (huskar.hp / 100) * 50;
    huskar.hp = halfLife;
    const halfLife2 = (roshan.hp / 100) * 50;
    roshan.hp -= halfLife2;
    updateStats()
}

///Heal skill///

function heroHeal() {
    heroHealCount += 1;
    if (heroHealCount > 3) {
        heroHeal() = false
    }
    if (huskar.mana <= 50) {
        updateStats()
        return
    }
    const healSkill = Math.floor((huskar.hp / 100) * 30)
    huskar.hp += healSkill;
    huskar.mana -= 50
    updateStats()
}

///Fixing Armor///

function heroFixArmor() {
    heroArmorCount += 1
    if (heroArmorCount > 1) {
        heroFixArmor = false
    }
    huskar.resetArmor()
    updateStats()
}

///Replenish Mana ///
function heroAddMana() {
    heroAddManaCount += 1;
    if (heroAddManaCount > 1) {
        heroAddMana() = false
    }
    huskar.mana += 200
    updateStats()
}

///RESET BATTLE///
function reset() {
    window.location.reload()
}

function handleKey(event) {
    const { key } = event;
    switch (key) {
        case 'z':

            heroAttack()
            break;
        case 'a':
            heroSkill()
            break;
        case 'q':
            heroUltimate()
            break;
        case 'w':
            heroHeal()
            break;
        case 'e':

            heroFixArmor()
            break;
        case 'r':
            heroAddMana()
            break;
        case 'd':

    default:
            break;
    }
}
addEventListener('keyup', handleKey);