import express from 'express';
// import fs from 'fs/promises';
// import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import { xssFilter } from 'helmet';
// import { pathToFileURL,fileURLToPath } from 'url';
import { CONF } from './config/env-config';
import { modifyReqWithDateTime } from './middleware/addCurrentDateTime';
import { morganLog } from './middleware/morganLog';
import { commonLog } from './utils/commonUtils/commonConsole';
import { catchBlockErrorLog } from './utils/loggerUtils/catchBlockErrorLog';

const app_server = express();

app_server.use(cors());
app_server.use(cors
    ({
        origin: CONF.FRNTEND_BASE_URL
    })
);
app_server.use(express.json({
    limit: '50mb',
}));

app_server.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}));

app_server.disable('x-powered-by');
app_server.disable('server');

app_server.use(modifyReqWithDateTime);

app_server.use(helmet());
app_server.use(xssFilter());


app_server.use(morganLog);

app_server.listen(CONF.BKND_PORT, () => {
   try{
       commonLog(`Server is running on ${CONF.API_BASE_URL}`, "info");
   }catch (error) {
       commonLog(`Error starting server: ${error}`, "error");
       catchBlockErrorLog(error, 'Server Start', 'SERVER');
   }
});