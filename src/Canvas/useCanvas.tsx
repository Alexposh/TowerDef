import { useRef, useEffect } from "react"


const useCanvas = (draw: (context: CanvasRenderingContext2D | null | undefined, count: number) => void) =>{
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = ref.current
        const context = canvas?.getContext('2d');
        let count:number = 0;
        let animationId:number = 0;
        const renderer = () => {
            count += 0.5;
            draw(context, count);
            animationId = window.requestAnimationFrame(renderer);
        }
        renderer()

        return () => {
            window.cancelAnimationFrame(animationId);
        }
    },[draw])



    return ref;
} 

export default useCanvas