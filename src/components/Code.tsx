import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CodeBlockProps {
  children: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="bg-[#2B2B2B] rounded-md">
      <div className="flex w-full justify-between rounded-t-lg border-gray-700 bg-[#19171d] px-3 py-2">
        <div className="flex items-center gap-2 text-gray-400">
          <span>{language}</span>
        </div>
        <div className="flex w-full justify-end text-gray-400">
          <CopyToClipboard text={children} onCopy={handleCopy}>
            <button>{copied ? 'Copied!' : 'Copy'}</button>
          </CopyToClipboard>
        </div>
      </div>
      <SyntaxHighlighter showLineNumbers language={language} style={darcula}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};
