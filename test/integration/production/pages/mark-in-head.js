import Head from 'next/head'

export default () => {
  return (
    <div>
      Hello
      <Head>
        <script>`performance.mark('custom-mark')`</script>
      </Head>
    </div>
  )
}
