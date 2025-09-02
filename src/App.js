// import './styles.css'
import "bulma/css/bulma.css";
import React, { useState } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragementDemo from "./components/FragementDemo";
import PureComp from "./components/PureComp";
import PareComp from "./components/PareComp";
import TodoList from "./components/TodoList";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import ForwardRefParentInput from "./components/ForwardRefParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import ClickHover from "./components/ClickHover";
import User from "./components/User";
import CounterOne from "./components/CounterOne";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";

const App = () => {
  return (
    <div>
      <h1><i>Hello world</i></h1>
      <p> <b>Friends</b> is an American Tv Show.<br/><u> i will get the details for them</u></p>
      <img src="src/images/cortana.png" alt="cortana image"/>
      <a href="https://www.traversymedia.com/modern-react-from-the-beginning">is an American Tv Show  i will get the details for them</a> <br/>
      <a href="/data.html" rel="noopener noreferrer">
  Details for them
   </a>
    <table border={2} cellpadding={10}>
      <thead>
        <tr>
          <th colSpan={2}>Names</th>
        </tr>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
        </tr>
        <td rowSpan={4}>Details</td>
        <tr>
          <td>Madhavi</td>
          <td>Latha</td>
          <td>12</td>
        </tr>
        <tr>
          <td>shyam</td>
          <td>Kumar</td>
          <td>10</td>
        </tr>
        <tr>
          <td>ramana</td>
          <td>Kumar</td>
          <td>20</td>
        </tr>
      </thead>
    </table>

      {/* <Greet name="ramana">
        <p>How are you doing props</p>
      </Greet>
      <Greet name="tuy" />
      <Welcome />
      <Counter />
      <Message />
      <ParentComponent />
      <UserGreeting />
      <NameList />
      <Stylesheet /> */}
      {/* 
      <Form /> */}

      {/* <LifeCycleA /> */}
      {/* 
      <FragementDemo /> */}
      {/* <PareComp /> */}
      {/* <TodoList /> */}
      {/* <FocusInput /> */}

      {/* <RefsDemo /> */}
      {/* <ForwardRefParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
         <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroName="Joker" />
        </ErrorBoundary> */}

      {/* <ClickCounter name= "Ramana" />
        <ClickHover /> */}

      {/* <User render= {(isLoggedIn) => isLoggedIn ? "Ramana" : "Guest"} /> */}

      {/* <CounterOne
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterOne
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}
    </div>
  );
};

export default App;
