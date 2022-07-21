const {log} = console;

// sleep for update opponents

export const HERO = {
   name: null,
   health: null, 
   level: 1,
   experience: {
      have: 0,
      need: 100,
   }, 
   totalArmor: 0,
   totalDamage: 0,
   race: null,
   characteristics:{
      strength: null,
      agility: null,
      intelligence: null,
   },
   luck: null,
   class: null,
   equip:{
      weapon:{
         name: null,
         damage: 0,
         critChance: 1,
      },

      arms:{
         name: null,
         armor: 0, 
      },
   },
   capabilities: {
      classAbilities: null,
      magicAbilitie: null,
   },
}

const HERO_BAG = {
   weapon:{},
   arms:{},
}




class Weapon{
   constructor(name, damage, critChance, needLevel){
      this.name = name;
      this.damage = damage;
      this.critChance = critChance;
      this.needLevel = needLevel; 
   }
}

class Arms{
   constructor(name){
      this.name = name;
      this.armor = damage;
      this.needLevel = needLevel; 
   }
}


function isLevel(hero){
   let haveExp = hero.experience.have;
   let needExp = hero.experience.need;

   if(haveExp === needExp ){
      return true
   }
   if(haveExp > needExp ){
      return true
   }
   if(haveExp < needExp ){
      return false
   }
}

function levelUp(hero){
   hero.experience.need += 30;
   hero.experience.have = 0;

}

function basicCharacterSettings(hero){
   if(hero.race === 'human' && hero.class === 'warrior'){
      hero.armor = 5;
      hero.strength = 12;
      hero.agility = 7;
      hero.luck = 0.2;
      hero.intelligence = 3; 
   }
}

function basicCharacterWeapons(hero){
   if(hero.race === 'human' && hero.class === 'warrior'){
      // hero.weappon;
   }
}
class Person{
	constructor(name, type, level, strong){
		this.health = 100
		this.name = name
		this.type = type
		this.level = level
		this.strong = strong 
	}
	healthChange(value){
	this.health -= value
}	
}

function fight(a, b){
	if((a.level > b.level) && (a.strong > b.strong)){
		b.health -= b.health;
		console.log(`${b.name} is diead`) 
		console.log(1)
}
	if((b.level > a.level) && (b.strong > a.strong)){
		a.health -= a.health;
		console.log(`${a.name} is diead`) 
		console.log(2)
   }

	if((b.level > a.level) && (b.strong < a.strong)){
		a.health -= b.strong - (b.level / 2)
		b.health -= a.strong
      console.log(3)
		console.log(b.name, b.health)
		console.log(a.name, a.health)
}

}
	
// export const wizzard = new ConfigForClasses('Маг', 10, 18, 7, 6, 3);



// const CONFIG_FOR_CLASSES = {
//    wizard:{},
//    warrior:{},
//    archer:{},
//    knight:{},
//    hunter:{},
   
// }
// console.log({...wizzard})

function actions(action){
   let arrayOfActions;
   let result;
   if(typeof action === 'object' && action instanceof Array){
      arrayOfActions = [...action]
   }

   if(typeof action !== 'object' && !(action instanceof Array)){
      arrayOfActions = action;
   }
   return result;
}


const objectOfActions = {
   a: {
      name: 'go to forest and meet with woolf',
      result: {
         level: 1,
         health: 25,
         strong: 3
      }
   },
   b:{
      name: 'meet with wizard',
      result: {
         level: 3,
         health: 5,
         strong: 8
      }
   },

}
