import { Circle } from "react-konva";

function TowerPlace( {position, player, selected}:{position:{x:number,y:number}, player:string, selected:boolean} ) {

    if (selected === true) {
        return (
            <>
            <Circle x={position.x} y={position.y} radius={25} fill={player} />      
            <Circle x={position.x} y={position.y} radius={175} fill={player} opacity={0.3} />
            </>
            
        );
    } else{
        return (
            <>
            <Circle x={position.x} y={position.y} radius={25} fill={player} />      
            </>
            
        );
    } 
    
}

export default TowerPlace;