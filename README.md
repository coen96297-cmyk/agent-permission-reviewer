# Agent permission reviewer

Compare proposed permissions with the access required for a specific agent task.

## Try it

Open `index.html` in a browser. The app works offline and requires no installation, API keys or backend.

Start with the draft-reply workflow and remove permission to send. Then switch to audit-log summarisation. The reviewer models task requirements locally. Applying a change affects only the simulation.

## Run the tests

With Node.js 20 or later, run `node --test review.test.js` from this directory.

## Source

`logic.js` implements the review rules. `app.js` connects them to the form in `index.html`.

