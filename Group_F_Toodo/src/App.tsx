import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import useHooks from './hooks/useHooks'

function App() {
  const { title, settitle, todos, settodos, AddTodo } = useHooks()
  return (
    <>
      <h1>Create Todos</h1>
      <form>
        <input type="text" placeholder="title" style={{ border: "1px solid red;" }} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            settitle(e.target.value)} value={title}/>
        <button type="submit" onClick={(e) => { e.preventDefault(); AddTodo(); }} >Create todo</button>
      </form>

    </>
  )
}

export default App
