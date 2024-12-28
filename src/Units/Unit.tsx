
import Enemy from "../Enemy";
import Healthbar from "../Healthbar";

const Unit = ({position, attributes}:{position:{x:number,y:number}, attributes:{health:number, speed:number, armor:number}}) =>{
     
     

    return  (<>
        <Enemy position={position} />
        <Healthbar position={position} attributes={attributes}/>
    </>)
}

export default Unit