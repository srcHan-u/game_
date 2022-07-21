"use strict";
import { HERO, BASIC_CHARACTERISTICS_OF_CLASSES} from "./hero/settings-of-hero.js";
import {randomValue, log} from './general/help-functions.js';



const controllButtonStart = document.querySelector("#controllButtonStart");
const controlSelectRace = document.querySelector("#controlSelectRace");
const controlSelectClass = document.querySelector("#controlSelectClass");
const controlSelectName = document.querySelector("#controlSelectName");
const popupInfo = document.querySelector(".main-alert-info");
const backgroundBlack = document.querySelector(".background_color_black");

controllButtonStart.addEventListener("click", () => {
  if (
    controlSelectRace.value === "Empty" ||
    controlSelectClass.value === "Empty" ||
    controlSelectName.value === ""
  ) {
    popupInfo.classList.add("active");
    backgroundBlack.classList.add("visible");
  }
  HERO.class = controlSelectClass.value;
  HERO.race = controlSelectRace.value;
  HERO.name = controlSelectName.value;
  setClasses(controlSelectClass.value);
});

backgroundBlack.addEventListener("click", () => {
  backgroundBlack.classList.remove("visible");
  document.querySelector(".main-alert-info").classList.remove("active");
});



function setClasses(classOfHero) {
  let value = classOfHero;
  log(value)
  if (value === "Маг") {
   //  HERO.totalDamage = obj.damage;
   //  HERO.totalArmor = obj.armor;

   // BASIC_CHARACTERISTICS_OF_CLASSES
    HERO.abilities.agility = BASIC_CHARACTERISTICS_OF_CLASSES.magician.abilities.agility;
    HERO.abilities.strength = BASIC_CHARACTERISTICS_OF_CLASSES.magician.abilities.strength;
    HERO.abilities.intelligence = BASIC_CHARACTERISTICS_OF_CLASSES.magician.abilities.intelligence;
    HERO.abilities.luck = BASIC_CHARACTERISTICS_OF_CLASSES.magician.abilities.luck;
    HERO.abilities.health = BASIC_CHARACTERISTICS_OF_CLASSES.magician.abilities.health;
  }
}

log(HERO);
log(randomValue(20))
