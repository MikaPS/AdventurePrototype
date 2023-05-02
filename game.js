// LAB
class Lab extends AdventureScene {
    constructor() {
        super("lab", "A lab");
    }

    preload() {
        this.load.path = './assets/lab/';
        this.load.image('cabinet', 'cabinet.png');
        this.load.image('bookcase', 'bookcase.png');
        this.load.image('safe', 'safe.png');
        this.load.image('table', 'table.png');
        this.load.image('purpleholder', 'purpleholder.png');
        this.load.image('blueholder', 'blueholder.png');
        this.load.image('potion1', 'potion1.png');
        this.load.image('potion2', 'potion2.png');
        this.load.image('goldenkey', 'goldenkey.png');
        this.load.image('rustykey', 'rustykey.png');
        this.load.image('greenkey', 'greenkey.png');
    }

    onEnter() {
        let back = this.add.text(this.w*0.943, this.h*0.9, "Back")
        .setFontSize(40)
        .setInteractive()
        .on('pointerdown', () => {
            this.showMessage("Going to MachineRoom.");
            this.gotoScene("machineroom");
        });

        let cabinet = this.add.image(this.w*0.39, this.h*0.87, 'cabinet',)
            .setScale(2)
            .setInteractive()
            .on('pointerdown', () => {
                this.noTouching(cabinet);
            });
        
        let bookcase = this.add.image(this.w*0.63, this.h*0.73, 'bookcase',)
            .setScale(0.9)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Intersting research, I wish I had time to explore that."))
            .on('pointerdown', () => {
                this.noTouching(bookcase);
            });

        let purpleholder = this.add.image(this.w*0.16, this.h*0.3, 'purpleholder',)
            .setScale(1.2)

        let blueholder = this.add.image(this.w*0.4, this.h*0.415, 'blueholder',)
            .setScale(1.2)

        let potion2 = this.add.image(this.w*0.34, this.h*0.7, 'potion2',)
            .setScale(0.8)
            .setInteractive()
            .on('pointerover', () => this.showMessage("They sure are making something important here."))
            .on('pointerdown', () => { this.noTouching(potion2); });
        
        let table = this.add.image(this.w*0.13, this.h*0.82, 'table',)
            .setScale(1.7)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Be careful! This can have long lasting effects on your body."))
            .on('pointerdown', () => {
                if (!this.hasItem("Radioactive material")) {
                    this.gotoScene('startup');
                    this.itemAnimation(potion1);
                }
            });

        let potion1 = this.add.image(this.w*0.13, this.h*0.7, 'potion1',)
            .setScale(0.7)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Be careful! This can have long lasting effects on your body."))
            .on('pointerdown', () => {
                if (!this.hasItem("Radioactive material")) {
                    this.gotoScene('startup');
                    this.itemAnimation(potion1);
                } else {
                    this.noTouching(potion1);
                }
            });

        let goldenkey = this.add.image(this.w*0.45, this.h*0.71, 'goldenkey',)
            .setScale(0.5)
            .setAngle(90)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A golden key! Maybe it’s lucky."))
            .on('pointerdown', () => {
                this.showMessage("It's just a regular key.");
                this.gainItem('Golden key');
                this.itemAnimation(goldenkey);
            });

        let rustykey = this.add.image(this.w*0.17, this.h*0.2, 'rustykey',)
            .setScale(0.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A rusty key. I wonder how long it waited here."))
            .on('pointerdown', () => {
                this.showMessage("The key is falling apart in your hands.");
                this.gainItem('Rusty key');
                this.itemAnimation(rustykey);
            });
        
        let greenkey = this.add.image(this.w*0.65, this.h*0.52, 'greenkey',)
            .setScale(0.5)
            .setAngle(270)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A weird key. Something about this one feels wrong."))
            .on('pointerdown', () => {
                this.showMessage("Yikes, it's slimy.");
                this.gainItem('Green key');
                this.itemAnimation(greenkey);
            });

        let safe = this.add.image(this.w*0.4, this.h*0.25, 'safe',)
            .setScale(1.2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Make sure you get the right key..."))
            .on('pointerdown', () => {
                if (this.hasItem("Green key") && this.hasItem("Rusty key") && this.hasItem("Golden key")) {
                    this.loseItem("Green key");
                    this.loseItem("Rusty key");
                    this.loseItem("Golden key");
                    this.showMessage("Good job!");
                    this.gainItem("Secret safe item");
                } else {
                    this.showMessage("Not enough keys...");
                }
            });
    }
}

class Startup extends AdventureScene {
    constructor() {
        super("startup", "Starting maze");
    }

    onEnter() {
        this.addDescription("Click the green box to move to the maze. After seeing the maze, click it again to start. Good luck!");
        this.add.rectangle(this.w*0.036, this.h *0.95, this.h*0.13, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerover", () => this.showMessage("Are you ready?"))
            .on("pointerdown", () => { this.gotoScene('maze') });

        this.add.rectangle(this.w*0.1, this.h *0.25, this.w*0.4, this.h*0.1, 0x000000)
          
        this.add.rectangle(this.w*0.3, this.h *0.15, this.h*0.1, this.h*0.3, 0x000000)
            
        this.add.rectangle(this.w*0.45, this.h *0.05, this.h*0.45, this.h*0.1, 0x000000)
            
        this.add.rectangle(this.w*0.6, this.h *0.3, this.h*0.1, this.h*0.6, 0x000000)
           
        this.add.rectangle(this.w*0.66, this.h *0.6, this.h*0.316, this.h*0.1, 0x000000)
            
        this.add.rectangle(this.w*0.1, this.h *0.7, this.h*0.1, this.h*0.6, 0x000000)
            
        this.add.rectangle(this.w*0.23, this.h *0.45, this.h*0.56, this.h*0.1, 0x000000)
            
        this.add.rectangle(this.w*0.4, this.h *0.375, this.h*0.1, this.h*0.25, 0x000000)
            
        this.add.rectangle(this.w*0.462, this.h *0.3, this.h*0.12, this.h*0.1, 0x000000)
            
        this.add.rectangle(this.w*0.5, this.h *0.5, this.h*0.1, this.h*0.5, 0x000000)
            
        this.add.rectangle(this.w*0.613, this.h *0.8, this.h*0.5, this.h*0.1, 0x000000)
            
        this.add.rectangle(this.w*0.23, this.h *0.82, this.h*0.1, this.h*0.36, 0x000000)
            
        this.add.rectangle(this.w*0.342, this.h *0.69, this.h*0.3, this.h*0.1, 0x000000)
            
        this.add.rectangle(this.w*0.4, this.h *0.82, this.h*0.1, this.h*0.36, 0x000000)
    }
}

class Maze extends AdventureScene {
    constructor() {
        super("maze", "A secret maze");
        this.countStart = 0;
        this.countEnd = 0;
    }

    onEnter() {
        this.cameras.main.setBackgroundColor('#6666ff');

        this.addDescription("Click both of the green square to complete the maze. But, make sure to not touch the edges.");

        this.add.rectangle(this.w*0.1, this.h *0.25, this.w*0.4, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.3, this.h *0.15, this.h*0.1, this.h*0.3, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.45, this.h *0.05, this.h*0.45, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.6, this.h *0.3, this.h*0.1, this.h*0.6, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.66, this.h *0.6, this.h*0.316, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.1, this.h *0.7, this.h*0.1, this.h*0.6, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.23, this.h *0.45, this.h*0.56, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.4, this.h *0.375, this.h*0.1, this.h*0.25, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.462, this.h *0.3, this.h*0.12, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });
        
        this.add.rectangle(this.w*0.5, this.h *0.5, this.h*0.1, this.h*0.5, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });
        
        this.add.rectangle(this.w*0.613, this.h *0.8, this.h*0.5, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.23, this.h *0.82, this.h*0.1, this.h*0.36, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.342, this.h *0.69, this.h*0.3, this.h*0.1, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        this.add.rectangle(this.w*0.4, this.h *0.82, this.h*0.1, this.h*0.36, 0x000000)
            .setInteractive()
            .on("pointerover", () => { this.showMessage("You touched an edge. Starting over"); this.startOver(); });

        // Start and end point
        // Instead of just count, need one count for end and one for beg to stop cheaters
        // Also, when they fail only allow them to click the start over button
        this.add.rectangle(this.w*0.036, this.h *0.95, this.h*0.13, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerdown", () => { this.countStart += 1; });
        
        this.add.rectangle(this.w*0.72, this.h *0.7, this.h*0.1, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerdown", () => { this.countEnd += 1; });  
    }

    update() {
        if (this.countStart >= 1 && this.countEnd >= 1) {
            this.gainItem('Radioactive material');
            this.gotoScene('lab');
        }
    }
}

// PORTAL / MAIN HUB
class MachineRoom extends AdventureScene {
    constructor() {
        super("machineroom", "A machine");
    }

    preload() {
        this.load.image('grave', './assets/graveyard/grave.png');
        this.load.image('lamp', './assets/house/lamp.png');
        this.load.image('potion', './assets/lab/potion1.png');
        this.load.image('robot', './assets/robot.png');

    }

    onEnter() {
        this.addDescription("Visit the following places and get the items listed when hovering over them.");
        // Progress bar for machine
        let complete = this.add.rectangle(this.w*0.375, this.h*0.07, this.w*0.7, this.h*0.07, 0x80B192)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Shows how close you are to finishing the machine!"))

        let robot = this.add.image(this.w*0.37, this.h*0.32, 'robot',)
            .setScale(1.3)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The machine is missing a few pieces.."))
            .on('pointerdown', () => {
                this.noTouching(robot);
            });

        let house = this.add.image(this.w*0.1, this.h*0.8, 'lamp',)
            .setScale(2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("An *empty bottle* represents something that is gone. A *Fan* since ghosts float around."))
            .on('pointerdown', () => {
                this.showMessage("Going to House.");
                this.gotoScene("house");
            });

        let lab = this.add.image(this.w*0.34, this.h*0.79, 'potion',)
            .setScale(1.8)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Unidentifiable item locked in a *safe* has to be important. *Radioactive material* to power the machine."))
            .on('pointerdown', () => {
                this.showMessage("Going to Lab.");
                this.gotoScene("lab");
            });

        let graveyard = this.add.image(this.w*0.62, this.h*0.78, 'grave',)
            .setScale(1.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("*Bones* to get the physical aspect of the ghosts. *Old flower* to show that others care about the ghosts."))
            .on('pointerdown', () => {
                this.showMessage("Going to Graveyard.");
                this.gotoScene("graveyard");
            });

    }

    update() {
        let progress = this.add.rectangle(this.w*0.375, this.h*0.07, this.w*(this.inventory.length/10), this.h*0.07, 0xA1E887);
        if (this.hasItem("Secret safe item") && this.inventory.length == 7) {
            this.gotoScene("goodoutro");
        }

    }
}

// GRAVEYARD
class Graveyard extends AdventureScene {
    constructor() {
        super("graveyard", "A graveyard");
    }

    preload() {
        this.load.path = './assets/graveyard/';
        this.load.image('bone', 'bone.png');
        this.load.image('grave', 'grave.png');
        this.load.image('trees', 'trees.png');
        this.load.image('trees2', 'trees2.png');
        this.load.image('flower', 'flower.png');
    }

    onEnter() {
        let back = this.add.text(this.w*0.943, this.h*0.9, "Back")
            .setFontSize(40)
            .setInteractive()
            .on('pointerdown', () => {
                this.showMessage("Going to MachineRoom.");
                this.gotoScene("machineroom");
            });

        let bone = this.add.image(this.w*0.08, this.h*0.91, 'bone',)
            .setDepth(2)
            .setAlpha(0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Umm, why is it laying down?"))
            .on('pointerdown', () => {
                if (bone.alpha == 1) {
                this.showMessage("You are basically a pro grave robber.");
                this.gainItem('Bone1');
                this.itemAnimation(bone);
                }
            });
        let bone2 = this.add.image(this.w*0.48, this.h*0.91, 'bone',)
            .setDepth(2)
            .setAlpha(0)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Umm, why is it laying down?"))
            .on('pointerdown', () => {
                if (bone2.alpha == 1) {
                this.showMessage("You are basically a pro grave robber.");
                this.gainItem('Bone2');
                this.itemAnimation(bone2);
                }
            });
        let count1 = 0;
        let grave1 = this.add.image(this.w*0.07, this.h*0.67, 'grave',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Need to dig around to get the bones."))
            .on('pointerdown', () => {
                count1 += 1;
                this.showMessage("Maybe some more clicks.");
                if (count1 == 4) {
                    bone.setAlpha(1);
                }
                
            });

        let grave2 = this.add.image(this.w*0.27, this.h*0.67, 'grave',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The ghosts that you see are the ones who died as warriors."))
            .on('pointerdown', () => {
                this.noTouching(grave2);
            });

        
        let count2 = 0;
        let grave3 = this.add.image(this.w*0.47, this.h*0.67, 'grave',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Need to dig around to get the bones."))
            .on('pointerdown', () => {
                count2 += 1;
                this.showMessage("Maybe some more clicks.");
                if (count2 == 7) {
                    bone2.setAlpha(1);
                }
            });

        let grave4 = this.add.image(this.w*0.67, this.h*0.67, 'grave',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("The ghosts might resent you. Be careful."))
            .on('pointerdown', () => {
                this.noTouching(bottles);
            });

        let flower = this.add.image(this.w*0.57, this.h*0.86, 'flower',)
            .setScale(0.5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Someone left it there for them."))
            .on('pointerdown', () => {
                this.showMessage("You got the flower.");
                this.gainItem('Flower');
                this.itemAnimation(flower);
            });

        let trees = this.add.image(this.w*0.22, this.h*0.24, 'trees',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Just some trees"))
            .on('pointerdown', () => {
                this.noTouching(bottles);
            });

        let trees2 = this.add.image(this.w*0.6, this.h*0.25, 'trees2',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("How can they sleep with the lamp on?"))
            .on('pointerdown', () => {
                this.noTouching(lamp);
            });
    }
}

// HOUSE
class House extends AdventureScene {
    constructor() {
        super("house", "A house");
    }

    preload() {
        this.load.path = './assets/house/';
        this.load.image('bottledown', 'bottledown.png');
        this.load.image('bottles', 'bottles.png');
        this.load.image('fan', 'fan.png');
        this.load.image('lamp', 'lamp.png');
        this.load.image('tv', 'tv.png');
        this.load.image('couch', 'couch.png');
    }

    onEnter() {
        let back = this.add.text(this.w*0.943, this.h*0.9, "Back")
            .setFontSize(40)
            .setInteractive()
            .on('pointerdown', () => {
                this.showMessage("Going to MachineRoom.");
                this.gotoScene("machineroom");
            });

        let bottledown = this.add.image(this.w*0.31, this.h*0.91, 'bottledown',)
            .setDepth(2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Umm, why is it laying down?"))
            .on('pointerdown', () => {
                this.showMessage("Nice! They keep their empty perfume bottles.");
                this.gainItem('Perfume Bottle');
                this.itemAnimation(bottledown);
            });
        
        let bottles = this.add.image(this.w*0.15, this.h*0.87, 'bottles',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Gotta take care of yourself."))
            .on('pointerdown', () => {
                this.noTouching(bottles);
            });

        let fan = this.add.image(this.w*0.16, this.h*0.29, 'fan',)
            .setScale(1.2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("It’s so hot, you can’t sleep without air conditioning"))
            .on('pointerdown', () => {
                this.showMessage("You got the fan.");
                this.gainItem('Fan');
                this.itemAnimation(fan);
            });

        let lamp = this.add.image(this.w*0.66, this.h*0.3, 'lamp',)
            .setScale(1.45)
            .setInteractive()
            .on('pointerover', () => this.showMessage("How can they sleep with the lamp on?"))
            .on('pointerdown', () => {
                this.noTouching(lamp);
            });

        let tv = this.add.image(this.w*0.58, this.h*0.8, 'tv',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("They are watching a good room com."))
            .on('pointerdown', () => {
                this.noTouching(tv);
            });
        
        let couch = this.add.image(this.w*0.41, this.h*0.26, 'couch',)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Be quick! They shouldn’t wake up."))
            .on('pointerdown', () => {
                this.noTouching(couch);
            });
    }
}

// INTRO + OUTRO
class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
        this.count = 0;
    }
    preload() {
        this.load.path = './assets/intro/';
        this.load.image('street', 'streetbg.png');
        this.load.image('ghost', 'ghost.png');
    }
    
    create() {
        // Walking down the street animation
        let street = this.add.image(-958, 230, 'street')
            .setScale(2.07);
        let street1 = this.add.image(-958, 230, 'street')
            .setScale(2.07);

        this.tweens.add({
                targets: street,
                x: 2900,
                duration: 10200,
                ease: "Linear",
                repeat: -1,
            });

        this.tweens.add({
                targets: street1,
                x: 2900,
                duration: 10200,
                delay: 5095,
                ease: "Linear",
                repeat: -1,
            });

        let ghost1 = this.add.image(1350, 930, "ghost");
        let ghost2 = this.add.image(1750, 930, "ghost");

        this.text1 = this.add.text(50,600, "I don’t understand why\npeople don’t believe me\nwhen I say I talk to ghosts!")
            .setFontSize(50);

        this.text2 = this.add.text(1450,600, "Yeah, it is\nhonestly\noffensive")
            .setFontSize(50);

        this.textObject = this.add.text(
            205, //x
            930,//y
            "Click to Continue", //text
            {
                color: "#ffffff",
                fontSize: 38,
            } //style
        );
        this.textObject.setDepth(2);

        this.add.rectangle(400, 950, 400, 100, 0x5A3A96)
            .setInteractive()
            .on("pointerdown", () => {
                this.count += 1;
                if (this.count == 1) {
                    
                    this.text3 = this.add.text(50,600, "You are real, right?\nIf I can talk to you,\nyou have to exist")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.text4 = this.add.text(1000,600, "Of course we are!\nWe are friends")
                        .setFontSize(50)
                        .setAlpha(0);
                    
                    this.switchText(this.text1, this.text2, this.text3, this.text4);
                }
                if (this.count == 2) {
                    this.text1 = this.add.text(50,600, "I will show them all!\nWith my machine, I will\nmake the whole world\nsee you.")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.text2 = this.add.text(1300,600, "It just sucks that\nyou are missing\na few items")
                        .setFontSize(50)
                        .setAlpha(0);
                    
                    this.switchText(this.text3, this.text4, this.text1, this.text2);
                }
                if (this.count == 3) {
                    this.text3 = this.add.text(50,600, "I only need to visit\nthe house, lab,\nand the graveyard.\nWhere should I begin?")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.text4 = this.add.text(950,600, "I like the\nowner of the\nhouse!")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.text = this.add.text(1400,600, "The lab creeps\nme out!")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.tweens.add({
                            targets: [this.text],
                            alpha: 1,
                            duration: 1500,
                            delay: 1500,
                            ease: "Linear",
                    });
                    this.switchText(this.text1, this.text2, this.text3, this.text4);
                }
                if (this.count >= 4) {
                    this.scene.start('machineroom');
                }

            });

    }

    switchText(text1, text2, text3, text4) {
        this.tweens.add({
                targets: [text1, text2],
                alpha: 0,
                duration: 1500,
                ease: "Linear",
                onComplete: () => {
                    text1.destroy();
                    text2.destroy();
                }
        });

        this.tweens.add({
                targets: [text3, text4],
                alpha: 1,
                duration: 1500,
                delay: 1500,
                ease: "Linear",
        });
    }

}

class GoodOutro extends Phaser.Scene {
    constructor() {
        super('goodoutro');
        this.count = 0;
    }
    preload() {
        this.load.path = './assets/intro/';
        this.load.image('street', 'streetbg.png');
        this.load.image('ghost', 'ghost.png');
    }
    
    create() {
        // Walking down the street animation
        let street = this.add.image(2900, 230, 'street')
            .setScale(2.07);
        let street1 = this.add.image(2900, 230, 'street')
            .setScale(2.07);

        this.tweens.add({
                targets: street,
                x: -958,
                duration: 10200,
                ease: "Linear",
                repeat: -1,
            });

        this.tweens.add({
                targets: street1,
                x: -958,
                duration: 10200,
                delay: 5095,
                ease: "Linear",
                repeat: -1,
            });

        let ghost1 = this.add.image(1350, 910, "ghost");
        let ghost2 = this.add.image(1750, 910, "ghost");

        this.text1 = this.add.text(50,600, "I finally did it!\nAll of the hard work\nwasn’t in vain.")
            .setFontSize(50);

        this.text2 = this.add.text(1100,600, "I am proud\nof you")
            .setFontSize(50);

        this.textObject = this.add.text(
            205, //x
            930,//y
            "Click to Continue", //text
            {
                color: "#ffffff",
                fontSize: 38,
            } //style
        );
        this.textObject.setDepth(2);

        this.add.rectangle(400, 950, 400, 100, 0x5A3A96)
            .setInteractive()
            .on("pointerdown", () => {
                this.count += 1;
                if (this.count == 1) {
                    
                    this.text3 = this.add.text(50,600, "Today, they will finally\nsee me as one of them.\nMy parents already\napologized for doubting\nme.")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.text4 = this.add.text(1300,600, "Now that they can\nsee me, I will\nget back at them for\nnot believing you")
                        .setFontSize(50)
                        .setAlpha(0);
                    
                    this.switchText(this.text1, this.text2, this.text3, this.text4);
                }
                if (this.count == 2) {
                    this.text1 = this.add.text(50,600, "I am excited for\nwhat’s to come now\nthat ghosts and humans\ncan live together")
                        .setFontSize(50)
                        .setAlpha(0);
                    this.text2 = this.add.text(1000,600, "I am sure it\nwill be great")
                        .setFontSize(50)
                        .setAlpha(0);
                    
                    this.switchText(this.text3, this.text4, this.text1, this.text2);
                }
                if (this.count >= 3) {
                    this.cameras.main.fade(4000, 0, 0, 0);
                    this.time.delayedCall(4000, () => {
                        this.scene.start("intro");
                    });
                    
                }
            });

    }

    switchText(text1, text2, text3, text4) {
        this.tweens.add({
                targets: [text1, text2],
                alpha: 0,
                duration: 1500,
                ease: "Linear",
                onComplete: () => {
                    text1.destroy();
                    text2.destroy();
                }
        });

        this.tweens.add({
                targets: [text3, text4],
                alpha: 1,
                duration: 1500,
                delay: 1500,
                ease: "Linear",
        });
    }

    update() {

    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    // scene: [GoodOutro, Intro],
    scene: [Intro, MachineRoom, House, Lab, Startup, Maze, Graveyard, GoodOutro],
    title: "Adventure Game",
});

