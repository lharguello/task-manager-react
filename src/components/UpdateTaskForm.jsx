import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function UpdateTaskForm({ task, closeForm }) {
  const { handleUpdateTask } = useContext(TaskContext);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateTask(task.id, {title, description, status});
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Actualizar Tarea</h2>
      <label>Título:</label>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
<br/>
      <label>Descripción:</label>
      <br/>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Describe la tarea aquí..."
        rows="4"
        cols="50"
      />
<br/>
      <label>Estado:</label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pendiente</option>
        <option value="InProgress">En Progreso</option>
        <option value="Completed">Completada</option>
      </select>
      <br />
      <br/>
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={closeForm}>Cancelar</button>
    </form>
  );
}

export default UpdateTaskForm;
