import CounterProvider  from "./context/CounterContext";
import Counter from "./component/counter";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
