import { highlight, languages } from 'prismjs';

/**
 * Returns code block with prism markup.
 * @param {String} snippet
 * @return {*}
 */
export default snippet => highlight(snippet, languages.javascript, 'javascript')
