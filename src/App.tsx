import { FC } from 'react';
import Przycisk from './Przycisk';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1>Kalkulator trójątów</h1>
      <Przycisk />
    </div>
  );
};
