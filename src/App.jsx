import Masthead from './components/Masthead'
import Projects from './components/Projects'
import './styles.css'

// Warm paper, one column, masthead up top and projects down at the bottom with
// a deliberate stretch of quiet between them.
export default function App() {
  return (
    <main className="page">
      <div className="column">
        <Masthead />
        <div className="spacer" />
        <Projects />
      </div>
    </main>
  )
}
