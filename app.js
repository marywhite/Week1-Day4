 function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
 	this.name = name;
 	this.strength = strength;
 	this.dexterity = dexterity;
 	this.constitution = constitution;
 	this.wisdom = wisdom;
 	this.intelligence = intelligence;
 	this.charisma = charisma;
 }

Monster.prototype = {attack : function(){return this.strength * (Math.floor(Math.random() * 20) + 1);}}

Player.prototype = new Monster;

Player.prototype.attack = function(){return this.dexterity * (Math.floor(Math.random() * 20) + 1);}

function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	this.playerClass = playerClass;
	Monster.apply(this, arguments);
}

var latestAttack = document.getElementById("lastAttacker");
var amazingAttack = document.getElementById("amazingAttack");

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

function clearForm() {
	document.getElementById('inputForm').reset();
}

function addEntry(){
	 if (checkForm()) {newEntry(); clearForm();} else { alert('please enter all required fields');}
}

function newEntry() {
	var newCreature;
	if(document.querySelector('input[name = "class"]:checked')){
		newCreature = new Player((document.getElementById('name').value).toUpperCase(), document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value, (document.querySelector('input[name = "class"]:checked').value).toUpperCase()); 
	} else {
		newCreature = new Monster(document.getElementById('name').value, document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value);
	}
	displayCreature(newCreature);
}

function checkForm() {
	return (document.getElementById('name').value && document.getElementById('strength').value && document.getElementById('dexterity').value && document.getElementById('constitution').value && document.getElementById('wisdom').value && document.getElementById('intelligence').value && document.getElementById('charisma')).value ? true : false;
}

document.getElementById('addMonster').addEventListener('click', addEntry);
