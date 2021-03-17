import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roy's Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Row className="main" type="flex" justify="center">
        <Col
          className="left"
          xs={24} sm={24} md={10} lg={10} xl={10}
        >
          左侧
        </Col>
        <Col
          className="right"
          xs={0} sm={0} md={8} lg={8} xl={6}
        >
          右侧
        </Col>
      </Row>
    </div>
  )
}
