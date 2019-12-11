const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('handles a GET', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.text).toEqual('hi');
      });
  });

  it('handles a POST', () => {
    return request(app)
      .post('/echo')
      .send('bye')
      .then(response => {
        expect(response.text).toEqual('bye');
        expect(response.status).toEqual(200);
      });
  });

  it('handles a GET /red route', () => {
    return request(app)
      .get('/red')
      .then(response => {
        expect(response.text).toEqual('<h1>red</h1>');
      });
  });

  it('handles a GET /green route', () => {
    return request(app)
      .get('/green')
      .then(response => {
        expect(response.text).toEqual('<h1>green</h1>');
      });
  });

  it('handles a GET /blue route', () => {
    return request(app)
      .get('/blue')
      .then(response => {
        expect(response.text).toEqual('<h1>blue</h1>');
      });
  });
});
