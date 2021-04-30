import { useEffect, useState } from "react";

const App = () => {
  const [quoteList, setQuoteList] = useState([]);
  const [currentQuote, setCurrentQuote] = useState("");
  const fetchQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuoteList(data);
        setCurrentQuote(data[Math.floor(Math.random() * data.length)]);
      });
  };

  const generateQuote = () => {
    setCurrentQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);
  useEffect(() => {
    generateQuote();
  }, []);

  return (
    <div className="row d-flex align-items-center justify-content-center">
      <div id="quote-box" className="col-6 card mt-5">
        <div className="card-body">
          <h4 id="text" className="">
            {currentQuote && currentQuote["text"]}
          </h4>
          <div className="row">
            <p id="author" className="blockquote-footer col-8">
              {currentQuote && currentQuote["author"]}
            </p>
            <a
              id="new-quote"
              onClick={generateQuote}
              className="btn btn-light col-2"
            >
              New Quote
            </a>
            <a
              href="twitter.com/intent/tweet"
              target="_blank"
              id="tweet-quote"
              className="btn btn-light col-2"
            >
              Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
