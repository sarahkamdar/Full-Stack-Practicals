import "./App.css";
import Counter from "./components/Counter";
import './index.css';

export default function CounterApp() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Counter />
    </div>
  );
}