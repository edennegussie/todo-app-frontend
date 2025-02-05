import './App.css';
import "tailwindcss/tailwind.css";
import Tasks from './Tasks/Tasks';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className='text-blue-900 text-center'>Dashboard</h1>
      <Tasks></Tasks>
    </QueryClientProvider>
  );
}

export default App;
