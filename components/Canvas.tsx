import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import React, { FC, useState } from 'react';
import { Stage, Layer, Line, Text, Rect, Circle } from 'react-konva';

interface ILine {
  tool: string;
  points: number[];
  strokeColor: string;
  strokeWidth: number;
}

interface IBasicShape {
  tool: string;
  points: number[];
  strokeColor: string;
  strokeWidth: number;
  fill?: string;
  shadowBlur?: number;
  width?: number;
  height?: number;
  radius?: number;
}

interface IProps {
  strokeColor: string;
  strokeWidth: number;
  lineCap: string;
  tool: string;
}

const Canvas: FC<IProps> = ({ strokeColor, lineCap, tool, strokeWidth }) => {
  const [lines, setLines] = useState<ILine[]>([]);
  const [currentShape, setCurrentShape] = useState<IBasicShape[]>([]);
  const [drawnShapes, setDrawnShapes] = useState<IBasicShape[]>([]);

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
        tool: 'rectangle',
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
        shape: 'circle',
        points: [pointerPosition.x, pointerPosition.y],
        radius,
      },
    ]);
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsDrawing(true);
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    if (tool === 'pen') {
      startLine(pointerPosition);
    }
    startShape(pointerPosition);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    if (tool === 'pen') {
      drawLine(pointerPosition);
    }
    if (tool === 'rectangle') {
      drawRect(pointerPosition);
    }
    if (tool === 'circle') {
      drawCircle(pointerPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setDrawnShapes((prev) => [...prev, currentShape.at(-1)!]);
    setCurrentShape([]);
  };

  return (
    <div>
      <Stage
        className='bg-white'
        width={window.innerWidth * 0.9}
        height={window.innerHeight * 0.9}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
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

          {currentShape
            .filter((_, i) => i >= currentShape.length - 1)
            .map((shape, i) => {
              if (!shape) return null;
              if (shape.tool === 'rectangle') {
                return (
                  <Rect
                    key={i}
                    x={shape.points[0]}
                    y={shape.points[1]}
                    width={shape.width}
                    height={shape.height}
                    stroke={shape.strokeColor}
                    strokeWidth={shape.strokeWidth}
                  />
                );
              }
              if (shape.tool === 'circle') {
                return (
                  <Circle
                    key={i}
                    x={shape.points[0]}
                    y={shape.points[1]}
                    radius={shape.radius}
                    stroke={shape.strokeColor}
                    strokeWidth={shape.strokeWidth}
                  />
                );
              }
            })}
          {drawnShapes.map((shape, i) => {
            if (!shape) return null;
            if (shape.tool === 'rectangle') {
              return (
                <Rect
                  key={i}
                  x={shape.points[0]}
                  y={shape.points[1]}
                  width={shape.width}
                  height={shape.height}
                  stroke={shape.strokeColor}
                  strokeWidth={shape.strokeWidth}
                />
              );
            }
            if (shape.tool === 'circle') {
              return (
                <Circle
                  key={i}
                  x={shape.points[0]}
                  y={shape.points[1]}
                  radius={shape.radius}
                  stroke={shape.strokeColor}
                  strokeWidth={shape.strokeWidth}
                />
              );
            }
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
