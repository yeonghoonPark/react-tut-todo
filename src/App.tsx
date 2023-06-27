import "./App.css";
import TodoCard from "./components/TodoCard";
import DarkTest from "./contexts/DarkContext";

export default function App() {
  return (
    <div className='App'>
      <DarkTest>
        <TodoCard />
      </DarkTest>
    </div>
  );
}
