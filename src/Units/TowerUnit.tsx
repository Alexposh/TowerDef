import { Image } from 'react-konva';
import { useRef, useState } from 'react';
import "./TowerUnit.css";

export default function TowerUnit({position}:{position:{x:number,y:number}}) {
     const [image, setImage] = useState<HTMLImageElement | null>(null);
      const imageRef = useRef(null);
      
      const img = new window.Image();
    // activePosition.x += count; 
    
    img.src = '/armor.png';
    img.onload = () => {
      setImage(img);
      // dwarf.startPosition.x-=1
    };
    return (<>
        {image && (       
 
         <Image image={image} x={position.x} y={position.y} width={50} height={50} ref={imageRef} />
          
                   
                 )} 
     </>      
     );
}