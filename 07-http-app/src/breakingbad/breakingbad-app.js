/**
 * @returns {Object<Object>} quote information 
 */
const fetchQuote = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/v1/quotes`);
    const data = await res.json();
    // console.log(data[0])
    return data[0];
}

/**
 * Aplicación de Breaking Bad
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async ( element ) => {
    document.querySelector('#app-title').innerHTML = 'Breakingbad App';

    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');

    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = ( data ) => {
        quoteLabel.innerText = data.quote;
        authorLabel.innerText = data.author; 
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    const loadQuote = async () => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    }

    nextQuoteButton.addEventListener('click', loadQuote);

    loadQuote();
}