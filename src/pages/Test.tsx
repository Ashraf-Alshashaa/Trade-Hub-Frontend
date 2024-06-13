import { FC } from 'react';
import Button from '../components/button/button.tsx'; 
import TextInput from '../components/text-input/text-input.tsx'; 
import { useState } from 'react';

const Test: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <div>
      <h1>Test Page</h1>
      <Button text="Click me" onClick={handleClick} />
      <h1>Login</h1>
      <div>
        <label>Username: &nbsp;</label>
        <TextInput value={username} onChange={handleUsernameChange} placeholder="Enter username" className="username-input"  />
      </div>
      <br></br>
      <div>
        <label>Password: &nbsp;</label>
        <TextInput value={password} onChange={handlePasswordChange} placeholder="Enter password" type="password" className="password-input"/>
      </div>
    </div>
  );
};

export default Test;