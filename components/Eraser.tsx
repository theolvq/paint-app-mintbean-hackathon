import React, { FC } from 'react';
interface IProps {
  setColor: (color: string) => void;
}

const Eraser: FC<IProps> = ({ setColor }) => {
  return <button onClick={() => setColor('#fff')}>Eraser</button>;
};

export default Eraser;
