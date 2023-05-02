A simple adventure game by Mika Peer Shalem based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: House, Lab, Graveyard, MachineRoom.
- **2+ scenes *not* based on `AdventureScene`**: Intro, GoodIntro.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: addDescription(). Explained each of the scenes and the goal of players in that scene.
    - Enhancement 2: noTouching(). Added the given animation to show that an item is not interactive.

Experience requirements:
- **4+ locations in the game world**: House, Lab, Graveyard, MachineRoom.
- **2+ interactive objects in most scenes**: 
    - In the MachineRoom, you can click the three objects at the bottom of the page to move into their scene.
    - In the Lab, you can click on keys to collect them, click on the safe to open it, and click on the potion to move into a maze.
    - In the Graveyard, clicking on the tombstones will make items appear on the screen. Players can also collect a flower.
    - In the House, can click on a fan and a perfume bottle.
- **Many objects have `pointerover` messages**: 
    The following objects have messages:
    - In MachineRoom: progress bar, robot, the three objects at the bottom of the page.
    - In Lab: safe, keys, book shelves, table, cabinet.
    - In Graveyard: 4 tombstones, flowers, bones.
    - In House: couch, perfume bottles, lamp, fan, tv.
- **Many objects have `pointerdown` effects**: 
    - In the MachineRoom, you can click the three objects at the bottom of the page to move into their scene.
    - In the Lab, you can click on keys to collect them, click on the safe to open it, and click on the potion to move into a maze.
    - In the Graveyard, clicking on the tombstones will make items appear on the screen. Players can also collect a flower.
    - In the House, can click on a fan and a perfume bottle.
- **Some objects are themselves animated**: 
    In each scene, there are objects that aren't allow touching, and will shake when player click on them.
    - In Lab: bookshleves and cabinet.
    - In Graveyard: two of the graves.
    - In House: tv, standing bottles, couch, and lamp.

Asset sources:
- I drew all of the assets! Most of my objects are inspired by real life objects and emojis.
- I used the mobile app ibisPaint X for drawing and colors. I used the website remove.bg to remove the background. I used the website Coolors to get color palettes. 
- Machine/robot is inspired by these arts: https://www.istockphoto.com/vector/sad-robot-demolition-drawing-gm525527483-52919132, https://www.alamy.com/stock-photo-page-not-found-error-404-broken-robot-hand-drawn-vector-template-icon-133270223.html. 
- Keys inspired by: https://www.google.com/search?q=key+assets+drawing&tbm=isch&ved=2ahUKEwilyLSLoNL-AhW7C0QIHen0C0cQ2-cCegQIABAA&oq=key+assets+drawing&gs_lcp=CgNpbWcQAzoHCAAQigUQQzoGCAAQBxAeUKIGWMAVYL4XaABwAHgAgAFaiAGxBZIBATmYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=h7VOZOXoJ7uXkPIP6emvuAQ&bih=781&biw=1518&rlz=1C1CHBF_enUS1023US1023#imgrc=_qO-_-uoeTHTxM
- Lab book shelves/cabinets inspired by: https://www.google.com/search?q=color+a+cabinet+drawing&tbm=isch&ved=2ahUKEwjBj_aagdH-AhVyPEQIHcdoBUYQ2-cCegQIABAA&oq=color+a+cabinet+drawing&gs_lcp=CgNpbWcQAzoGCAAQCBAeUFdYrxNg7RRoAXAAeACAAUuIAaUFkgECMTCYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=7g5OZMHgOfL4kPIPx9GVsAQ&bih=781&biw=1518&rlz=1C1CHBF_enUS1023US1023#imgrc=eujTH1fiQze8IM

Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.