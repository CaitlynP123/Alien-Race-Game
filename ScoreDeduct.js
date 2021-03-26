class ScoreDeduct{
    constructor(){
        this.sprite = createSprite(Math.round(random(100,windowWidth-100)),0)
        this.sprite.scale = 0.5
        this.sprite.velocityY = 10
        this.sprite.addImage("deduct", powerDownImg3)
        scoreDeductGroup.add(this.sprite)
        scoreDeductGroup.setLifetimeEach(100)
  
    }
}