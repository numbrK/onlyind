import { QueryResult_PG_I } from "../../types/types";


export const queryExecutionResult_PG = (isSucess: boolean, code: number, dbResponse: any, message: string): QueryResult_PG_I => {
  return {
    success: isSucess,
    code,
    rawData: dbResponse,
    rows: dbResponse?.rows,
    rowCount: dbResponse?.rowCount,
    message
  };
}