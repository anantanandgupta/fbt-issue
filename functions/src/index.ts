import * as functions from 'firebase-functions';

import * as express from 'express';

const app: express.Application = express();
const appRouter: express.Router = express.Router();

appRouter.get('/test-get', (req, res) => {
    return res.status(200).json({
        ResponseCode: 200,
        ResponseMessage: 'Success',
        ResponseData: {
            Message: 'This call was successful'
        }
    })
});

appRouter.delete('/test-delete', (req, res) => {
    return res.status(200).json({
        ResponseCode: 200,
        ResponseMessage: 'Success',
        ResponseData: {
            Message: 'This call was successful'
        }
    })
});

app.use('/api', appRouter);
app.use('/**', (req, res) => {
    return res.status(404).json({
        ResponseCode: 404,
        ResponseMessage: 'Not Found',
        ResponseData: {
            Message: 'We are not able to locate the resource you are looking for.'
        }
    });
  });

const api = functions.https.onRequest(app);

export {
    api
};