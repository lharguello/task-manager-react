import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import LogoutButton from "../components/LogoutButton";
import LoginForm from "../components/LoginForm";

function Home() {
  
  const token = localStorage.getItem("token");
  return (
    <div className="container">
      <h1>Task Manager</h1>
      
      {!token ? (
        <>
        <p>Debes iniciar sesión para gestionar tus tareas.</p>
        <LoginForm />
        </>
      ) : (
        <>
          <LogoutButton />
          <AddTaskForm />
          <TaskList />
        </>
      )}
      
    </div>
  );
}

export default Home;
