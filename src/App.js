
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
        <h1>hello my name is Madhavi Aneboina <span> Iam a developer</span></h1>
        <h2>Iam madhuravani Anneboina, iam into testing</h2>
        <h3>iam venkata into devlopement leader</h3>
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
