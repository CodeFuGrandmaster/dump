class player {
  constructor() {
    //Data to draw the player
    this.sprite = "";
    this.pos = {x: 0, y: 0};
    this.scale = 1;
    this.rotation = 0;
    
    //Data for player mechanics
    
    
  }

  setSprite(sprite) {
    this.sprite = sprite;
  }

  setScale(value) {
    this.scale = value;
  }

  setRotation(radians) {
    this.rotation = radians;
  }
  
  
  
  

}