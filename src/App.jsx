import './App.css';
import './UserInterface'
import UserInterface from './UserInterface';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React!</h1>
      <p>The UI below will be exported.</p>
      <UserInterface/>
    </div>
  );
};

export default App;
