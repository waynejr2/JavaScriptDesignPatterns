var Person = function(firstname, lastname ){
	this.firstname = firstname;
	this.lastname = lastname;	
}

//some constant
Person.PI = 3.14;

Person.prototype.hello = function(){
	console.log("My name is " + this.firstname + " " + this.lastname);
} 

Person.prototype.goodbye = function(farewell){
	console.log( farewell );
}

var Hero = function( firstName, lastName, powers ){
	Person.call(this, firstName, lastName);
	this.powers = powers;
};

extend(Hero, Person);

/**
 * @override
 */
Hero.prototype.goodbye = function( farewell ){	
	Person.prototype.goodbye.call(this, farewell );	
	console.log("adiós");
}

/**
 * Does the prototype-based inheritance
 * @param {Object} subConstructor the constructor function of the subclass
 * @param {Object} superConstructor the constructor function of the superclass
 */
function extend(child, parent){
	child.prototype = Object.create(parent.prototype, {
		constructor: {
			value: child,
			enumerable: false,
			writable: true,
			configurable: true
	     }
	});		
}

//-- EXAMPLE --
console.log( Person.PI );
var john = new Person("John", "Lennon");	
john.hello();
john.goodbye("good bye");

var linus = new Hero("Linus", "Torvalds");	
linus.hello();
linus.goodbye("good bye");	


