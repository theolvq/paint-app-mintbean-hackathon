import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import Cursor from './Cursor';

interface IProps {
  color: string;
  strokeWidth: number;
  lineCap: CanvasLineCap;
}

const Canvas: FC<IProps> = ({ color, strokeWidth, lineCap }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const ctxRef = useRef<CanvasRenderingContext2D>(null!);

  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHidden, setCursorHidden] = useState(true);

  // Initialize the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.9;
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }, []);

  // Initialize the context and allow for color picking, strokeWidth picking
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    ctx.lineCap = lineCap;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = strokeWidth;
    // ctx.lineJoin = 'bevel';
    ctxRef.current = ctx;
  }, [color, strokeWidth, lineCap]);

  // const handleClick: MouseEventHandler = ({ nativeEvent }) => {
  //   const { offsetX, offsetY } = nativeEvent;
  //   if (isDrawing) return;
  //   setIsDrawing(true);
  //   ctxRef.current.beginPath();
  //   ctxRef.current.arc(offsetX, offsetY, strokeWidth, 0, 2 * Math.PI);
  //   // ctxRef.current.fillRect(offsetX, offsetY, strokeWidth, strokeWidth);
  //   ctxRef.current.closePath();
  //   setIsDrawing(false);
  // };

  const handleMouseDown: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    setIsDrawing(true);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
  };

  const handleMouseUp: MouseEventHandler = (e) => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const handleMouseMove: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY, clientX, clientY } = nativeEvent;
    setCursorPosition({ x: clientX, y: clientY });
    if (!isDrawing) return;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const handleCursorEnter = () => {
    setCursorHidden(false);
  };

  const handleCursorLeave = () => {
    setCursorHidden(true);
    setIsDrawing(false);
  };

  return (
    <>
      <Cursor
        cursorPosition={cursorPosition}
        cursorHidden={cursorHidden}
        strokeWidth={strokeWidth}
        color={color}
        lineCap={lineCap}
      />
      <canvas
        className='bg-white w-11/12 h-11/12'
        // onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleCursorEnter}
        onMouseLeave={handleCursorLeave}
        ref={canvasRef}
      />
    </>
  );
};

export default Canvas;
