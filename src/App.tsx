import { useState } from "react";
import "./App.css";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of Goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <CourseGoal title="Learn Typescript">
        <p>Understanding basics of typescript</p>
      </CourseGoal>
    </main>
  );
}

export default App;
