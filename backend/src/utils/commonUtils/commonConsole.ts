import { whichEnv } from "../../config/env-config";
import { commonLog_T } from "../../types/types"; 

// -------------------- ALL COMMON CONSOLE LOG ----------------------------
export const commonLog = (
    valOrType?: any,
    typeOrText?: commonLog_T | string,
    logText: string = "------------>>"
) => {
    if (whichEnv === "PRODUCTION") {
        return null;
    }

    let val: any;
    let type: commonLog_T;

    // Detect shifted parameters
    if (typeof valOrType === 'string' && ['ERROR', 'INFO', 'WARN'].includes(valOrType)) {
        // Case: No `val`, first param is `type`
        val = undefined;           // No data to log
        type = valOrType as commonLog_T;
        logText = typeOrText ?? logText;   // Second param becomes logText
    } else {
        // Case: `val` is provided
        val = valOrType;
        type = typeOrText as commonLog_T || '';
    }

    let logMessage;

    if (val === undefined) {
        logMessage = "No data available";
    } else if (val instanceof Error) {
        logMessage = {
            message: val.message,
            stack: val.stack,
            name: val.name,
            code: 'code' in val ? val.code : 'N/A',
            errno: 'errno' in val ? val.errno : 'N/A',
            sqlMessage: 'sqlMessage' in val ? val.sqlMessage : 'N/A'
        };
    } else {
        try {
            logMessage = JSON.stringify(val, null, 2);
        } catch (e) {
            logMessage = String(val);
        }
    }

    // Logging based on type
    switch (type) {
        case 'ERROR':
            console.error(logText, logMessage);
            break;
        case 'INFO':
            console.info(logText, logMessage);
            break;
        case 'WARN':
            console.warn(logText, logMessage);
            break;
        default:
            console.log(logText, logMessage);
            break;
    }
    return null;
};
