import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  // Estado del formulario
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!title.trim()) {
      alert("Por favor escribe un título");
      return;
    }

    setLoading(true);

    try {
      // Llamada a la API
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          completed: false,
        }),
      });

      if (response.ok) {
        // Redirigir a la lista
        navigate("/todos");
      } else {
        alert("Error al crear el todo");
      }
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Todo</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Escribe tu tarea..."
            disabled={loading}
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? "Guardando..." : "Agregar Todo"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/todos")}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
