import { Header } from './components/header';
import { SubHeader } from './components/subHeader';
import { TodoState } from './components/todoState';
import { HeaderContainer } from './components/headerContainer';
import { Button } from './components/button';
import { Input } from './components/input';
import { List } from './components/list';
import { LoginState } from './components/loginState';
import { Counter } from './components/useReducer/counter';
import { TestContextProvider } from './components/context/testContext';
import { DomRef } from './components/useRef/domRef';
import { MyClassComp } from './components/classComp/myClassComp';
import { Generics } from './components/gerenics/generics';
import { TemplateLiterals } from './components/templateLiterals/templateLiterals';
import { CustomButton } from './components/html/button';
import { CustomButton2 } from './components/html/customComponent';
import './App.css';

function App() {
  const items=["Ankara", "izmir", "istanbul"];
  return (
    <TestContextProvider>
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
        <List name={{ firstName: 'Ömer', lastName: 'Iliski' }} />
        <LoginState />
        <Counter/>
        <DomRef/>
        <MyClassComp message='My Count is: '/>
        <Generics items={items}/>
        <TemplateLiterals position="center-top"/>
        <CustomButton variant="secondary" onClick={()=>console.log("Halloo")}>My Custom Button</CustomButton>
        <CustomButton2 variant='primary' onClick={()=>console.log("hallo 2")}>My Custon Button2</CustomButton2>
      </div>
    </TestContextProvider>
  );
}

export default App;
