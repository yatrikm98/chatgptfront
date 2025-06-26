import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './AnswerDisplay.css'

const AnswerDisplay = ({ answerToDisplay }) => {
    return (
        <div className='markdownMainDiv'>
            <Markdown
                children={answerToDisplay}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={{
                                    ...prism,
                                    'pre[class*="language-"]': {
                                        ...prism['pre[class*="language-"]'],
                                        background: '#f9f9f9',
                                        borderRadius: '6px',
                                        border: '1px solid #e9e9e9',
                                        // color:'#383a42'
                                    },
                                    keyword: {
                                        "color": "#a626a4"
                                    },
                                    constant: {
                                        "color": "#a626a4"
                                    },
                                    comment: {
                                        "color": "#a0a1a7",
                                        "fontStyle": "italic"
                                    },
                                    variable: {
                                        "color": "#383a42"
                                    },
                                    function: {
                                        "color": "#4078f2"
                                    },
                                    tag: {
                                        "color": "#e45649"
                                    },
                                    // 'code[class*="language-"]': {
                                    //   ...prism['code[class*="language-"]'],
                                    //   background: 'transparent', // no double bg
                                    // },
                                }}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={`${className} codeCss`} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            />
        </div>
    )
}

export default AnswerDisplay