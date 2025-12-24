import express from 'express';
import bodyParser from 'body-parser';
import basicAuth from 'express-basic-auth';
import userRoutes from './routes/users.js';
import projectCodesRoutes from './routes/projectCodes.js'
import userGroups from './routes/userGroups.js'
import wbsCodes from './routes/wbsCodes.js'
import stream from './routes/stream.js'
import tasks from './routes/tasks.js'
import stayAwake from './routes/keepAwake.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(basicAuth({
    users: { [process.env.API_USER]: process.env.API_PASS }, // change to your username/password
    challenge: true                     // shows login popup in browser
}));

if (!process.env.API_USER || !process.env.API_PASS) {
  console.warn('⚠️ API_USER or API_PASS is not set');
}

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/projectCodes', projectCodesRoutes);
app.use('/usergroups', userGroups);
app.use('/wbsCodes', wbsCodes);
app.use('/stream', stream);
app.use('/tasks', tasks);
app.use('/', stayAwake);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));