import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm'
import CodeBlock from '../CodeBlock'

import styles from './index.module.css'

// import markdown from '../../public/blog/20210315.md'

// import { withRouter } from 'next/router'

const Detail = (props) => {
  let markdown = props.content
  return (
    <div className={styles.detail}>
      <ReactMarkdown
        // plugins={[gfm]} 不是本地文件不用加载组件功能
        children={markdown}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  )
}

// export default withRouter(Detail) // 在next中使用withRouter可以利用路由传参
export default Detail