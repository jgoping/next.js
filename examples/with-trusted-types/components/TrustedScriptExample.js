import { __unsafeCreateTrustedScript } from '../trusted-types'

export default function TrustedScriptExample() {
  const unsafe = () => {
    const script = document.createElement('script')
    script.textContent =
      "console.log('This script content was not set safely.')"
    document.body.appendChild(script)
  }

  const safe = () => {
    const script = document.createElement('script')
    script.textContent = __unsafeCreateTrustedScript(
      "console.log('This script content was set safely.')"
    )
    document.body.appendChild(script)
  }

  return (
    <div>
      <h2>Trusted Script Example</h2>
      <p>
        The two buttons below will set the content of a script to a
        'console.log' statement using the 'textContent' property.
      </p>
      <button onClick={unsafe}>
        Set script content without using Trusted Types
      </button>
      <button onClick={safe}>Set a script content using Trusted Types</button>
    </div>
  )
}
