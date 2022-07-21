export function randomValue(max){

   return Math.round(Math.random() * max)
}

export const {log} = console;

export function cloneOfObject(obj){
   return JSON.parse(JSON.stringify(obj))
}