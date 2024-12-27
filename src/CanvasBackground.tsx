
import { useRef, useEffect } from 'react';

const CanvasBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

      const enemy = {
        startPosition :{x : 50, y : 315},
        health: 100,
        speed: 60,
        image: '/enemy1.png',
        armor: 80
      }
    const drawEnemy = (context: CanvasRenderingContext2D | null | undefined, enemy: { startPosition: { x: number; y: number; }; health: number; speed: number; image: string; armor: number; },map: HTMLImageElement) =>{
      if(context){    
        let count:number = 0;
        const damage = 1; // change this to let when you add the functionalities of increasing or decreasing damage.
        let animationId:number = 0;  
        const initialAttributes = {
          health: enemy.health,
          speed: enemy.speed,
          armor: enemy.armor
        }      

        

    const renderer = () => {    
        // context.clearRect(0, 0, 1600, 700); 
        drawBackground(context, map);
          const activePosition ={
            x: enemy.startPosition.x + count,
            y: enemy.startPosition.y
          } 

        
          const activeAttributes = {
            health: initialAttributes.health - damage,
            speed: initialAttributes.speed,
            armor: initialAttributes.armor
          }
        const enemyImage = new Image();
        enemyImage.src = enemy.image;
        count += 0.5;   
        if (activeAttributes.health > 0) {
          activeAttributes.health -= damage
        }
        // activeAttributes.health -= damage
        context.drawImage(enemyImage, activePosition.x, activePosition.y, 60, 60)
        for(let i = 0; i < Object.keys(initialAttributes).length + 1; i++){
          context.fillRect(activePosition.x, activePosition.y - 15, activeAttributes.health, 5)
          context.fillStyle = 'red';

          context.fillRect(activePosition.x, activePosition.y - 20, initialAttributes.armor, 5)
          context.fillStyle = 'blue';

          context.fillRect(activePosition.x, activePosition.y - 10, initialAttributes.speed, 5)
          context.fillStyle = 'white';
          context.fillRect(activePosition.x - 10, activePosition.y - 25 , 2, 75)
          context.fillStyle = 'green';
        }
        
      //  context.clearRect(0, 0, 1600, 700); 
        animationId = window.requestAnimationFrame(renderer);
   }
    renderer()
          
    return () => {
    window.cancelAnimationFrame(animationId);
   }
}
  }
  const drawBackground = (context: CanvasRenderingContext2D | null | undefined, map: HTMLImageElement) => {
    if(context){  
         
      map.onload = () => {
      context.drawImage(map, 0, 0, 1600, 700)
       }
      }
  }


    useEffect(() => {
      const canvas = canvasRef.current;
      if(canvas){
        const ctx = canvas.getContext('2d');
        // ctx?.clearRect(0, 0, canvas.width, canvas.height);
        const map = new Image();
        map.src = '/concept1.png'; 
        drawEnemy(ctx, enemy, map);
        // ctx?.clearRect(0, 0, canvas.width, canvas.height);
      };
    });
    
  
    return <>
    <canvas ref={canvasRef} width={1600} height={700} />
    
    </>
    

  };

export default CanvasBackground;