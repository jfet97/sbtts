const fs = require('fs');

const pipe = function () {
    const functionalPipe = (fns) => x => fns.reduce((v, f) => f(v), x);
    
    return async function pipe(inputStream, outputStream, ...modifiers) {

        const pipedFunctions = modifiers.length ? functionalPipe(modifiers) : null;

        for await (const chunk of inputStream) {
            if (pipedFunctions) outputStream.write(await pipedFunctions(chunk));
            else outputStream.write(chunk);
        }
        
        return outputStream;
    }
}();

exports.pipe = pipe;
