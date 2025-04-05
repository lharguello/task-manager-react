import api from "./axiosConfig";
const API_URL = "https://localhost:7291/api/tasks";

export const fetchTasks = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const addTask = async (taskData) => {
  try {
    const response = await api.post(API_URL, taskData);
    return response.data;
  } catch (error) {
    console.error("Error al agregar tarea:", error);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTask) => {
  try {
    const response = await api.put(`${API_URL}/${taskId}`, updatedTask);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar tarea:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await api.delete(`${API_URL}/${taskId}`);
    return true;
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    throw error;
  }
};