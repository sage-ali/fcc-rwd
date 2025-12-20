const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const htmlRawOutput = document.getElementById('html-output');

// Markdown regex rules and match html replacement strings
const markdownRules = [
  /^# (.*$)/gim, // Heading 1
  /^## (.*$)/gim, // Heading 2
  /^### (.*$)/gim, // Heading 3
  /([\*_]{2})(.+?)\1(?![*_])/g, // Bold
  /(?<![\*_])([\*_])(?!\1)(.+?)\1(?![\*_])/g, // Italic
  /!\[(.*?)\]\((.*?)\)/g, // Image
  /\[(.*?)\]\((.*?)\)/g, // Link
  /^> (.*$)/gim // Blockquote
];

const htmlReplacements = [
  '<h1>$1</h1>',
  '<h2>$1</h2>',
  '<h3>$1</h3>',
  '<strong>$2</strong>',
  '<em>$2</em>',
  '<img alt="$1" src="$2" />',
  '<a href="$2">$1</a>',
  '<blockquote>$1</blockquote>'
];

/**
 * Converts markdown text into HTML.
 * @returns {void}
 */
const convertMarkdown = function convertMarkdown() {
  let markdownText = markdownInput.value;
  for (let index = 0; index < markdownRules.length; index++) {
    const markdownRegex = markdownRules[index];
    if (!markdownRegex.test(markdownText)) continue;
    markdownText = markdownText.replaceAll(markdownRegex, htmlReplacements[index]);
  }
  htmlRawOutput.textContent = markdownText;
  preview.innerHTML = markdownText;
  console.log(markdownText);
  return markdownText;
};

markdownInput.addEventListener('input', convertMarkdown);
