import React from 'react';
import logo from './logo.svg';
import './App.css';

interface User{
  name: string;
  id: number;
};

const user: User = {
  name: "Hayes",
  id: 0,
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user_class: User = new UserAccount("Murphy", 1);


interface Backpack<Type>{
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get();

backpack.add('Hans');


function App() {

  let helloWorld = "Hello World";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
