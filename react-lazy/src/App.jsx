import React from 'react'
import {lazy ,Suspense} from 'react'
const Component1 = lazy(()=> import('./Component1'))
const Component2 = lazy(()=> import('./Component2'))
function App() {
  return (
    <div>
      <Suspense fallback={<div>Component 1 is loading, please wait...</div>}>
      <Component1></Component1>
      </Suspense>
      <Suspense fallback={<div>Component 2 is loading, please wait...</div>}>
      <Component2></Component2>
      </Suspense>
    </div>
  )
}

export default App
