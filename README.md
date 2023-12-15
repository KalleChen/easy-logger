# Easy Logger

A local server to show log message

## Start

```bash
pnpm install
pnpm start
```

## Usage

```js
async function log(message) {
  await fetch("http://localhost:3000/post-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}

```
