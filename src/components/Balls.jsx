import { useRef, useState, useLayoutEffect } from "react";
import { json } from "react-router-dom";

const Ball = ({x, y, radius, number}) => {
    return (
        <div
            style = {{
                position : 'absolute',
                left : x,
                top : y,
                width : radius * 2,
                height : radius * 2,
                borderRadius : '50%',
                background: `transparent`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                border: '2px solid #fff',
                fontSize:'10px',
                fontWeight: 'bold',
                zIndex : '-1'
            }}>
            {number}
        </div>
    );
};

const generarBalls = (count, containerWidth, containerHeight) => {
    const balls = [];
    for(let i = 0; i < count; i++){
        balls.push({
            x: Math.random() * (containerWidth - 24),
            y: Math.random() * (containerHeight - 24),
            vx: Math.random(),
            vy: Math.random(),
            radius: 12,
            number: Math.ceil(Math.random() * 100)
        });
    };
    return balls;
};

const Balls = () => {
    const [balls, setBalls] = useState([]);
    const containerRef = useRef(null);

        const divResize = () => {
            if(containerRef.current){
                const containerWidth = containerRef.current.clientWidth;
                const containerHeight = containerRef.current.clientHeight;
                setBalls(generarBalls(30, containerWidth, containerHeight));
            };
        };   
        
        useLayoutEffect(()=>{
            divResize() 
            window.addEventListener("resize", divResize);

            const updateBalls = () => {
                setBalls((prevBalls) => {
                    const actualizandoBalls = prevBalls.map((ball) => {
                        let newX = ball.x + ball.vx;
                        let newY = ball.y + ball.vy; 
            
                        if (newX < 0 || newX > containerRef.current.clientWidth - ball.radius * 2){//deberia ajustarse al contenedor
                            ball.vx *= -1;
                        }
                        if (newY < 0 || newY > containerRef.current.clientHeight - ball.radius * 2){//deberia ajustarse al contenedor
                            ball.vy *= -1;
                        }
                            
                        return {...ball, x: ball.x + ball.vx, y: ball.y + ball.vy};
                    });
                    return actualizandoBalls;
                });
                const animationFrame = requestAnimationFrame(updateBalls);
                return () => cancelAnimationFrame(animationFrame);
            };
            updateBalls();

            return () =>{
                window.removeEventListener("resize", divResize);
            }
    },[]);

    return (
        <div className="cont-Balls" ref={containerRef}>
            {balls.map((ball, index) =>(
                <Ball key={index} {...ball} />
            ))}
        </div>
    );
};
//Adaptarlo al contenedor
export default Balls;
