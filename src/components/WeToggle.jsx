import { useState } from 'react'

// The one interactive idea on the page (design turn 3c): the word "we" in
// "we had an inkling" resolves into the two people it stands for. Hover opens
// it on desktop; tap toggles it so it also works where there's no hover.
const PEOPLE = [
  { name: 'pratyay', href: 'https://pratyaypandey.com', external: true },
  { name: 'jai', href: 'https://github.com/jaisharmz', external: true },
]

export default function WeToggle() {
  const [open, setOpen] = useState(false)

  return (
    <span
      className={`we${open ? ' is-open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false)
        }
      }}
      onClick={() => setOpen((v) => !v)}
    >
      <span className="we-state we-state-closed">
        <span className="we-word">we</span>
      </span>
      <span className="we-state we-state-open" aria-hidden={!open}>
        {PEOPLE.map((p, i) => (
          <span key={p.name}>
            {i > 0 && ' & '}
            <a
              className="we-name"
              href={p.href}
              tabIndex={open ? 0 : -1}
              {...(p.external && { target: '_blank', rel: 'noopener' })}
            >
              {p.name}
            </a>
          </span>
        ))}
      </span>
    </span>
  )
}
