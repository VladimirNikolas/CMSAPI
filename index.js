import express from 'express';
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js';
import projectCodesRoutes from './routes/projectCodes.js'
import userGroups from './routes/userGroups.js'
import wbsCodes from './routes/wbsCodes.js'
import stream from './routes/stream.js'
import tasks from './routes/tasks.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/projectCodes', projectCodesRoutes);
app.use('/usergroups', userGroups);
app.use('/wbsCodes', wbsCodes);
app.use('/stream', stream);
app.use('/tasks', tasks);

app.get('/', (req, res) => res.send('HELLO FROM HOMEPAGE'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));