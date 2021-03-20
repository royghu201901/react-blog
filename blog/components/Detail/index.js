import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'
import CodeBlock from '../CodeBlock'

import markdown from '../../public/blog/20210319.md'

const Detail = () => {
  return (
    <div className="detailed-content">
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