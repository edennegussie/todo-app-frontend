import './App.css';
import "tailwindcss/tailwind.css";
import Tasks from './Tasks/Tasks';


function App() {
  return (
    <main>
      <h1 className='text-blue-900 text-center'>Dashboard</h1>
      <Tasks></Tasks>
    </main>
  );
}

export default App;
