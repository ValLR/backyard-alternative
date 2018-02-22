import React, { Fragment, PureComponent } from 'react'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import ReactMarkdown from 'react-markdown'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/markdown/markdown'
import FA from '@fortawesome/react-fontawesome'
import { faUndo, faTimes, faCode, faPlus, faSave } from '@fortawesome/fontawesome-free-solid'
import { faTrashAlt } from '@fortawesome/fontawesome-free-regular'
import CreateArticle from 'mutations/CreateArticle'
import UpdateArticle from 'mutations/UpdateArticle'
import DeleteArticle from 'mutations/DeleteArticle'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/seti.css'


class   Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            content: props.data.content,
            highlight: false,
        };
        this.toggleEditing = this.toggleEditing.bind(this);
        this.setContent = this.setContent.bind(this);
        // this.save = this.save.bind(this);
        // this.addSibling = this.addSibling.bind(this);
        this.setHighlight = this.setHighlight.bind(this);
        // this.deleteArticle = this.deleteArticle.bind(this);
        this.undo = this.undo.bind(this);
    }

    setHighlight(value) {
        this.setState(() => ({highlight: value}))
    }

    setContent(content){
        this.setState(prevState => ({content}))
    }

    undo() {
        this.setState(prevState => ({
            content: this.props.data.content,
        }));
        this.codemirror.setValue(this.props.data.content)
    }

    // save() {
    //     if(this.props.content !== this.state.content) {
    //         UpdateArticle(
    //             {
    //                 ...this.props.data,
    //                 content: this.state.content
    //             },
    //             article => {
    //                 this.setState(prevState => ({
    //                     content: article.content,
    //                     editing: false,
    //                 }))
    //             }
    //         )
    //     } else {
    //         console.log('No changes')
    //     }
    // }
    //
    // addSibling() {
    //     CreateArticle(this.props.data.section.id, new Date().toString())
    // }
    //
    // deleteArticle() {
    //     DeleteArticle(this.props.data)
    // }

    toggleEditing() {
        this.setState(prevState => ({
            editing: !prevState.editing,
        }))
    }

    componentDidUpdate() {
        if(this.codemirror) {
            this.codemirror.refresh()
        }
    }

    render() {
        const article = this.props.data;
        const { editing, content, highlight } = this.state;
        const content_lineabreak = content.replace(/\\n/g,"\n");

        return <div className={`article ${highlight? 'highlighted' : ''}`}>
            <div className="content">
                <div style={{display: editing ? 'block': 'none' }} >
                    <CodeMirror
                      value={article.content}
                      options={{
                        mode: 'markdown',
                        theme: 'seti',
                        lineNumbers: true,
                        lineWrapping: true,
                      }}
                      onChange={(editor, data, value) => this.setContent(value)}
                      editorDidMount={editor => this.codemirror = editor}
                    />
                </div>
                <div style={{display: editing ? 'none': 'block' }} >
                    <ReactMarkdown
                        source={content_lineabreak}
                        renderers={{
                            code: props => ['notice', 'important'].includes(props.language) ? <Notice {...props} /> : <CodeBlock {...props} />
                        }}
                    />
                </div>
            </div>

            <div
                className="iconbar"
                onMouseEnter={() => this.setHighlight(true)}
                onMouseLeave={() => this.setHighlight(false)}
            >
                <a onClick={this.toggleEditing} ><FA icon={editing ? faTimes : faCode} /></a>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column'}} >
                    {content !== article.content &&
                        <Fragment>
                            {editing &&
                                <a><FA icon={faUndo} onClick={this.undo} /></a>
                            }
                            <a onClick={this.save} ><FA icon={faSave} /></a>
                        </Fragment>
                    }
                    {editing &&
                        <a onClick={this.deleteArticle} ><FA icon={faTrashAlt} /></a>
                    }
                    {editing ||
                        <a onClick={this.addSibling}><FA icon={faPlus} /></a>
                    }
                </div>
            </div>
        </div>
    }
}

/* Ripped from react-markdown */
function CodeBlock(props) {
  const className = props.language && `language-${props.language}`
  return <pre {...props}><code className={className}>{props.value}</code></pre>
}

function Notice(props) {
    return <div className={props.language} ><ReactMarkdown source={props.value}/></div>
}

export default Article;
