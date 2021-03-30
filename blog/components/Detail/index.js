import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import CodeBlock from '../CodeBlock'

import styles from './index.module.css'

import markdown from '../../public/blog/20210315.md'

const Detail = () => {
  return (
    <div className={styles.detail}>
      <ReactMarkdown
        plugins={[gfm]}
        children={markdown}
        renderers={{
          code: CodeBlock
        }}
      />
    </div>
  )
}

export default Detail