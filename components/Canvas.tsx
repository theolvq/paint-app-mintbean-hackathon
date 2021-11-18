import { KonvaEventObject } from 'konva/lib/Node';
import { Vector2d } from 'konva/lib/types';
import React, { FC, useState } from 'react';
import { Stage, Layer, Line, Text, Rect, Circle } from 'react-konva';

interface ILine {
  tool: string;
  points: number[];
}

interface IBasicShape {
  shape: string;
  tool: string;
  points: number[];
  fill?: string;
  shadowBlur?: number;
  width?: number;
  height?: number;
  radius?: number;
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
  const [rects, setRects] = useState<IBasicShape[]>([]);
  const [circles, setCircles] = useState<IBasicShape[]>([]);
  const [drawnShapes, setDrawnShapes] = useState<IBasicShape[]>([]);

  const [startPosition, setStartPosition] = useState<Vector2d>({ x: 0, y: 0 })!;
  const [isDrawing, setIsDrawing] = useState(false);

  const startLine = (pointerPosition: Vector2d) => {
    setLines((prev: ILine[]) => [
      ...prev,
      { tool, points: [pointerPosition.x, pointerPosition.y] },
    ]);
  };

  const startShape = (pointerPosition: Vector2d) => {
    setStartPosition(pointerPosition);
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

  const drawRect = (pointerPosition: Vector2d) => {
    setRects((prev: IBasicShape[]) => [
      ...prev,
      {
        tool,
        shape: 'rectangle',
        points: [pointerPosition.x, pointerPosition.y],
        width: startPosition.x - pointerPosition.x,
        height: startPosition.y - pointerPosition.y,
      },
    ]);
  };

  const drawCircle = (pointerPosition: Vector2d) => {
    setCircles((prev: IBasicShape[]) => [
      ...prev,
      {
        tool,
        shape: 'circle',
        points: [pointerPosition.x, pointerPosition.y],
        radius: Math.abs(startPosition.x - pointerPosition.x),
      },
    ]);
  };

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsDrawing(true);
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    // startLine(pointerPosition);
    startShape(pointerPosition);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrawing) {
      return;
    }
    const pointerPosition = e.target.getStage()!.getPointerPosition()!;
    // drawLine(pointerPosition);
    // drawRect(pointerPosition);
    drawCircle(pointerPosition);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setDrawnShapes((prev) => [...prev, circles.at(-1)!]);
    setCircles([]);
    // setDrawnShapes((prev) => [...prev, rects.at(-1)!]);
    // setRects([]);
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
          {rects
            .filter((rect, i) => i >= rects.length - 1)
            .map((rect, i) => (
              <Rect
                key={i}
                x={rect.points[0]}
                y={rect.points[1]}
                width={rect.width}
                height={rect.height}
                stroke='#df4b26'
              />
            ))}
          {circles
            .filter((circle, i) => i >= circles.length - 1)
            .map((circle, i) => (
              <Circle
                key={i}
                x={circle.points[0]}
                y={circle.points[1]}
                radius={circle.radius}
                stroke='#df4b26'
              />
            ))}
          {drawnShapes.map((shape, i) => {
            if (!shape) return null;
            if (shape.shape === 'rectangle') {
              return (
                <Rect
                  key={i}
                  x={shape.points[0]}
                  y={shape.points[1]}
                  width={shape.width}
                  height={shape.height}
                  stroke='#df4b26'
                />
              );
            }
            if (shape.shape === 'circle') {
              return (
                <Circle
                  key={i}
                  x={shape.points[0]}
                  y={shape.points[1]}
                  radius={shape.radius}
                  stroke='#df4b26'
                />
              );
            }
          })}
        </Layer>
      </Stage>
    </div>
  );
};
//           />
//     })}
//   </Layer>
// </Stage>
// <select
//   value={tool}
//         onChange={(e) => {
//           setTool(e.target.value);
//         }}
//       >
//         <option value='pen'>Pen</option>
//         <option value='eraser'>Eraser</option>
//       </select>
//     </div>
//   );
// };

export default Canvas;
