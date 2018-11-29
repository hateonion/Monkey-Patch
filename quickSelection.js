const selectionRange = window.getSelection().getRangeAt(0);
const selectedElements = Array.from(selectionRange.cloneContents().children);

/**
 *
 * @param {string} tagName
 * @param {Element} element
 * @returns {Element}
 */
function recursiveGetTagFor(tagName, element) {
  let currentElement = element;
  if(currentElement.localName === tagName) {
    return currentElement;
  }
  return recursiveGetTagFor(tagName, currentElement.firstElementChild);
}

/**
 *
 * @param {string} prev
 * @param {string} next
 */
const reducer = (prev, next) => `${prev}\n${next}`;
const concatedText = selectedElements.map(element => recursiveGetTagFor('a', element)).reduce(reducer);
