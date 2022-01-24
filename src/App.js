import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import TodosContextProvider from './context/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <Header />
      <div className="Todo App">
        <TodoForm />
        <TodoList />
      </div>
    </TodosContextProvider>
  );
}

export default App;
