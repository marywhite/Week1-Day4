 function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}

//(Math.floor(Math.random() * 20) + 1)

Monster.prototype = {
	attack : function(){
		return 'strong';
	}
}

Player.prototype = new Monster;


Player.prototype.attack = function(){
	return 'dexterous';
}

function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	this.playerClass = playerClass;
	Monster.apply(this, arguments);
}

var dungeonArray = [];

function displayCreature(object){
	var table = document.getElementById('statsTable');
	var row = table.insertRow(table.rows.length);
	var name = row.insertCell(0);
	var strength = row.insertCell(1);
	var dexterity = row.insertCell(2);
	var constitution = row.insertCell(3);
	var wisdom = row.insertCell(4);
	var intelligence = row.insertCell(5);
	var charisma = row.insertCell(6);
	var playerClass = row.insertCell(7);
	var button = makeButton(object);
	name.appendChild(button);  
    strength.innerHTML = object.strength;
	dexterity.innerHTML = object.dexterity;
	constitution.innerHTML = object.constitution;
	wisdom.innerHTML = object.wisdom;
	intelligence.innerHTML = object.intelligence;
	charisma.innerHTML = object.charisma;
	if (object.playerClass) {
	playerClass.innerHTML = object.playerClass;
	}
}



function makeButton(object) {
	var del = document.createElement('input');
	del.type = 'button';
	del.id = 'currentCreatures'
	del.value = object.name;
	del.onclick = function(){ console.log(object.attack(object.name));};
	return del;
}

function currentAttack(name){
	for(var i = 0; i < dungeonArray.length; i++){
		if(dungeonArray[i].name == name){
			return dungeonArray[i].attack();
		}
	}
}

function displayAttack(clickedId) {
	console.log(clickedId);
}


function populateArray(){
	var newCreature;
	if(document.getElementById('playerClass').value){
			newCreature = new Player(document.getElementById('name').value, document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value, document.getElementById('playerClass').value); 
			
		} else {
			newCreature = new Monster(document.getElementById('name').value, document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value);
		}
		dungeonArray.push(newCreature);
		displayCreature(newCreature);
}

document.getElementById('addMonster').addEventListener('click', populateArray);

