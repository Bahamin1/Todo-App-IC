import { useQueryCall, useUpdateCall } from '@ic-reactor/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

export default function EnhancedTodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const {
    data: fetchedTodos,
    call: refetchTodos,
    loading,
    error,
  } = useQueryCall({
    functionName: 'getToDos',
  });

  useEffect(() => {
    if (fetchedTodos && Array.isArray(fetchedTodos)) {
      setTodos(fetchedTodos);
    }
  }, [fetchedTodos]);

  const { call: addToDo } = useUpdateCall({
    functionName: 'addToDo',
    onSuccess: () => {},
  });

  const { call: changeStatus } = useUpdateCall({
    functionName: 'changeStatus',
    onSuccess: () => {
      refetchTodos();
    },
  });

  const { call: deleteToDo } = useUpdateCall({
    functionName: 'deleteToDo',
    onSuccess: () => {},
  });

  const handleAddClick = async () => {
    if (inputValue.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        todo: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      addToDo([inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteClick = async (id: number) => {
    deleteToDo([id]);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = async (id: number) => {
    await changeStatus([id]);
    setInputValue('');
    console.log('Toggle todo:', id);
  };

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="h-screen w-screen bg-gradient-animated flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            ToDo App
          </h1>
          <div className="flex flex-col mb-6 space-y-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new task..."
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-t-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-purple-600 w-full"
            />
            <button
              onClick={handleAddClick}
              className="px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full transition duration-300 ease-in-out"
            >
              Add
            </button>
          </div>
          <AnimatePresence>
            {todos.map((todo: Todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={`flex items-center justify-between p-4 mb-4 rounded-lg ${
                    todo.completed ? 'bg-gray-100' : 'bg-white'
                  } shadow-md transition duration-300 ease-in-out transform hover:scale-105`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="form-checkbox h-5 w-5 text-purple-600 rounded focus:ring-purple-400"
                    />
                    <span
                      className={`${
                        todo.completed
                          ? 'line-through text-gray-500'
                          : 'text-gray-800'
                      } text-lg`}
                    >
                      {todo.todo}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDeleteClick(todo.id)}
                    className="p-2 text-red-500 rounded-full hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
