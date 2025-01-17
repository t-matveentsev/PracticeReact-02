import Gallery from "./components/Gallery/Gallery";
import Counter from "./components/Counter/Counter";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import TodoList from "./components/TodoList/TodoList";

export default function App() {
  return (
    <div>
      <Gallery />
      <Counter />
      <ColorPicker />
      <TodoList />
    </div>
  );
}
