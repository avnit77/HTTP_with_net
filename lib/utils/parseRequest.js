module.exports = rawRequest => {
    const parsedRequest = {};

    const space = rawRequest.indexOf(' ');
    const path = rawRequest.indexOf('H');

    parsedRequest.method = rawRequest.slice(0, space);
    parsedRequest.path = rawRequest.slice(space + 1, path - 1);

    if(rawRequest.includes('{"')){
        const startBody = rawRequest.indexOf('{');
        parsedRequest.body = rawRequest.slice(startBody, rawRequest.length);
    }
};
