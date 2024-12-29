import { Image } from 'react-konva';
import { useRef, useState } from 'react';
import "./TowerUnit.css";

export default function TowerUnit({position, imageName, player}:{position:{x:number,y:number}, imageName:string, player:string}) {
     const [image, setImage] = useState<HTMLImageElement | null>(null);
      const imageRef = useRef(null);
      
      const img = new window.Image();
    // activePosition.x += count; 
    
    img.src = imageName;
    img.onload = () => {
      setImage(img);
      // dwarf.startPosition.x-=1
    };
    return (<>
        {image && (       
 
         <Image image={image} x={position.x} y={position.y} width={50} height={50} ref={imageRef} stroke={player} strokeWidth={10}/>
         
          
                   
                 )} 
     </>      
     );
}