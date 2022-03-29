import TrustedHTMLExample from '../components/TrustedHTMLExample'
import TrustedScriptExample from '../components/TrustedScriptExample'
import TrustedScriptURLExample from '../components/TrustedScriptURLExample'

export default function IndexPage() {
  return (
    <div>
      <h1>Trusted Types Examples</h1>
      <p>Check the console to see the results of pressing each button!</p>

      <TrustedHTMLExample />
      <TrustedScriptExample />
      <TrustedScriptURLExample />
    </div>
  )
}
