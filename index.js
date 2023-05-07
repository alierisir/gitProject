function getMath(arr) {
const max = arr[0] > arr[1] ? arr[0] : arr[1]
const min = arr[0] >= arr[1] ? arr[1] : arr[0]
const mod = max % min
const isEqual = max === min
const sum = max+min
const sub = max-min
const pro = max*min
const div = max/min
const exp = max**min
const obj = {
    max,
    min,
    mod,
    isEqual,
    sum,
    sub,
    pro,
    div,
    exp,
}
return obj
}

function generateRandomPairsArray(numPairs) {
    const pairsArray = [];
  
    for (let i = 0; i < numPairs; i++) {
      pairsArray.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
    }
  
    return pairsArray;
  }
  
let pairs = generateRandomPairsArray(1000);

function cascade (arr) {
    let objs =[]
    for (item of arr) {
        objs.push(getMath(item))
    }
    return objs
    .filter(elem=>elem["min"]!==0)
    .filter(elem=>elem["sum"]<80)  
}

myArray = cascade(pairs)
/*
function changeValue(obj){
  let newObject = obj
  newObject["sum"]="alierisir"
  return newObject
}

let myObject =changeValue(myArray[0])

console.log(myObject)
*/

function validateMail(mail){
  const mailText= "@gmail.com"
  const isNotMail = !mail.includes(mailText)
  const isTooShort = mail.length < mailText.length+1
  if (isNotMail || isTooShort) {
    throw new Error ("Mail address is invalid")
  }
}

function saveMail(mail) {
  alert("Mail address is saved")
}

function main(){
  const mail = prompt("Please enter your e-mail adress: ")
  try {
    validateMail(mail)
    saveMail(mail)
  } catch(error){
    alert("Error occured:" + error)
  } 
}

class Column {
  constructor(guid){
  this.guid=guid
  this.height=undefined
  this.length=undefined
  this.width=undefined
}
  describe(string){
    console.log(string,":", this[string])
  }
}

const column001 = new Column("C001")

column001.height=3
column001.width=0.5
column001.length=0.5

class Plant {
  constructor(name){
    this.name=name
    this.scent;
    this.tast;
  }
  smell(){
    const message=`You smelled the ${this.name} and it smelled ${this.scent}`
    console.log(message)
  }
  taste(){
    const message=`You tasted the ${this.name} and it tasted ${this.tast}`
    console.log(message)
  }
}`and it tasted ${this.tast}`

class Fruit extends Plant{
  constructor(name) {
  super(name);
  this.scent="nice";
  this.tast="sweet";
  }
}

class Vegetable extends Plant{
  constructor(name) {
  super(name);
  this.scent="good";
  this.tast="salty";
  }
}
const myFruit = new Fruit("elma")
const myVeggie= new Vegetable("salatalık")


const titles = document.getElementsByTagName("img")

const titleArray=Array.from(titles)

console.log(titleArray)