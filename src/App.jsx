import { TaskProvider } from "./context/TaskContext";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}

export default App;
