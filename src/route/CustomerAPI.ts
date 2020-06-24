import express from 'express';
import * as path from 'path';
//@ts-ignore
import swaggerUi from 'swagger-ui-express';
//@ts-ignore
import swaggerJSDoc from 'swagger-jsdoc';
import {swaggerDocument} from '../docs/swaggerDocument'

const router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get('/', (req, res) => {
    res.send('Hello');
});
router.get('/hello', (req, res) => res.json({
    message: `Hello ${req.query.name}!`,
    yourName: req.query.name,
}));

export default router;
