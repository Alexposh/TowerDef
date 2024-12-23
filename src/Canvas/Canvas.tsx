import { ClassAttributes, CanvasHTMLAttributes, useRef, useEffect } from "react"
import { JSX } from "react/jsx-runtime"

const Canvas = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLCanvasElement> & CanvasHTMLAttributes<HTMLCanvasElement>) =>{
    const {draw, ...rest} = props
    const ref = useRef<HTMLCanvasElement>(null)


    

    useEffect(() => {
        const canvas = ref.current
        // if (!canvas) return null    
        const context = canvas?.getContext('2d');

        let count:number = 0;
        let animationId:number = 0;

        const renderer = () => {
            count += 0.5;
            draw(context, count, "red");
            animationId = window.requestAnimationFrame(renderer);
        }
        renderer()

        return () => {
            window.cancelAnimationFrame(animationId);
        }
    },[draw])



    return <canvas ref={ref} {...rest} />
} 

export default Canvas