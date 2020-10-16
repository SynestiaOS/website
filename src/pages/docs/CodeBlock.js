import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {pojoaque} from "react-syntax-highlighter/dist/esm/styles/prism";
import {asm6502, bash, c, cpp, clike, cmake,nasm,wasm} from "react-syntax-highlighter/dist/esm/languages/prism";

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    };

    static defaultProps = {
        language: null
    };

    componentWillMount() {
        SyntaxHighlighter.registerLanguage("c", c);
        SyntaxHighlighter.registerLanguage("cpp", cpp);
        SyntaxHighlighter.registerLanguage("asm6502", asm6502);
        SyntaxHighlighter.registerLanguage("bash", bash);
        SyntaxHighlighter.registerLanguage("c", clike);
        SyntaxHighlighter.registerLanguage("cmake", cmake);
        SyntaxHighlighter.registerLanguage("nasm", nasm);
        SyntaxHighlighter.registerLanguage("wasm", wasm);
    }

    render() {
        const {language, value} = this.props;
        return (
            <figure className="highlight">
                <SyntaxHighlighter language={language} style={pojoaque}>
                    {value}
                </SyntaxHighlighter>
            </figure>
        );
    }
}

export default CodeBlock;
