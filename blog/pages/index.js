import Head from 'next/head'
import { Button } from 'antd'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roy's Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button type="primary">这是一个按钮</Button>
      </div>
    </div>
  )
}
