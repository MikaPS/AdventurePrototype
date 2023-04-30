class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    onEnter() {

        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

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

        let safe = this.add.image(this.w*0.4, this.h*0.25, 'safe',)
            .setScale(1.2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Make sure you get the right key..."))
            .on('pointerdown', () => {
                this.gotoScene('maze');
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
                if (!this.hasItem("Potion")) {
                    this.gotoScene('startup');
                    this.itemAnimation(potion1);
                }
            });

        let potion1 = this.add.image(this.w*0.13, this.h*0.7, 'potion1',)
            .setScale(0.7)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Be careful! This can have long lasting effects on your body."))
            .on('pointerdown', () => {
                if (!this.hasItem("Potion")) {
                    this.gotoScene('startup');
                    this.itemAnimation(potion1);
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
        
    }

}

class Maze extends AdventureScene {
    constructor() {
        super("maze", "A secret maze");
        this.count = 0;
    }

    onEnter() {
        this.addDescription("hover over the path without touching the edges to get the item.");

        this.add.rectangle(this.w*0.1, this.h *0.25, this.w*0.4, this.h*0.1, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.3, this.h *0.15, this.h*0.1, this.h*0.3, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.45, this.h *0.05, this.h*0.45, this.h*0.1, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.6, this.h *0.3, this.h*0.1, this.h*0.6, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.66, this.h *0.6, this.h*0.316, this.h*0.1, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.1, this.h *0.7, this.h*0.1, this.h*0.6, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.23, this.h *0.45, this.h*0.56, this.h*0.1, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.4, this.h *0.375, this.h*0.1, this.h*0.25, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        this.add.rectangle(this.w*0.462, this.h *0.3, this.h*0.12, this.h*0.1, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });
        
        this.add.rectangle(this.w*0.5, this.h *0.5, this.h*0.1, this.h*0.5, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });
        
        this.add.rectangle(this.w*0.613, this.h *0.8, this.h*0.5, this.h*0.1, 0x6666ff)
            .setInteractive()
            .on("pointerover", () => { this.startOver(); });

        // Start and end point
        // Instead of just count, need one count for end and one for beg to stop cheaters
        // Also, when they fail only allow them to click the start over button
        this.add.rectangle(this.w*0.036, this.h *0.95, this.h*0.13, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerdown", () => { this.count += 1; console.log(this.count); });
        
        this.add.rectangle(this.w*0.72, this.h *0.7, this.h*0.1, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerdown", () => { this.count += 1; console.log(this.count); });  
    }

    update() {
        if (this.count >= 2) {
            this.gainItem('Potion');
            this.gotoScene('lab');
        }
    }
}


class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('lab'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Lab, Startup, Maze],
    // scene: [Startup],
    title: "Adventure Game",
});

