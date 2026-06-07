import useCounterStore from './useCounterStore'

export default function Counter() {
  // 2️⃣ Use the store - subscribe to state and actions
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrease = useCounterStore((state) => state.decrease)

  return (
    <div className="counter-container">
      <div className="counter-display">
        <h2>Count: {count}</h2>
      </div>
      <div className="counter-buttons">
        <button onClick={increment} className="counter-button">
          ➕ Increment
        </button>
        <button onClick={decrease} className="counter-button">
          ➖ Decrease
        </button>
      </div>
    </div>
  )
}
