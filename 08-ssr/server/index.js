import React from 'react';
import { renderToString } from 'react-dom/server';
import Express from 'express';
import bodyParser from 'body-parser';
import App from '../client/components/App.jsx'

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', function(req, res) {
  console.log('Received app get call')

  const reactApp = renderToString(<App />);
  let indexHtml = `<html><head></head><body><div id="root">${reactApp}</div></body><script src="dist/index_bundle.js"></script></html>`;
  res.send(indexHtml);
});

app.listen(3000, () => console.log('Server listening!'))
