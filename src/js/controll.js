import { HERO } from "./game.js";

const { log } = console;

const controllButtonStart = document.querySelector("#controllButtonStart");
const controlSelectRace = document.querySelector("#controlSelectRace");
const controlSelectClass = document.querySelector("#controlSelectClass");
const controlSelectName = document.querySelector("#controlSelectName");

controllButtonStart.addEventListener("click", () => {
  if (
    controlSelectRace.value === "Empty" ||
    controlSelectClass.value === "Empty" ||
    controlSelectName.value === ""
  ) {
    alert("Для продолжения игры вы должны выбрать класс, расу и имя!");
  }
  HERO.class = controlSelectClass.value;
  HERO.race = controlSelectRace.value;
  HERO.name = controlSelectName.value;
  setClasses(controlSelectClass.value);
});

class BasicCharacteristicsOfClasses {
  constructor(classOfHero, damage, intelligence, strength, agility, armor) {
    this.classOfHero = classOfHero;
    this.characteristics = {
      
    }
   //  this.damage = damage;
   //  this.intelligence = intelligence;
   //  this.strength = strength;
   //  this.agility = agility;
   //  this.armor = armor;
   //  this.equip = {
   //    weapon: {
   //      name: null,
   //      damage: 0,
   //      critChance: 1,
   //    },
   //    arms: {
   //      name: null,
   //      armor: 0,
   //    },
   //  };
  }

}

log(o)
function setClasses(classOfHero) {
  let value = classOfHero;
  // log(obj)
  if (value === "Маг") {
    HERO.totalDamage = obj.damage;
    HERO.totalArmor = obj.armor;
    HERO.characteristics.agility = obj.agility;
    HERO.characteristics.strength = obj.strength;
    HERO.characteristics.intelligence = obj.intelligence;
  }
}

log(HERO);
// log({...})
// log(controllButtonStart, controlSelectRace, controlSelectClass)
