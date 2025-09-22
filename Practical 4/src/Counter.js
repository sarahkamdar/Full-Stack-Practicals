import { useHookstate } from '@hookstate/core';
import { counterState } from './counterState';

const Counter = () => {
    const count = useHookstate(counterState);

    return (
        <div>
            <h1>Counter: {count.get()}</h1>
            <button onClick={() => count.set(p => p + 1)}>Increment</button>
            <button onClick={() => count.set(p => p - 1)}>Decrement</button>
            <button onClick={() => count.set(0)}>Reset</button>
        </div>
    );
};

export default Counter;