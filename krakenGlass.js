
/* Container for all of the core game data.
 *
 *
 *
 */
data{
  worldState{}
  worldMaps{}
  player{}
  
  
  {}
}


/* The rendering system.
 *
 *
 *
 */
class spyglass {
  constructor() {
    
  }
  
  render(fullRender = false) {
    if(fullRender === true) {
        renderPage();
        renderUI();
        renderWorld();
        renderEntities();
    }
    
    else {
        renderUI();
        renderWorld();
        renderEntities();
    }
  }
  
  renderPage() {
    
  }
  
  renderUI() {
    
  }
  
  renderWorld() {
    
  }
  
  renderEntities() {
    
  }
  
}


/* The game's logical and mutational engine.
 *
 *
 *
 */
class kraken {
  
  
  
}


/* Data regarding the overall game state
 */
class gameData {
  
}

/* Data regarding the world and its states
 */

class worldData {
  
}

/* Data regarding entities and their states
 */
class entityData {
  
}

