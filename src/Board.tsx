import { useRef, useEffect, useState } from 'react';
import { Image } from 'react-konva';

export default function Board() {
    const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = '/concept1.png';
    img.onload = () => {
      setImage(img);
    };
  }, []);
    return (<>
       {image && (
                    <Image image={image} x={5} y={5} width={1600} height={700} ref={imageRef} />
                )}
    </>      
    );
}