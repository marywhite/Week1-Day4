 function Monster(name, strength, dexterity, constitution, wisdom, intelligence, charisma){
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
};

function Player(name, strength, dexterity, constitution, wisdom, intelligence, charisma, playerClass){
	this.playerClass = playerClass;
	Monster.apply(this, arguments);
}

Player.prototype = new Monster;

var monsterMary = new Monster("Mary", 10, 5, 7, 4, 9, 4);

var playerCody = new Player("Cody", 15, 4, 9, 6, 3, 8, "goblin");

console.log(monsterMary);
console.log(playerCody);

var dungeonArray = [];

function hello(){
	console.log(document.getElementById('name').value);

}

function populateArray(){
	var newCreature;
	if(document.getElementById('playerClass').value){
			newCreature = new Player(document.getElementById('name').value, document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value, document.getElementById('playerClass').value); 
			
		} else {
			newCreature = new Monster(document.getElementById('name').value, document.getElementById('strength').value, document.getElementById('dexterity').value, document.getElementById('constitution').value, document.getElementById('wisdom').value, document.getElementById('intelligence').value, document.getElementById('charisma').value);
		}

		dungeonArray.push(newCreature);
}

document.getElementById('addMonster').addEventListener('click', populateArray);