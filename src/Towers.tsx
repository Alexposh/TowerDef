import { useState } from "react";
import TowerPlace from "./TowerPlace"


export default function Towers() {

    const places = [
        {
            id: 1,
            position: {x: 200, y: 270},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:2,
            position: {x: 350, y: 270},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:3,
            position: {x: 500, y: 270},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id: 4,
            position: {x: 650, y: 270},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:5,
            position: {x: 800, y: 270},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:6,
            position: {x: 950, y: 270},
            playerColor: 'orange',
            selected: false,
            occupied: false
        }, {
            id: 7,
            position: {x: 1100, y: 270},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:8,
            position: {x: 1250, y: 270},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:9,
            position: {x: 1400, y: 270},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id: 10,
            position: {x: 1550, y: 270},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:11,
            position: {x: 1700, y: 270},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:12,
            position: {x: 1850, y: 270},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id: 13,
            position: {x: 125, y: 430},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:14,
            position: {x: 275, y: 430},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:15,
            position: {x: 425, y: 430},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id: 16,
            position: {x: 575, y: 430},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:17,
            position: {x: 725, y: 430},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:18,
            position: {x: 875, y: 430},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:19,
            position: {x: 1025, y: 430},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:20,
            position: {x: 1175, y: 430},
            playerColor: 'orange',
            selected: false,
            occupied: false
        }
        ,
        {
            id:21,
            position: {x: 1325, y: 430},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:22,
            position: {x: 1475, y: 430},
            playerColor: 'orange',
            selected: false,
            occupied: false
        },
        {
            id:23,
            position: {x: 1625, y: 430},
            playerColor: 'green',
            selected: false,
            occupied: false
        },
        {
            id:24,
            position: {x: 1775, y: 430},
            playerColor: 'green',
            selected: true,
            occupied: false
        }
       
    ]
    const [selected, setSelected] = useState(false);
  const toggleSelected = () => setSelected(selected => !selected);

    return   (
        <>
        <div>
        {places.map(place => (
            <li>
              <TowerPlace position={{x: place.position.x, y: place.position.y}} player={place.playerColor} selected={place.selected}/>
            </li>
          ))}
          </div>
        </>
    )

}