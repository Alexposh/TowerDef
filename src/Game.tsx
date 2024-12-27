import { Stage, Layer} from 'react-konva';
import Enemy from './Enemy';
import Board from './Board';
import Healthbar from './Healthbar';

function Game() {

    const enemy = {
        startPosition :{x : 50, y : 315},
        startHealth: 100,
        speed: 60,
        armor: 80
      }
    const initialAttributes = {
        health: enemy.startHealth,
        speed: enemy.speed,
        armor: enemy.armor
      } 

    let count = 0;
    let damageTaken:number = 0;
    const currentPostion = {
        x : enemy.startPosition.x,
        y : enemy.startPosition.y
    }

    const activeAttributes = {
      health: initialAttributes.health,
      speed: initialAttributes.speed,
      armor: initialAttributes.armor
    }    
    const renderer = () => {        
      damageTaken += 0.1;
      count += 0.5;
      
      currentPostion.x = enemy.startPosition.x + count;      
      
      if (activeAttributes.health >= 2) { 
        activeAttributes.health = enemy.startHealth - damageTaken;
      }
      
      window.requestAnimationFrame(renderer);
    
    }
    renderer()
   
   
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>        
        <Board/>
        <Enemy position={currentPostion}/>
        {/* <Rect x={20} y={20} width={30} height={10} fill="blue" />  */}
        {/* <Rect x={currentPostion.x} y={currentPostion.y} width={currentHealth} height={5} fill="green" /> */}
        <Healthbar position={currentPostion} attributes={activeAttributes}/>
      </Layer>
    </Stage>
  );
};

export default Game;
