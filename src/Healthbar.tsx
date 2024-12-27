import { useState } from 'react';
import { Line } from 'react-konva';

export default function Healthbar({position, attributes}:{position:{x:number,y:number}, attributes:{health:number, speed:number, armor:number}}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [line, setLine] = useState<HTMLImageElement | null>(null);
  // const [size, setSize] = useState(100);
//   const imageRef = useRef(null);
// const [lineWidth, setWidth] = useState(attributes.health);

  const img = new window.Image();
  // line += attributes.health
  
  img.src = '/health.jpg';
  img.onload = () => {
    setLine(img);
    // changeSize();
  };
  return (<>
 
  
  <Line points={[position.x, position.y, position.x + attributes.health, position.y]} strokeWidth={5} stroke="green" />
  
    </>      
  );
}