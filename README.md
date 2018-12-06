# sbtts
something-better-than-transform-streams (Maybe) - Node v10 minimum


# how to
   1 Create a readable stream
   ```js
   const readableStream = ...
   ```
   like for example:
   ```js
   const readableStream = require('fs').createReadStream('read.txt', {
           highWaterMark: 1024
   });
   ```

   2 Create a writable stream
   ```js
   const writableStream = ...
   ```
   like for example:
   ```js
   const readableStream = require('fs').createWriteStream('write.txt');
   ```

   3 Create one or more functions to modify each chunk asynchronoulsy:
   ```js
   const toString = chunk => chunk.toString();
   const toUpperCase = string => string.toUpperCase();
   const crypt = uppercasedString => [...uppercasedString].reverse().join('');
   ```

   4 Import my pipe function:
   ```js
   const { pipe } = require('sbtts');
   ```

   5 Use it:
   ```js
   // pipe(readableStream, writableStream [, ...functions]);
   await pipe(readableStream, writableStream, toString, toUpperCase, crypt);
   ```

   6 It will resolve in the `writableStream`, use it if you need.

