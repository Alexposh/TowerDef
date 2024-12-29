import { useState } from "react";
import { Circle } from "react-konva";

function TowerPlace( {id, position, player, selected}:{ id: number, position:{x:number,y:number}, player:string, selected:boolean} ) {

    // const hasStroke = false;
    const [stroke, setStroke] = useState(false);

    const item = { 
        id: id, 
        x: position.x, 
        y: position.y, 
        isSelected: selected, 
        playerColor: player }
    const handleSelect = () => {
        setStroke(() => 
          item.isSelected ? stroke : !stroke
         
        );
        // console.log(stroke)
      };

    // if (selected === true) {
        return (
            <>
            <Circle x={position.x} y={position.y} 
            radius={25} 
            fill={player} 
            opacity={0.7} 
            stroke={stroke ? "rgba(181, 158, 169, 0.35)" : ""} 
            strokeWidth={stroke ? 300 : 1} 
            fillAfterStrokeEnabled={true} 
            onClick={handleSelect}/>
            </>
            
        );
   
    
}

export default TowerPlace;