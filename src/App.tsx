import "./App.css";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";
import { DarkProvider } from "./contexts/DarkContext";

export default function App() {
  return (
    <DarkProvider>
      <Header />
      <TodoCard />
    </DarkProvider>
  );
}
