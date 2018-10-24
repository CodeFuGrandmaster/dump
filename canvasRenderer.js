class canvasRenderer {
  constructor(w, h) {
    const canvas = document.createElement("canvas");
    this.w = canvas.width = w;
    this.h = canvas.height = h;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
  }
  
  render(container, clear = false) {
    const{ ctx } = this;
    function renderRec(container) {
      //darw everything
      container.children.forEach(child => {
        if(child.visible === false) {
          return;
        }
        
        ctx.save();
        
        if(child.pos) {
          ctx.translate(math.round(child.pos.x), math.round(child.pos.y));
        }
        
        if(child.text) {
          const{font, fill, align} = child.style;
          if(font){ctx.font = font;}
          if(fill){ctx.fill = fill;}
          if(align){ctx.align = align;}
          ctx.fillText(child.text, 0, 0);
        }
        
        if(child.children) {
          renderRec(child);
        }
        
        ctx.restore();
      });
    }
    
    if(clear) {
      ctx.clearRect(0, 0, this.w, this.h);
    }
    
    renderRec(container);
  }
}