import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Tournament from './tournament/Tournament'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-body">
          <img loading="lazy" src="Red_Bull_Wololo_Legacy_logo.png" alt="Red Bull Wololo Legacy Logo" height="200" />
          <Tournament />
        </header>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
