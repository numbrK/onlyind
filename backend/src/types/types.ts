
export type Environment_T = "LOCAL" | "PRODUCTION";
export type commonLog_T = "ERROR" | "INFO" | "WARN" | "";
export type whichLoc_T = "SERVER";
export type apiVersion_T = "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8" | "v9" | "v10";


//------------------- DB RETURN ---------------------------
export interface QueryResult_PG_I {
  success: boolean;
  code: number,
  rawData?: any,
  rows?: any[];
  rowCount?: number;
  message?: string;
}

