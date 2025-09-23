
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
    <div  className="container">
       
        <div className="flex-item item1">This is Para 2</div>
        <div className="flex-item item2">This is Para 3</div> 
        <div className="flex-item item3">This is Para 4</div>

        <div className="flex-item item4">This is Para 2</div>
        <div className="flex-item item5">This is Para 3</div> 

        <div className="flex-item item6">This is Para 2</div>
        <div className="flex-item item7">This is Para 3</div> 
        <div className="flex-item item8">This is Para 4</div>
        <div className="flex-item item9">This is Para 5</div> 
        <div className="flex-item item10">This is Para 6</div> 
        <div className="flex-item item11">This is Para 7</div> 
        <div className="flex-item item12">This is Para 8</div> 
        <div className="flex-item item13">This is Para 9</div> 
       


       
      {/* <Greet name="ramana">
        <div>How are you doing props</div>
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
