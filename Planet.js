class Planet{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    spawnPlanet(){
        if(frameCount%2000==0){
            this.sprite = createSprite(Math.round(random(100,windowWidth-100)),0)
            this.sprite.scale = 0.6
            this.sprite.velocityY = 10
            planetGroup.add(this.sprite)
            planetGroup.setLifetimeEach(100)

            var r = Math.round(random(1,4))
            switch(r){
                case 1 : this.sprite.addImage("1", planet1img)
                         this.sprite.scale = 0.4
                break
                case 2 : this.sprite.addImage("2", planet2img)
                         this.sprite.scale = 0.3
                break
                case 3 : this.sprite.addImage("3", planet3img)
                         this.sprite.scale = 0.4
                break
                case 4 : this.sprite.addImage("4", planet4img)
                         this.sprite.scale = 0.48
                break
            }
        }
    }
}