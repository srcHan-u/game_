"use strict";
import {
  HERO,
  BASIC_CHARACTERISTICS_OF_CLASSES,
  HERO_BAG,
} from "./hero/settings-of-hero.js";

import { randomValue, log, cloneOfObject} from "./general/help-functions.js";

const controllButtonStart = document.querySelector("#controllButtonStart");
const controlSelectRace = document.querySelector("#controlSelectRace");
const controlSelectClass = document.querySelector("#controlSelectClass");
const controlSelectName = document.querySelector("#controlSelectName");
const popupInfo = document.querySelector(".main-alert-info");
const backgroundBlack = document.querySelector(".background_color_black");
let cookie;

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
  const value = classOfHero;
  const hero = HERO.abilities;
  let basicCharacteristics;
  if (value === "Маг") {
   basicCharacteristics = BASIC_CHARACTERISTICS_OF_CLASSES.magician; 

    // BASIC_CHARACTERISTICS_OF_CLASSES
    hero.agility = basicCharacteristics.abilities.agility;
    hero.strength =
      basicCharacteristics.abilities.strength;
    hero.intelligence =
      basicCharacteristics.abilities.intelligence;
    hero.luck = basicCharacteristics.abilities.luck;
    hero.health = basicCharacteristics.abilities.health;
    hero.damage = basicCharacteristics.abilities.damage;
    hero.armor = basicCharacteristics.abilities.armor;
   }

   HERO.sumArmor();
   HERO.sumDamage();
   // cookie = document.cookie = JSON.stringify(HERO);
   // log(cookie)
}


// log(localStorage.getItem())
log(HERO);
log(randomValue(20));
