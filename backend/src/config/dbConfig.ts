import { Pool } from 'pg';
import { CONF } from './env-config';
import { queryExecutionResult_PG } from '../utils/commonUtils/expCmnMethdStruc';
import { statusCode } from '../utils/constantsUtils/statusCode';
import { commonLog } from '../utils/commonUtils/commonConsole';
import { catchBlockErrorLog } from '../utils/loggerUtils/catchBlockErrorLog';

// Database connection configuration
const PG_READ_POOL = new Pool(Object.freeze(CONF.DB_CONFIG_POSTGRES));
const PG_WRITE_POOL = new Pool(Object.freeze(CONF.DB_CONFIG_POSTGRES));

// Helper function to execute read queries
export async function executeReadQuery(text: string, params: any[] = [], queryName: string) {
    // const start = Date.now();
    try {
        const dbResponseData = await PG_READ_POOL.query(text, params);
        // const duration = Date.now() - start;
        return queryExecutionResult_PG(true, statusCode.CUSTOM.QUERY_EXECUTION_SUCCESS, dbResponseData,"Read Execute SuccessFully");
    } catch (error) {
        commonLog(error, 'ERROR', "Error in executeReadQuery");
        catchBlockErrorLog(error, queryName, 'SERVER');
        return queryExecutionResult_PG(false, statusCode.CUSTOM.QUERY_EXECUTION_FAILD, null, 'Read Execute Error');
    }
}

// Helper function to execute write queries
export async function executeWriteQuery(text: string, params: any[] = [], queryName: string) {
    // const start = Date.now();
    try {
        const dbResponseData = await PG_WRITE_POOL.query(text, params);
        // const duration = Date.now() - start;
        return queryExecutionResult_PG(true, statusCode.CUSTOM.QUERY_EXECUTION_SUCCESS, dbResponseData, "Write Execute SuccessFully");
    } catch (error) {
        commonLog(error, 'ERROR', "Error in executeWriteQuery");
        catchBlockErrorLog(error, queryName, 'SERVER');
        return queryExecutionResult_PG(false, statusCode.CUSTOM.QUERY_EXECUTION_FAILD, null,'Write Execute Error');
    }
}

// Helper function for transactions
export async function withTransaction(callback: (client: any) => Promise<any>) {
    const client = await PG_WRITE_POOL.connect();
    try {
        await client.query('BEGIN');
        const result = await callback(client);
        await client.query('COMMIT');
        return result;
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
}
