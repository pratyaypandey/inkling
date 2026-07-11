// The logo, drawn in monospace: two vermilion nodes joined to a third below.
// It's the same three-node graph as the favicon — two people and the company.
// Pure text so it costs nothing to paint and copies as ASCII.
const ART = '●───●\n ╲ ╱\n  ●'

export default function GraphMark() {
  return (
    <pre className="mark" aria-label="inkling">
      {ART}
    </pre>
  )
}
