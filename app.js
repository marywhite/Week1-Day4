 //constructor for Monster
 function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
 	this.name = name;
 	this.strength = strength;
 	this.dexterity = dexterity;
 	this.constitution = constitution;
 	this.wisdom = wisdom;
 	this.intelligence = intelligence;
 	this.charisma = charisma;
 }

//defining attack method for Monster
Monster.prototype = {attack : function(){return this.strength * (Math.floor(Math.random() * 20) + 1);}}

//setting Player as a prototype of Monster
Player.prototype = new Monster;

//overwriting attack function for Monster
Player.prototype.attack = function(){return this.dexterity * (Math.floor(Math.random() * 20) + 1);}

//Player constructor
function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	this.playerClass = playerClass;
	Monster.apply(this, arguments);
}

var latestAttack = document.getElementById("lastAttacker");
var amazingAttack = document.getElementById("amazingAttack");

//display creature attributes in the a new row on the table, call create button to insert new name button in the table
function displayCreature(object){
	var table = document.getElementById('statsTable');
	var row = table.insertRow(table.rows.length);
	row.insertCell(0).appendChild(makeButton(object));
	var requiredAttributes = [object.strength, object.dexterity, object.constitution, object.wisdom, object
	.intelligence, object.charisma];
	for (var i = 0; i < requiredAttributes.length; i++) {
		row.insertCell(i+1).innerHTML = requiredAttributes[i];
	} 
	if (object.playerClass){ 
		row.insertCell(7).innerHTML = object.playerClass;
	} else {
		row.insertCell(7).innerHTML = '';
	}
}

//create a new button with onclick function to call attack function and display it on the DOM
function makeButton(object) {
	var newButton = document.createElement('input');
	newButton.type = 'button';
	newButton.id = 'currentCreatures'
	newButton.value = object.name;
	newButton.onclick = function(){ 
		lastAttacker.innerHTML = object.name + ' just ATTACKED'; 
		amazingAttack.innerHTML = (object.playerClass ? 'Dexterity is now ' : 'Strength is now ') + object.attack(object.name);
	}; return newButton;
}

//clear out input fields
function clearForm() {
	document.getElementById('inputForm').reset();
}

//if all required fields are filled out, create monster/player and clear out text form.  Otherwise send user javascript alert.
function addEntry(){
	 if (checkForm()) {displayCreature(newEntry()); clearForm();} else { alert('please enter all required fields');}
}

//Pulls out user input and constructs new Player/Monster object
function newEntry() {
	var newCreature;
	if(document.querySelector('input[name = "class"]:checked')){
		newCreature = new Player((document.getElementById('name').value).toUpperCase(), document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value, (document.querySelector('input[name = "class"]:checked').value).toUpperCase()); 
	} else {
		newCreature = new Monster(document.getElementById('name').value, document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value);
	} return newCreature;
}

//validates that all required fields have been filled out
function checkForm() {
	return (document.getElementById('name').value && document.getElementById('strength').value && document.getElementById('dexterity').value && document.getElementById('constitution').value && document.getElementById('wisdom').value && document.getElementById('intelligence').value && document.getElementById('charisma')).value ? true : false;
}

document.getElementById('addMonster').addEventListener('click', addEntry);
