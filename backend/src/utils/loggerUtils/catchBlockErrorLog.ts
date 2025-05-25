import moment from 'moment';
import { whichEnv } from '../../config/env-config';
import { Environment_T, whichLoc_T } from '../../types/types';
// import { validateInput, regex } from '../commonUtils/commonRegex';
import fs from 'fs/promises';
import path from 'path';




export const catchBlockErrorLog = (error: any, occurfileName: string = 'Test Loc', useLoc: whichLoc_T) => {
    const currentEnvType = whichEnv;

    // let modFileName: string = '';
    // if (validateInput(occurfileName, regex.fileNameReplacer)) {
    //     modFileName = occurfileName.replace(regex.fileNameReplacer, '_');
    // }

    let logMessage = `${moment().format('DD/MMM/YYYY || H:mm:ss || [GMT]Z')} - Error: ${error.message}\n${error.stack}\n\n`;
    storeFolderToServer(logMessage, occurfileName, useLoc, currentEnvType).catch((err: any) => {
        console.error('Failed to send error to server:', err);
    });
};

const storeFolderToServer = async (logMessage: string, occurfileName: string, useLoc: whichLoc_T, envType: Environment_T) => {
    const logsDir = path.join(process.cwd(), `${envType}_CatchBlock`);
    try {
        await fs.mkdir(logsDir, { recursive: true });
        const currentDate = moment().format('YYYYMMDD');
        const logFilePath = path.join(logsDir, `${useLoc}_CatchError_${currentDate}.log`);
        const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
        const formattedLogMessage = `[${timestamp}] [${occurfileName}] [${useLoc}] ${logMessage}\n`;

        await fs.appendFile(logFilePath, formattedLogMessage);
    } catch (fileError) {
        console.error('Failed to write error log to file:', fileError);
    }
};