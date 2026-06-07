import { create } from 'zustand'

// 1️⃣ Create the store with state and actions
const useCounterStore = create((set) => ({
  // State
  count: 0,

  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),

  // TODO: Add a decrease action here
}))

export default useCounterStore
