import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function DeleteTaskButton({ taskId }) {
  const { handleDeleteTask } = useContext(TaskContext);

  const handleDelete = () => {
    if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
      handleDeleteTask(taskId);
    }
  };

  return <button onClick={handleDelete}>Eliminar Tarea</button>;
}

export default DeleteTaskButton;
