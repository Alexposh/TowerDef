
import { useRef, useEffect } from 'react';


const CanvasBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

      const enemy = {
        startPosition :{
          x : 50,
          y :315
        },
        health: 100,
        speed: 60,
        image: '/enemy1.png',
        armor: 80
      }
    const drawEnemy = (context: CanvasRenderingContext2D | null | undefined, enemy: { startPosition: { x: number; y: number; }; health: number; speed: number; image: string; armor: number; }) =>{
      if(context){    
        let count:number = 0;
        let animationId:number = 0;  
        const attributes = {
          health: enemy.health,
          speed: enemy.speed,
          armor: enemy.armor
        }      
        const renderer = () => {          
          const newPosition ={
            x: enemy.startPosition.x + count,
            y: enemy.startPosition.y
          } 
        const enemyImage = new Image();
        enemyImage.src = enemy.image;
        count += 0.5;        
        context.drawImage(enemyImage, newPosition.x, newPosition.y, 60, 60)
        for(let i = 0; i < Object.keys(attributes).length; i++){
          context.fillRect(newPosition.x, newPosition.y - 20, attributes.health, 10)
          context.fillStyle = 'red';

          context.fillRect(newPosition.x, newPosition.y - 30, attributes.armor, 10)
          context.fillStyle = 'blue';

          context.fillRect(newPosition.x, newPosition.y - 10, attributes.speed, 10)
          context.fillStyle = 'yellow';
        }
        
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
      drawEnemy(context, enemy, map);
    }
  }


    useEffect(() => {
      const canvas = canvasRef.current;
      if(canvas){
        const ctx = canvas.getContext('2d');
        // ctx?.clearRect(0, 0, canvas.width, canvas.height);
        const map = new Image();
        map.src = '/concept1.png'; 
        drawBackground(ctx, map);
        drawEnemy(ctx, enemy);
        // ctx?.clearRect(0, 0, canvas.width, canvas.height);
      };
    });
  
    return <>
    <canvas ref={canvasRef} width={1600} height={700} />
    
    </>
    

  };

export default CanvasBackground;