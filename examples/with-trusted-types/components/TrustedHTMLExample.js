import { __unsafeCreateTrustedHTML } from '../trusted-types'

export default function TrustedHTMLExample() {
  const unsafe = () => {
    document.getElementById('message').innerHTML =
      'This message was not set safely.'
  }

  const safe = () => {
    document.getElementById('message').innerHTML = __unsafeCreateTrustedHTML(
      'This message was set safely.'
    )
  }

  return (
    <div>
      <h2>Trusted HTML Example</h2>
      <p>
        The two buttons below will set a message using the 'innerHTML' property.
      </p>
      <button onClick={unsafe}>
        Display a message without using Trusted Types
      </button>
      <button onClick={safe}>Display a message using Trusted Types</button>
      <div id="message">(The message will go here)</div>
    </div>
  )
}
