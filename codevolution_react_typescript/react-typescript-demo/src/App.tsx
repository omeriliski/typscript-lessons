import { Header } from './components/header';
import { SubHeader } from './components/subHeader';
import { TodoState } from './components/todoState';
import { HeaderContainer } from './components/headerContainer';
import { Button } from './components/button';
import { Input } from './components/input';
import { List } from './components/list';
import { LoginState } from './components/loginState';
import { Counter } from './components/useReducer/counter';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* to send normal props, look at to Header component  */}
      <Header text="Todo List" />
      {/* to use prop.children, look at to SubHeader component */}
      <SubHeader>Write Your Todos Here</SubHeader>
      {/* to use literal types, look at to TodoState component */}
      <TodoState state='new' />
      <HeaderContainer>
        <SubHeader>That is a SubHeader in Container</SubHeader>
      </HeaderContainer>
      <Input changeHandler={e => console.log('e :>> ', e.target.value)} />
      <Button style={{ backgroundColor: 'blue', color: 'white', width: 170 }} handleClick={e => console.log('e :>> ', e)} />
      <List name={{firstName: 'Ömer', lastName: 'Iliski'}} />
      <LoginState/>
      <Counter/>
    </div>
  );
}

export default App;
