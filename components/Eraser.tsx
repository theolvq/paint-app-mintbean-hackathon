import React, { FC, useState } from 'react';
interface IProps {
  color: string;
  setColor: (color: string) => void;
  lineCap: CanvasLineCap;
  setLineCap: (lineCap: CanvasLineCap) => void;
}

const Eraser: FC<IProps> = ({ setColor, lineCap, setLineCap, color }) => {
  const [previousColor, setPreviousColor] = useState('');
  const [previousLineCap, setPreviousLineCap] =
    useState<CanvasLineCap>(lineCap);
  const handleClick = () => {
    if (color !== '#ffffff') {
      setPreviousColor(color);
      setPreviousLineCap(lineCap);
      setColor('#ffffff');
      setLineCap('square');
    } else {
      setColor(previousColor);
      setLineCap(previousLineCap);
    }
  };

  return <button onClick={handleClick}>Eraser</button>;
};

export default Eraser;
