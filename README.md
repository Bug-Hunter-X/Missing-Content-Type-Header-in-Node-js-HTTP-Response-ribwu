# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common yet easily overlooked error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior in the client browser, such as incorrect rendering of the response or errors in handling the data.

## The Bug

The `bug.js` file shows a simple HTTP server that sends a 'Hello World!' message without specifying the `Content-Type`.  This omission can cause the browser to misinterpret the response, potentially leading to blank pages or unexpected character encoding.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle this: setting the `Content-Type` header in the response to `text/plain` (or the appropriate type depending on the response content). This ensures that the browser correctly interprets the response data.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `node bug.js`.
4. Open your browser and visit `http://localhost:3000`. Observe the potential issues (or lack thereof if the browser is clever enough to handle this).
5. Run `node bugSolution.js`.
6. Open your browser and visit `http://localhost:3000`. Observe the correct handling of the response.
