import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { Stage, Layer, Line, Text, Rect, Circle } from 'react-konva';
import { IBasicShape, ILine } from '../types';
import Cursor from './Cursor';

interface IProps {
  strokeColor: string;
  strokeWidth: number;
  tool: string;
  lines: ILine[];
  setLines: Dispatch<SetStateAction<ILine[]>>;
  drawnShapes: IBasicShape[];
  setDrawnShapes: Dispatch<SetStateAction<IBasicShape[]>>;
}

type KonvaEvent = KonvaEventObject<MouseEvent | TouchEvent>;

type KonvaMouseEvent = KonvaEventObject<MouseEvent>;

const Canvas: FC<IProps> = ({
  strokeColor,
  tool,
  strokeWidth,
  lines,
  setLines,
  drawnShapes,
  setDrawnShapes,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorHidden, setCursorHidden] = useState(true);
  const [currentShape, setCurrentShape] = useState<IBasicShape[]>([]);

  const [startPosition, setStartPosition] = useState<Vector2d>({ x: 0, y: 0 })!;
  const [isDrawing, setIsDrawing] = useState(false);

  const startLine = (pointerPosition: Vector2d) => {
    setLines((prev: ILine[]) => [
      ...prev,
      {
        tool,
        strokeColor,
        strokeWidth,
        points: [pointerPosition.x, pointerPosition.y],
      },
    ]);
  };

  const startShape = (pointerPosition: Vector2d) => {
    setStartPosition(pointerPosition);
  };

  const drawLine = (pointerPosition: Vector2d) => {
    if (!lines.at(-1)) return;
    const lastLine = lines.at(-1)!;
    lastLine.tool = tool;
    lastLine.points = lastLine.points.concat([
      pointerPosition.x,
      pointerPosition.y,
    ]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const drawRect = (pointerPosition: Vector2d) => {
    setCurrentShape((prev: IBasicShape[]) => [
      ...prev,
      {
        tool,
        strokeColor,
        strokeWidth,
        points: [pointerPosition.x, pointerPosition.y],
        width: startPosition.x - pointerPosition.x,
        height: startPosition.y - pointerPosition.y,
      },
    ]);
  };

  const drawCircle = (pointerPosition: Vector2d) => {
    const radius =
      (Math.abs(startPosition.x - pointerPosition.x) +
        Math.abs(startPosition.y - pointerPosition.y)) /
      2;

    setCurrentShape((prev: IBasicShape[]) => [
      ...prev,
      {
        tool,
        strokeColor,
        strokeWidth,
        points: [startPosition.x, startPosition.y],
        radius,
      },
    ]);
  };

  const handleMouseDown = (e: KonvaEvent) => {
    setIsDrawing(true);
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    if (tool === 'pen') {
      startLine(pointerPosition);
    }
    startShape(pointerPosition);
  };

  const isMouseEvent = (tbd: KonvaEvent): tbd is KonvaMouseEvent =>
    (tbd as KonvaMouseEvent).type ? true : false;

  const handleMouseMove = (e: KonvaEvent) => {
    if (isMouseEvent(e)) {
      setCursorPosition({ x: e.evt.clientX, y: e.evt.clientY });
    }
    if (!isDrawing) {
      return;
    }
    if (!isMouseEvent(e)) {
      e.evt.preventDefault();
    }
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    if (tool === 'pen' || tool === 'eraser') {
      drawLine(pointerPosition);
    }
    if (tool.includes('rectangle')) {
      drawRect(pointerPosition);
    }
    if (tool.includes('circle')) {
      drawCircle(pointerPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setDrawnShapes((prev) => [...prev, currentShape.at(-1)!]);
    setCurrentShape([]);
  };

  const handleMouseEnter = () => {
    setCursorHidden(false);
  };

  const handleMouseLeave = () => {
    setCursorHidden(true);
    setIsDrawing(false);
  };

  return (
    <div>
      <Cursor
        cursorPosition={cursorPosition}
        cursorHidden={cursorHidden}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        tool={tool}
      />
      <Stage
        className='bg-white z-10'
        width={window.innerWidth * 0.925}
        height={window.innerHeight * 0.925}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <Layer>
          {currentShape
            .filter((_, i) => i >= currentShape.length - 1)
            .map((shape, i) => {
              if (!shape) return null;
              if (shape.tool.includes('rectangle')) {
                return (
                  <Rect
                    key={i}
                    x={shape.points[0]}
                    y={shape.points[1]}
                    width={shape.width}
                    height={shape.height}
                    stroke={shape.strokeColor}
                    strokeWidth={shape.strokeWidth}
                    fill={
                      shape.tool === 'rectangle-full'
                        ? shape.strokeColor
                        : 'transparent'
                    }
                  />
                );
              }
              if (shape.tool.includes('circle')) {
                return (
                  <Circle
                    key={i}
                    x={shape.points[0]}
                    y={shape.points[1]}
                    radius={shape.radius}
                    stroke={shape.strokeColor}
                    strokeWidth={shape.strokeWidth}
                    fill={
                      shape.tool === 'circle-full'
                        ? shape.strokeColor
                        : 'transparent'
                    }
                  />
                );
              }
            })}
          {drawnShapes.map((shape, i) => {
            if (!shape) return null;
            if (shape.tool.includes('rectangle')) {
              return (
                <Rect
                  key={i}
                  x={shape.points[0]}
                  y={shape.points[1]}
                  width={shape.width}
                  height={shape.height}
                  stroke={shape.strokeColor}
                  strokeWidth={shape.strokeWidth}
                  fill={
                    shape.tool === 'rectangle-full'
                      ? shape.strokeColor
                      : 'transparent'
                  }
                />
              );
            }
            if (shape.tool.includes('circle')) {
              return (
                <Circle
                  key={i}
                  x={shape.points[0]}
                  y={shape.points[1]}
                  radius={shape.radius}
                  stroke={shape.strokeColor}
                  strokeWidth={shape.strokeWidth}
                  fill={
                    shape.tool === 'circle-full'
                      ? shape.strokeColor
                      : 'transparent'
                  }
                />
              );
            }
          })}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.strokeColor}
              strokeWidth={line.strokeWidth}
              tension={0.5}
              lineCap='round'
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
