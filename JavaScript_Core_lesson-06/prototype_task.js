function Robot(name, action) {
	this.name = name;
	this.action = action;
}

Robot.prototype.work = function() {
	console.log("Я " + this.name + " – я " + this.action);
}

function CoffeRobot(name, action) {
	this.name = name;
	this.action = action;
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;

function RobotDancer(name, action) {
	this.name = name;
	this.action = action;
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

function RobotCooker(name, action) {
	this.name = name;
	this.action = action;
}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

let robot = new Robot("Robot", "просто працюю");
robot.work();

let coffeRobot = new CoffeRobot("CoffeRobot", "варю каву");
coffeRobot.work();

let robotDancer = new RobotDancer("RobotDancer", "просто танцюю");
robotDancer.work();

let robotCooker = new RobotCooker("RobotCoocker", "просто готую");
robotCooker.work();

console.log('---------------------------------------------------');

let robots = [ new Robot("Robot", "просто працюю"),
		new CoffeRobot("CoffeRobot", "варю каву"),
		new RobotDancer("RobotDancer", "просто танцюю"),
		new RobotCooker("RobotCoocker", "просто готую") ]

for (let i = 0; i < robots.length; i++) {
	robots[i].work();
}
