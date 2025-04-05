import { createContext, useState, useEffect } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "../services/taskService";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      
      const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
      };
      loadTasks();
    } catch {
      localStorage.removeItem("token");     
      window.location.reload(); 
    }
  }, []);

  const handleAddTask = async (task) => {
    try {
      await addTask(task);
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("No se pudo agregar la tarea.");
    }
  };

  const handleUpdateTask = async (taskId, updatedTask) => {
    try {
      await updateTask(taskId, updatedTask);
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("No se pudo actualizar la tarea.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const success = await deleteTask(taskId);
      if (success) {
      const data = await fetchTasks();
      setTasks(data);
      }
    } catch (error) {
      console.error("No se pudo eliminar la tarea.");
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleUpdateTask, handleDeleteTask  }}>
      {children}
    </TaskContext.Provider>
  );
};