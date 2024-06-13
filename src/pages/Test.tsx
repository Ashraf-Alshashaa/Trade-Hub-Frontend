import { FC } from 'react';
import Button from '../components/button/button.tsx'; // Adjust the path based on your actual file structure

const Test: FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Test Page 1</h1>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default Test;