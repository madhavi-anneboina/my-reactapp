import "bulma/css/bulma.css";
import "./index.css";
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
      {/* <div class="head">
        <header class="flex-header">This is Header</header>
        <main class="flex-main">
          <sidenav class="flex-nav">This is sidenav</sidenav>
          <article class="flex-article">This is article</article>
          <aside class="flex-side">This is aside</aside>
        </main>

        <footer class="flex-footer">This is footer</footer>
      </div> */}

      <div class="yellow">Hello this is ramana</div>
      <span class="orange">Hello this is madhavi </span>
        {/* <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul> */}

      <h2>Cascade</h2> 
      <h3  id = "title"
      class="sub-headiing">Specificity</h3>
      

      <div class="inheritance">
       <p>inheritance</p>
      </div>
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

      <table>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </tr>
        <tr>
          <td>John</td>
          <td>Doe</td>
          <td>80</td>
        </tr>
      </table>

      <div class="content1">Sample content - 1</div>
      <span class="content2">Sample content - 2</span>
    </div>
  );
};

export default App;
