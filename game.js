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

class Lab extends AdventureScene {
    constructor() {
        super("lab", "A lab");
    }

    onEnter() {
        let orb = this.add.text(this.w * 0.3, this.w * 0.3, "⚗️ orb")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Be careful! This can have long lasting effects on your body."))
            .on('pointerdown', () => {
                this.gotoScene('maze');
            });
    }
}

class Maze extends AdventureScene {
    constructor() {
        super("maze", "A secret maze");
        this.count = 0;
    }

    onEnter() {
        let defaultText = this.add.text(this.w*0.001, this.w*0.005, "  ")
            .setFontSize(this.s * 70)
            .setInteractive()
            .on('pointerover', () => this.showMessage("hover over the path without touching the edges to get the item"))
        
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
        this.add.rectangle(this.w*0.036, this.h *0.95, this.h*0.13, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerdown", () => { this.count += 1; console.log(this.count); });
        
        this.add.rectangle(this.w*0.72, this.h *0.7, this.h*0.1, this.h*0.1, 0x00ff00)
            .setInteractive()
            .on("pointerdown", () => { this.count += 1; console.log(this.count); });  
        

        
    
    }

    update() {
        if (this.count >= 2) {
            console.log("here");
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
    scene: [Maze, Lab],
    title: "Adventure Game",
});

