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

interface ClearCanvasArgs {
  ctxRef: React.RefObject<CanvasRenderingContext2D>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const Canvas: FC<IProps> = ({ color, strokeWidth, lineCap }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const ctxRef = useRef<CanvasRenderingContext2D>(null!);

  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHidden, setCursorHidden] = useState(true); // custom cursor logic

  const clearCanvas = () => {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
  };

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
    const ctx = canvas.getContext('2d')!;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  }, []);

  // Initialize the context and allow for color picking, strokeWidth picking
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = strokeWidth;
    ctxRef.current = ctx;
  }, [color, strokeWidth, lineCap]);

  const drawLineStart = (x: number, y: number) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const drawLineMove = (x: number, y: number) => {
    ctxRef.current.lineTo(x, y);
    ctxRef.current.stroke();
  };

  const drawRectangleStart = (
    x: number,
    y: number,
    width: number,
    height: number,
  ) => {
    ctxRef.current.fillRect(x, y, width, height);
  };

  const drawCircle = (x: number, y: number, radius: number) => {
    ctxRef.current.arc(x, y, radius, 0, 2 * Math.PI);
  };

  const handleMouseDown: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    // drawRectangleStart(offsetX, offsetY, 100, 100);
    // drawCircle(offsetX, offsetY, 100);
    setIsDrawing(true);
    drawLineStart(offsetX, offsetY);
  };

  const handleMouseUp: MouseEventHandler = (e) => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const handleMouseMove: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY, clientX, clientY } = nativeEvent;
    setCursorPosition({ x: clientX, y: clientY });
    if (!isDrawing) return;
    drawLineMove(offsetX, offsetY);
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
