import React, {useState} from 'react'
import canvasSketch from 'canvas-sketch'


export const Sketch = (props) => {
    const [ref, setRef ] = useState(React.createRef())
    const [settings, setSettings] = useState({
        dimensions: [ 2048, 2048 ],
        canvas: ref.current
      })

    const sketch = () => {
    return ({ context, width, height }) => {
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);
    };
    };
    
    canvasSketch(sketch, settings);
      
    return (
        <canvas ref={ref}/>
    )
}



