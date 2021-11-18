import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import React, { FC, useState } from 'react';
import { Stage, Layer, Line, Text, Rect } from 'react-konva';

interface ILine {
  tool: string;
  points: number[];
}

interface IRect {
  tool: string;
  points: number[];
  width: number;
  height: number;
}

interface IProps {
  color: string;
  strokeWidth: number;
  lineCap: string;
  shape: string;
}

const Canvas: FC<IProps> = ({ color, lineCap, shape, strokeWidth }) => {
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState<ILine[]>([]);
  const [rects, setRects] = useState<IRect[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const startLine = (pointerPosition: Vector2d) => {
    setLines((prev: ILine[]) => [
      ...prev,
      { tool, points: [pointerPosition.x, pointerPosition.y] },
    ]);
  };

  const drawLine = (pointerPosition: Vector2d) => {
    const lastLine = lines.at(-1)!;
    lastLine.points = lastLine.points.concat([
      pointerPosition.x,
      pointerPosition.y,
    ]);

    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsDrawing(true);
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    startLine(pointerPosition);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    drawLine(pointerPosition);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
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
              stroke='#df4b26'
              strokeWidth={5}
              tension={0.5}
              lineCap='round'
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value='pen'>Pen</option>
        <option value='eraser'>Eraser</option>
      </select>
    </div>
  );
};

export default Canvas;
