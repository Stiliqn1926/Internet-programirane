import reactLogo from './react.svg';
import Task2 from './Task2';

export default function App() {
  return (
    <div className="App">
      <h1>Props Overview – `children` demo</h1>

      <Task2 firstName="Ivan" lastName="Danovski" title="Teacher" image={reactLogo}>
        This is the "children" prop
      </Task2>
    </div>
  );
}
