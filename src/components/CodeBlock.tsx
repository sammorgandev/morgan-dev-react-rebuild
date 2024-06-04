import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
	children: React.ReactNode;
	language?: string;
}
class CodeBlock extends PureComponent<CodeBlockProps> {
	static propTypes = {
		children: PropTypes.node,
		language: PropTypes.string,
	};

	static defaultProps = {
		language: null,
	};

	render() {
		const { language, children } = this.props;
		return (
			<SyntaxHighlighter language={language} style={atomDark}>
				{children as string}
			</SyntaxHighlighter>
		);
	}
}

export default CodeBlock;
