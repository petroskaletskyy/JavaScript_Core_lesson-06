function Robot(name, action) {
	this.name = name;
	this.action = action;

	this.work = function() {
		console.log("Я " + this.name + " – я " + this.action);
	}
}

function CoffeRobot(name, action) {
	Robot.call(this);

	this.name = name;
	this.action = action;
}

function RobotDancer(name, action) {
	Robot.call(this);

	this.name = name;
	this.action = action;
}

function RobotCooker(name, action) {
	Robot.call(this);

	this.name = name;
	this.action = action;
}

let robot = new Robot("Robot", "просто працюю");
robot.work();

let coffeRobot = new CoffeRobot("CoffeRobot", "варю каву");
coffeRobot.work();

let robotDancer = new RobotDancer("RobotDancer", "просто танцюю");
robotDancer.work();

let robotCooker = new RobotCooker("RobotCoocker", "просто готую");
robotCooker.work();

console.log('---------------------------------------------------');

let robots = [
		new Robot("Robot", "просто працюю"),
		new CoffeRobot("CoffeRobot", "варю каву"),
		new RobotDancer("RobotDancer", "просто танцюю"),
		new RobotCooker("RobotCoocker", "просто готую")
]

for (let i = 0; i < robots.length; i++) {
	robots[i].work();
}
