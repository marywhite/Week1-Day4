 function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
}

Monster.prototype = {
	attack : function(){
		return this.strength * (Math.floor(Math.random() * 20) + 1);
	}
}

function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	this.playerClass = playerClass;
	Monster.apply(this, arguments);
}

Player.prototype.attack = function(){
	return this.dexterity * (Math.floor(Math.random() * 20) +1);
}

Player.prototype = new Monster;

var monsterMary = new Monster("Mary", 10, 5, 7, 4, 9, 4);
console.log(monsterMary.attack());
var playerCody = new Player("Cody", 15, 4, 9, 6, 3, 8, "goblin");
console.log(playerCody.attack(), playerCody.strength);
console.log(monsterMary);
console.log(playerCody);

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
	name.innerHTML = "<input type='button' value='" + object.name + "' style='width:100%'/><br/><br/>";
	strength.innerHTML = object.strength;
	dexterity.innerHTML = object.dexterity;
	constitution.innerHTML = object.constitution;
	wisdom.innerHTML = object.wisdom;
	intelligence.innerHTML = object.intelligence;
	charisma.innerHTML = object.charisma;
	playerClass.innerHTML = object.playerClass;

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