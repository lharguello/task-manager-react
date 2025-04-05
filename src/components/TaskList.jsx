import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import UpdateTaskForm from "./UpdateTaskForm";
import DeleteTaskButton from "./DeleteTaskButton";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status}</td>
                <td>
                  <button onClick={() => setEditingTask(task)}>Editar</button>
                  <DeleteTaskButton taskId={task.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingTask && (
        <UpdateTaskForm task={editingTask} closeForm={() => setEditingTask(null)} />
      )}
    </div>
  );
}

export default TaskList;
