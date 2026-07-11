import GraphMark from './GraphMark'
import WeToggle from './WeToggle'

// Mark, wordmark, and the tagline that carries the whole personality of the
// site: "// we had an inkling", read like a comment in a readme.
export default function Masthead() {
  return (
    <header>
      <GraphMark />
      <div className="wordmark">inkling</div>
      <p className="tagline">
        <span className="slashes">//</span> <WeToggle /> had an inkling
      </p>
    </header>
  )
}
