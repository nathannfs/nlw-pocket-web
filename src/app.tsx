import { useState } from 'react'
import { CreateGoal } from './components/create-goal'
// import { EmptyGoals } from './components/empty-goals'
// import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'

export function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <Dialog>
      <button type="button" onClick={increment}>
        Incrementar
      </button>
      <h1 className="text-4xl">{count}</h1>
      {/* <EmptyGoals /> */}

      {/* <Summary /> */}

      <CreateGoal />
    </Dialog>
  )
}
