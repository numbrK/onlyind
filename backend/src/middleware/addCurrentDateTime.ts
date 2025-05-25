import { Request, Response, NextFunction } from "express";
import { getCurrentDateTimeForReqDb } from "../utils/commonUtils/commonDateTimeMethods";

/**
 * Middleware to inject the current datetime into req.body.currentDateTime
 */
export const modifyReqWithDateTime = async (
  req: Request,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Ensure req.body exists and is an object
    if (typeof req.body === "object" && req.body !== null) {
      req.body.currentDateTime = getCurrentDateTimeForReqDb();
    }
    next();
  } catch (err: unknown) {
    console.error("DateTime Middleware Error:", err);
    // Optional: pass a new Error to global error handler
    next(new Error("Failed to attach currentDateTime to request"));
  }
};
