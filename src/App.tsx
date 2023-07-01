import "./App.css";
import TodoCard from "./components/TodoCard";
import Header from "./components/Header";
import { DarkProvider } from "./contexts/DarkContext";
import { useState } from "react";

const filters = ["all", "active", "completed"];

export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  const handleFilterChange = (filter: string) => setFilter(filter);

  return (
    <DarkProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <TodoCard />
    </DarkProvider>
  );
}
