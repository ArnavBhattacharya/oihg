class Form 
{
    constructor()
    {
        this.name = createElement('h1');
        this.playerName = createInput("Name");
        this.button = createButton("Enter Game");
        this.greeting = createElement('h1');

        this.character1 = loadImage("runner.png");
        this.character2 = loadImage("runner2(flip).png");
        

    }
    hide(){
        this.playerName.hide();
        this.button.hide();
      }

    display(){
        image(this.character1, 30, 50, 331, 478);
        image(this.character2, 900, 50, 302, 521);

        this.name.html("Multiplayer Parkour Game");
        this.name.position(displayWidth/3 , 60);


        this.playerName.position(displayWidth/2.5 , 250);
        
        this.button.position(550 , 350);
        this.button.style('background', 'black');
        this.button.style('color', 'white');

        // this.reset.position(1200,20);

        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
        

        this.button.mousePressed(()=>{
            player = new Player();
            player.name = this.playerName.value(); 

            this.playerName.hide();
            this.button.hide();

            // player.getCount();
            playerCount += 1;
            player.index = playerCount;
            console.log(player.index);
        
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name)
            this.greeting.position(540,350);
          })


        // this.reset.mousePressed(()=>{
        //     this.reset.hide();

            // player.updateCount(0);
            // player.update(0);
        //    })        
    }
}