import React from 'react';
import logo from './logo.svg';
import { Header } from './components/header';
import { SubHeader } from './components/subHeader';
import { TodoState } from './components/todoState';
import { HeaderContainer } from './components/headerContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* to send normal props, look at to Header component  */}
      <Header text="Todo List"/>    
      {/* to use prop.children, look at to SubHeader component */}
      <SubHeader>Write Your Todos Here</SubHeader>
      {/* to use literal types, look at to TodoState component */}
      <TodoState state='new'/>
      <HeaderContainer>
        <SubHeader>That is a SubHeader in Container</SubHeader>
      </HeaderContainer>
    </div>
  );
}

export default App;
