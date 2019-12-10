module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
    return `HTTP/1.1 ${responseObject.status}
      Accept-Ranges: bytes
      Content-Length: ${responseObject.body.length}
      Content-Type: ${responseObject.contentType}
      ${responseObject.body}`;
};