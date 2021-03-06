"use strict";

//MY PLAN-----------------------------------------------------
//set eventlistener on button
//find value of the dropdown to know what to do to the string
//call the according function
//read input from textfield
//edit string
//print edited string in output
//------------------------------------------------------------

window.addEventListener("load", start);
let input = "";
let chosen = "";

function start() {
  console.log("start()");
  document.querySelector("button").addEventListener("click", checkdropdown);
}

function checkdropdown() {
  console.log("checkdropdown()");
  chosen = document.querySelector("select").value;
  readInput();
}

function readInput() {
  console.log("readInput()");
  input = document.querySelector("#input").value;
  findChosenFunction();
}

function findChosenFunction() {
  console.log("findChosenFunction()");
  console.log(chosen);
  if (chosen === "a") {
    optionA();
  } else if (chosen === "b") {
    optionB();
  } else if (chosen === "c") {
    optionC();
  } else if (chosen === "d") {
    optionD();
  } else if (chosen === "e") {
    optionE();
  } else if (chosen === "f") {
    optionF();
  } else if (chosen === "g") {
    optionG();
  } else if (chosen === "h") {
    optionH();
  }
}

function optionA() {
  console.log("optionA()");
  //If input is a first name: Make the first character in a name uppercase, and the rest lowercase

  //Removing spacing in front and after string
  let trimmedinput = input.trim();
  //finding firstletter
  let firstletter = trimmedinput[0];
  //finding first space - we will either get its index location or 0 if there is only 1 name
  let firstspace = trimmedinput.indexOf(" ") + 1;
  let restoffirstname = "";
  //seperating into cases with 1 word or more
  if (firstspace === 0) {
    console.log("only firstname");
    restoffirstname = trimmedinput.substring(1);
    let editedfirstletter = firstletter.toUpperCase();
    let editedrestoffirstname = restoffirstname.toLowerCase();
    let editedname = editedfirstletter + editedrestoffirstname;
    document.querySelector("#output").value = editedname;
    console.log(editedfirstletter + editedrestoffirstname);
  } else {
    console.log("more than firstname");
    let editedfirstletter = firstletter.toUpperCase();
    restoffirstname = trimmedinput.substring(1, firstspace);
    let editedrestoffirstname = restoffirstname.toLowerCase();
    let editedname = editedfirstletter + editedrestoffirstname;
    let restofstring = trimmedinput.substring(firstspace);
    document.querySelector("#output").value = editedname + restofstring;
  }
}
function optionB() {
  //If input is a full name: Find the first name
  let trimmedinput = input.trim();
  let firstspace = trimmedinput.indexOf(" ");
  let firstname = trimmedinput.substring(0, firstspace);
  document.querySelector("#output").value = firstname;
  console.log(`_${firstname}_`);
}
function optionC() {
  //If input is a full name: Find the length of the first name
  let trimmedinput = input.trim();
  let firstspace = trimmedinput.indexOf(" ");
  let firstname = trimmedinput.substring(0, firstspace);
  let lenght = firstname.length;
  document.querySelector("#output").value = lenght;
  console.log(lenght);
}
function optionD() {
  //If input is a full name: Find the middle name start and end position,
  //and the middle name itself in a full name string
  let trimmedinput = input.trim();
  let firstspace = trimmedinput.indexOf(" ") + 1;
  let secondspace = trimmedinput.lastIndexOf(" ");
  console.log(firstspace, secondspace);
  let middlename = trimmedinput.substring(firstspace, secondspace);
  document.querySelector("#output").value = `Middlename: ${middlename}. Position: ${firstspace},${secondspace}`;
}
function optionE() {
  //If input is a filename: Check if a filename is .png or .jpg
  if (input.endsWith(".jpg")) {
    document.querySelector("#output").value = "jpg file";
  } else if (input.endsWith(".png")) {
    document.querySelector("#output").value = "png file";
  } else {
    document.querySelector("#output").value = "neither jpg or png file";
  }
}
function optionF() {
  //If input is a password: Hide a password with the correct number of *s
  const inputlenght = input.length;
  const stars = input.slice(inputlenght).padStart(inputlenght, "*");
  document.querySelector("#output").value = stars;
}
function optionG() {
  //With any input: Make the third character uppercase
  const thirdcharacter = input.substring(2, 3);
  const beginning = input.substring(0, 2);
  const end = input.substring(3);
  const editthird = thirdcharacter.toUpperCase();
  document.querySelector("#output").value = beginning + editthird + end;
}
function optionH() {
  //With any input: Make a character uppercase, if it follows a space or a hyphen
  const word = input.split(/[- ]+/);
  let fullinput = "";
  word.forEach((element) => {
    let firstletter = element.substring(0, 1);
    let editfirst = firstletter.toUpperCase();
    let rest = element.substring(1);
    fullinput = fullinput + editfirst + rest + " ";
    // fullinput.concat(editfirst, rest, " ");
  });

  const trimmedfullinput = fullinput.trim();
  document.querySelector("#output").value = trimmedfullinput;
}
