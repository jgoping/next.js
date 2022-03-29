import { __unsafeCreateTrustedScriptURL } from '../trusted-types'

export default function TrustedScriptURLExample() {
  const unsafe = () => {
    const script = document.createElement('script')
    script.src = "data:,console.log('This script src was not set safely.')"
    document.body.appendChild(script)
  }

  const safe = () => {
    const script = document.createElement('script')
    script.src = __unsafeCreateTrustedScriptURL(
      "data:,console.log('This script src was set safely.')"
    )
    document.body.appendChild(script)
  }

  return (
    <div>
      <h2>Trusted Script URL Example</h2>
      <p>
        The two buttons below will set the source of a script to a 'console.log'
        statement using the 'src' property.
      </p>
      <button onClick={unsafe}>
        Set script src without using Trusted Types
      </button>
      <button onClick={safe}>Set a script src using Trusted Types</button>
    </div>
  )
}
