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
   const writableStream = require('fs').createWriteStream('write.txt');
   ```

   3 Create one or more functions to modify each chunk asynchronously:
   ```js
   const toString = chunk => chunk.toString();
   const toUpperCase = string => string.toUpperCase();
   const crypt = uppercasedString => [...uppercasedString].reverse().join('');
   ```

   4 Import my pipe function:
   ```js
   const { pipe } = require('./sbtts');
   ```

   5 Use it:
   ```js
   // pipe(inputStream, outupStream [, ...modifiers]);
   await pipe(readableStream, writableStream, toString, toUpperCase, crypt);
   ```

   6 It will resolve in the `writableStream` You could use it to close the output stream:
   
   ```js
   // pipe(inputStream, outupStream [, ...modifiers]);
   const outputStream = await pipe(readableStream, writableStream, toString, toUpperCase, crypt);
   outputStream.end(); // same as writableStream.end()
   ```
   
   
 # why
 
 It seems a bit faster than transform streams and it is simpler. I've tested it against them using Benchmark.js.
 Obviously my API is not as powerful as transform streams, but it could become. (I'm a dreamer).

