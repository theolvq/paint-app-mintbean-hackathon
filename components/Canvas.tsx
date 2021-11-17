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
  shape: string;
}

interface PositionArgs {
  x: number | null;
  y: number | null;
}

const Canvas: FC<IProps> = ({ color, strokeWidth, lineCap, shape }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const overlayRef = useRef<HTMLCanvasElement>(null!);
  const ctxRef = useRef<CanvasRenderingContext2D>(null!);
  const overlayCtxRef = useRef<CanvasRenderingContext2D>(null!);

  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHidden, setCursorHidden] = useState(true); // custom cursor logic
  const [startPosition, setStartPosition] = useState<PositionArgs>({
    x: null,
    y: null,
  });

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
    const overlay = overlayRef.current;
    const width = window.innerWidth * 0.9;
    const height = window.innerHeight * 0.9;
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    overlay.width = width * devicePixelRatio;
    overlay.height = height * devicePixelRatio;
    overlay.style.width = `${width}px`;
    overlay.style.height = `${height}px`;
    const ctx = canvas.getContext('2d')!;
    const overlayCtx = overlay.getContext('2d')!;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    overlayCtx.scale(devicePixelRatio, devicePixelRatio);
  }, []);

  // Initialize the context and allow for color, strokeWidth and lineCap picking
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    ctx.lineCap = lineCap;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = strokeWidth;
    ctxRef.current = ctx;

    const overlay = overlayRef.current;
    const overlayCtx = overlay.getContext('2d')!;
    overlayCtx.lineCap = lineCap;
    overlayCtx.strokeStyle = color;
    overlayCtx.fillStyle = color;
    overlayCtx.lineWidth = strokeWidth;
    overlayCtxRef.current = overlayCtx;
  }, [color, strokeWidth, lineCap]);

  // Line drawing functions
  const drawLineStart = (x: number, y: number) => {
    overlayCtxRef.current.beginPath();
    overlayCtxRef.current.moveTo(x, y);
    overlayCtxRef.current.lineTo(x, y);
    overlayCtxRef.current.stroke();
  };

  const drawLineMove = (x: number, y: number) => {
    overlayCtxRef.current.lineTo(x, y);
    overlayCtxRef.current.stroke();
  };

  const drawLineEnd = () => {
    overlayCtxRef.current.closePath();
  };

  // Rectangle drawing functions
  const drawRectangleStart = (x: number, y: number) => {
    setStartPosition({ x, y });
  };

  const drawRectangleMove = (x: number, y: number) => {
    if (!startPosition.x || !startPosition.y) return;
    const width = x - startPosition.x;
    const height = y - startPosition.y;
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );
    ctxRef.current.strokeRect(startPosition.x, startPosition.y, width, height);
  };

  const drawRectangleEnd = (x: number, y: number) => {
    if (!startPosition.x || !startPosition.y) return;
    const width = x - startPosition.x;
    const height = y - startPosition.y;
    overlayCtxRef.current.strokeRect(
      startPosition.x,
      startPosition.y,
      width,
      height,
    );
    setStartPosition({ x: null, y: null });
  };

  // Event Handlers
  const handleMouseDown: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
    if (shape === 'line') {
      drawLineStart(offsetX, offsetY);
    }
    if (shape === 'rectangle') {
      drawRectangleStart(offsetX, offsetY);
    }
  };

  const handleMouseUp: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (shape === 'line') {
      drawLineEnd();
    }
    if (shape === 'rectangle') {
      drawRectangleEnd(offsetX, offsetY);
    }
    setIsDrawing(false);
  };

  const handleMouseMove: MouseEventHandler = ({ nativeEvent }) => {
    const { offsetX, offsetY, clientX, clientY } = nativeEvent;
    setCursorPosition({ x: clientX, y: clientY });
    if (!isDrawing) return;

    if (shape === 'line') {
      drawLineMove(offsetX, offsetY);
    }
    if (shape === 'rectangle') {
      drawRectangleMove(offsetX, offsetY);
    }
  };

  const handleCursorEnter = () => {
    setCursorHidden(false);
  };

  const handleCursorLeave = () => {
    setCursorHidden(true);
    setIsDrawing(false);
  };

  return (
    <div>
      <Cursor
        cursorPosition={cursorPosition}
        cursorHidden={cursorHidden}
        strokeWidth={strokeWidth}
        color={color}
        lineCap={lineCap}
      />
      <div className='relative'>
        <canvas
          ref={overlayRef}
          className='bg-white w-11/12 h-11/12 absolute top-8'
        />
        <canvas
          className='bg-transparent w-11/12 h-11/12 absolute top-8'
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleCursorEnter}
          onMouseLeave={handleCursorLeave}
          ref={canvasRef}
        />
      </div>
    </div>
  );
};

export default Canvas;
