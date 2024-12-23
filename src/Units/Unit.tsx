import { useEffect, useRef } from "react";

const Unit = ({color}: {color: string}) =>{
     
        const ref = useRef<HTMLCanvasElement>(null)        
    
     useEffect(() => {
        const canvas = ref.current
        // if (!canvas) return null    
        const context = canvas?.getContext('2d');
        if(context){
            context.fillStyle = color;
            // context.fillRect(10, 10, 20, 20);
                context.beginPath();
                const position = {
                    x: 50,
                    y: 50
                }
                // const x = position.x; // x coordinate
                // const y = position.y; // y coordinate
                const radius = 20; // Arc radius
                let count:number = 0;
                let animationId:number = 0;             
        
                context.arc(position.x, position.y, radius, 0, Math.PI *2, true);
                context.fill();
                

                const renderer = () => {
                    const newPosition ={
                        x: position.x + count,
                        y: position.y
                    } 
                    context.beginPath();
                    context.clearRect(newPosition.x - radius - 1, newPosition.y - radius - 1, radius * 2 + 2, radius * 2 + 2);
                    context.closePath();
                    count += 0.5;
                    animationId = window.requestAnimationFrame(renderer);
                    // console.log("rendering", newPosition.x)
                    context.arc(newPosition.x, newPosition.y, radius, 0, Math.PI *2, true);
                    context.fill();
                }
                renderer()
        
                return () => {
                    window.cancelAnimationFrame(animationId);
                }
                
        }
     },[color])  

    return <canvas ref={ref} width={1600} height={700} />
}

export default Unit