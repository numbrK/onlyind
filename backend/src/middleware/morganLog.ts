import { logger,basic_LOG } from "../utils/loggerUtils/loggerUtils";
import morgan from "morgan";
import moment from "moment";
import { whichEnv } from "../config/env-config";

// Register a custom token for date formatting
morgan.token('date', (): string => {
    return moment().format('DD/MMM/YYYY || H:mm:ss || [GMT]Z'); // Removed extra space before GMT
});

// Define the custom Morgan format
const morganFormat: string = ":remote-addr :method :url :status :response-time ms :date";

// Interface for the structured log object
interface LogObject {
    apiUrl: string;
    dateTime: string;
    method: string;
    status: string;
    responseTimeMs: string;
    responseTimeMin: string;
    remoteAddr: string;
}

// Create a custom Morgan logging middleware
export const morganLog = morgan(morganFormat, {
    stream: {
        write: (message: string): void => {
            // console.log(message);

            // Parse the log message to create a structured log object
            const parts: string[] = message.split(" ");
            const remoteAddr: string = parts[0];
            const method: string = parts[1];
            const apiUrl: string = parts[2];
            const status: string = parts[3];
            const responseTimeMs: number = parseFloat(parts[4].replace('ms', '')); // Remove 'ms' and parse to float
            const responseTimeMin: string = (responseTimeMs / 60000).toFixed(5); // Convert milliseconds to minutes (to 5 decimal places)
            const dateTime: string = parts.slice(5).join(" ").replace('ms', '').trim(); // Trim to remove any trailing whitespace or newline

            // Create a log object with the extracted details
            const logObject: LogObject = {
                // remoteAddr,
                apiUrl,
                dateTime,
                method,
                status,
                responseTimeMs: `${responseTimeMs} ms`, // Response time in milliseconds
                responseTimeMin: `${responseTimeMin} min`, // Response time in minutes
                remoteAddr,
            };

            // Log the object using the custom logger
            if (whichEnv === "PRODUCTION") {
                logger.info(JSON.stringify(logObject)); // Save the log file
            }
            else {
                basic_LOG.info(JSON.stringify(logObject)); // Don't save the log file
            }
        },
    },
});