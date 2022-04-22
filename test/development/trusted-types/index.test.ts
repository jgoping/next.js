import { createNext } from 'e2e-utils'
import { NextInstance } from 'test/lib/next-modes/base'
import { findPort, launchApp, renderViaHTTP } from 'next-test-utils'
import { join } from 'path'

describe('Trusted Types', () => {
  let next: NextInstance

  const context: any = {}
  const appDir = join(__dirname, '../')

  beforeAll(async () => {
    next = await createNext({
      files: {
        'pages/index.js': `
          import Script from 'next/script'

          export default function Page() {
            const a = <Script>console.log('This Script should throw a Trusted Types violation.')</Script>
            return <p>HELLO FROM THE TRUSTED TYPES TEST! {1+1}</p>
          } 
        `,
      },
      dependencies: {},
    })

    context.appPort = await findPort()
    context.server = await launchApp(appDir, context.appPort)
  })
  afterAll(() => next.destroy())

  it('should work', async () => {
    const res = await renderViaHTTP(next.url, '/')
    console.log(res)
    // expect(res.status).toBe(404)
  })
})
