import './App.css';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';

function App() { 
  
  
  return (
    <AuthProvider>
      <RoutesApp/>
    </AuthProvider> 
  );        
 
}

export default App;

