'use stricts';

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);
const url = 'http://localhost:4000';
let token;

describe('Conexion con el servidor', () => {
  it('verificar conexion', (done) => {
    chai.request(url).get('/').end((err, response) => {
      console.log(response.body);
      expect(response).to.have.status(200);
      done();
    });
  });
});

describe('Autenticacion', () => {
  // it('signup', (done) => {
  //   chai.request(url).post('/register').send({
  //     email: 'testChai@mail.com',
  //     username: 'testChai',
  //     password: 'chai123',
  //   }).end((err, response) => {
  //     console.log(response.body);
  //     console.log('ERROR: ', err);
  //     expect(response).to.have.status(200);
  //     done();
  //   });
  // });

  it('login', (done) => {
    chai.request(url).post('/login').send({
      email: 'testChai@mail.com',
      password: 'chai123',
    }).end((err, response) => {
      token = response.body.token;
      console.log(response.body.token);
      expect(response).to.have.status(200);
      done();
    });
  });
});

describe('Consumo de API', () => {
  it('Guardar imagen', (done) => {
    chai.request(url).post('/saveImages')
      .set('authorization', `Bearer ${token}`)
      .send({
        imageName: 'imagen1',
        base64: 'sdadask24214234fadasd',
        features: ['feature1', 'feature2', 'feature3'],
        year: '2022',
        gender: 'female',
        type: 'asda',
        origin: 'web',
        quarter: 'Q5',
      })
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('Obtener imagenes', (done) => {
    chai.request(url).get('/getImages')
      .set('authorization', `Bearer ${token}`)
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('Borrar imagen', (done) => {
    chai.request(url).post('/deleteImage')
      .set('authorization', `Bearer ${token}`)
      .send({
        imageName: 'imagen1',
      })
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('Obtener una sola imagen', (done) => {
    chai.request(url)
      .get('/getImage/5fd2379a81b2441f01a4830d')
      .set('authorization', `Bearer ${token}`)
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('Eliminar feature', (done) => {
    chai.request(url)
      .post('/deleteFeature')
      .set('authorization', `Bearer ${token}`)
      .send({
        name: 'imagen1',
        feature: 'feature1',
      })
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('Actualizar feature', (done) => {
    chai.request(url)
      .post('/updateFeature')
      .set('authorization', `Bearer ${token}`)
      .send({
        name: 'imagen1',
        feature: 'feature1',
      })
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });

  it('Filtrar imágenes por año y origen', (done) => {
    chai.request(url)
      .get('/getImagesFilter')
      .set('authorization', `Bearer ${token}`)
      .send({
        year: '2022',
        origin: 'web',
      })
      .end((err, response) => {
        console.log(response.body);
        expect(response).to.have.status(200);
        done();
      });
  });
});
