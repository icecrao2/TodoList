import './App.css'
import { Header } from './components/Header.jsx';
import { Body } from './components/Body.jsx';

export default function App() {
  return (
    <div className="flex flex-col h-full bg-sky-300">
      <Header title={"TODO"} />
      <Body />
    </div >
  )
}
