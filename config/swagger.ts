import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sanderson Books API',
      version: '1.0.0',
      description: 'An API with information of Brandon Sanderson books.',
    },
  },
  apis: ['./routes/*.ts'],
};


const swaggerDocs = swaggerJsdoc(options);
export default swaggerDocs;
