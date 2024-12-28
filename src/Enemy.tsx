import { useRef, useState } from 'react';
import { Image } from 'react-konva';

export default function Enemy({position}:{position:{x:number,y:number}}) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const imageRef = useRef(null);

  // type Enemy = {
  //   startPosition :{x : number, y : number},
  //   health: number,
  //   speed: number,
  //   armor: number
  // }

  // const dwarf: Enemy = {
  //   startPosition :{x : 100, y : 100},
  //   health: 100,
  //   speed: 60,
  //   armor: 80
  // }
  // const damage = 1; // change this to let when you add the functionalities of increasing or decreasing damage.
  // let count:number = 0;

   
  // const initialAttributes = {
  //   health: dwarf.health,
  //   speed: dwarf.speed,
  //   armor: dwarf.armor
  // }   

  // const activeAttributes = {
  //   health: initialAttributes.health - damage,
  //   speed: initialAttributes.speed,
  //   armor: initialAttributes.armor
  // }

  // const activePosition ={
  //   x: dwarf.startPosition.x + count,
  //   y: dwarf.startPosition.y
  // } 

 

  // useEffect(() => {     
  //   let animationId:number = 0; 
  //   const renderer = () => {   
  //     activePosition.x += 1; 
  //     console.log("position X is " + activePosition.x);
  //     count += 1;
          
  //       // if (activeAttributes.health > 0) {
  //       //   activeAttributes.health -= damage
  //       // }
  //       animationId = window.requestAnimationFrame(renderer);
  //     }
  //   renderer()
    const img = new window.Image();
    // activePosition.x += count; 
    
    img.src = '/enemy1.png';
    img.onload = () => {
      setImage(img);
      // dwarf.startPosition.x-=1
    };
  //  }, []);
    return (<>
       {image && (       

        <Image image={image} x={position.x} y={position.y} width={65} height={65} ref={imageRef} />
         
                  
                )} 
    </>      
    );
}
