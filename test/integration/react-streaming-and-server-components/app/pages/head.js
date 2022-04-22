import React from 'react'
import Head from 'next/head'
import { __unsafeCreateTrustedScriptURL } from '../../../../lib/trusted-types'

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="style-a.css" key="my-style" />
      <link rel="stylesheet" href="style-b.css" key="my-style" />

      <script
        src={__unsafeCreateTrustedScriptURL('/test-async.js')}
        async
      ></script>
      <script
        src={__unsafeCreateTrustedScriptURL('/test-defer.js')}
        defer="yas"
      ></script>
    </Head>
    <h1>Streaming Head</h1>
  </div>
)
