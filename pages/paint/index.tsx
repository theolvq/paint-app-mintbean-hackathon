import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { IBasicShape, ILine } from '../../types';
import Toolbar from '../../components/Toolbar';

const Canvas = dynamic(() => import('../../components/Canvas'), {
  ssr: false,
});

const Paint: NextPage = () => {
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(12);
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState<ILine[]>([]);
  const [drawnShapes, setDrawnShapes] = useState<IBasicShape[]>([]);
  const clearCanvas = () => {
    setDrawnShapes([]);
    setLines([]);
  };

  return (
    <>
      <main className='bg-gradient-to-br from-cyan-300 to-violet-500 via-fuschia-400 text-white min-h-screen flex pt-2'>
        <Toolbar
          strokeColor={strokeColor}
          setStrokeColor={setStrokeColor}
          strokeWidth={strokeWidth}
          setStrokeWidth={setStrokeWidth}
          tool={tool}
          setTool={setTool}
          clearCanvas={clearCanvas}
        />
        <Canvas
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
          tool={tool}
          lines={lines}
          setLines={setLines}
          drawnShapes={drawnShapes}
          setDrawnShapes={setDrawnShapes}
        />
      </main>
    </>
  );
};

export default Paint;
