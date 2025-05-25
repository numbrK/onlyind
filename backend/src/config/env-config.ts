// import path from "path";
// import { fileURLToPath } from "url";
import {  Environment_T } from "../types/types";
import * as dotenv from 'dotenv';
dotenv.config();


// Choose which environment to use
const currentEnv: Environment_T = 'LOCAL'; // process.env.NODE_ENV as DevEnvironment || ;
// const apiVersion:apiVersion_T = 'v1';

const configs = Object.freeze({
    LOCAL: {
        SSL: process.env.NO_SSL,
       
        FRNTEND_BASE_URL: `${process.env.NO_SSL}://${process.env.FRONTEND_LOCAL_IP}:${process.env.FRONTEND_LOCAL_PORT}`,
        FRONTEND_IP: `${process.env.FRONTEND_LOCAL_IP}`,
        FRONTEND_PORT: process.env.FRONTEND_LOCAL_PORT,
       
        API_BASE_URL: `${process.env.NO_SSL}://${process.env.BACKEND_LOCAL_IP}:${process.env.BACKEND_LOCAL_PORT}`,
        BKND_IP: `${process.env.BACKEND_LOCAL_IP}`,
        BKND_PORT: process.env.BACKEND_LOCAL_PORT,

        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || 'TEST',
        SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
        JWT_SECRECTS_KEY: process.env.JWT_SECRECT_KEY || '',
        JWT_EXPIRESIN: process.env.JWT_EXPIRESIN || '24h',
        JWT_ALGORITHM: process.env.JWT_ALGO || 'HS256',
        MANUAL_AUTH_COOKIE_KEY:process.env.MANUAL_AUTH_COOKIE_KEY,
        DB_CONFIG_POSTGRES: {
            user: process.env.DB_USER_LOCAL_PG,
            host: process.env.DB_HOST_LOCAL_PG,
            database: process.env.DATABASE_NAME_LOCAL_PG,
            password: process.env.DB_PASSWORD_LOCAL_PG,
            port: parseInt(process.env.DB_PORT_LOCAL_PG || '5432'),
            max: 20,
            idleTimeoutMillis: 60000,
            connectionTimeoutMillis: 5000,
            maxUses: 7500,
        },
        NODE_MAILER_TRANSPORT : {
            host: process.env.NODE_MAILER_HOST,
            port: process.env.NODE_MAILER_PORT,
            secure: process.env.NODE_MAILER_SECURE,
            auth: {
              user: process.env.HOST_USER_MAIL,
              pass: process.env.HOST_PASS_MAIL
            },
            tls: {
              rejectUnauthorized: false,
            },
        },
        OAUTH_NXT_AUTH:{
            GOOGLE:{
                GOOGLE_CLIENT_ID:process.env.GGL_CLIENT_ID_LOCAL,
                GGL_CLIENT_SECRET:process.env.GGL_CLIENT_SECRET_LOCAL,
                GGL_REDIRECT_URL:process.env.GGL_REDIRECT_CLIENT_URL,
                GGL_JS_ORIGIN_URL:process.env.GGL_AUTHORIZE_JS_ORIGIN_URL_LOCAL
            },
            GITHUB:{

            }
            // Add anything else....
        },
        ENABLE_REQUEST_LOGGING:process.env.ENABLE_REQUEST_LOGGING

    },
    PRODUCTION: {
        SSL: process.env.SSL,

        FRNTEND_BASE_URL: `${process.env.SSL}://${process.env.FRONTEND_PROD_IP}`,
        FRONTEND_IP: `${process.env.FRONTEND_PROD_IP}`,
        FRONTEND_PORT: process.env.FRONTEND_PROD_PORT,
       
        API_BASE_URL: `${process.env.SSL}://${process.env.BACKEND_PROD_IP}:${process.env.BACKEND_PROD_PORT}`,
        BKND_IP: `${process.env.BACKEND_PROD_IP}`,
        BKND_PORT: process.env.BACKEND_PROD_PORT,


        ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || 'TEST',
        JWT_SECRECTS_KEY: process.env.JWT_SECRECT_KEY || '',
        JWT_EXPIRESIN: process.env.JWT_EXPIRESIN || 24,
        JWT_ALGORITHM: process.env.JWT_ALGO || 'HS256',
        SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
        MANUAL_AUTH_COOKIE_KEY:process.env.MANUAL_AUTH_COOKIE_KEY,
        DB_CONFIG_POSTGRES: {
            user: process.env.DB_USER_PROD_PG,
            host: process.env.DB_HOST_PROD_PG,
            database: process.env.DATABASE_NAME_PROD_PG,
            password: process.env.DB_PASSWORD_PROD_PG,
            port: parseInt(process.env.DB_PORT_PROD_PG || '5432'),
            // ssl: {
            //     rejectUnauthorized: true,
            //     ca: process.env.SSL_CA_PATH?.toString(),
            //     key: process.env.SSL_KEY_PATH?.toString(),
            //     cert: process.env.SSL_CERT_PATH?.toString()
            // },
            max: 20,
            idleTimeoutMillis: 60000,
            connectionTimeoutMillis: 5000,
            maxUses: 7500,
        },
        NODE_MAILER_TRANSPORT : {
            host: process.env.NODE_MAILER_HOST,
            port: process.env.NODE_MAILER_PORT,
            secure: process.env.NODE_MAILER_SECURE,
            auth: {
              user: process.env.HOST_USER_MAIL,
              pass: process.env.HOST_PASS_MAIL
            },
            tls: {
              rejectUnauthorized: false,
            },
        },
        OAUTH_NXT_AUTH:{
            GOOGLE:{
                GOOGLE_CLIENT_ID:process.env.GGL_CLIENT_ID_PROD,
                GGL_CLIENT_SECRET:process.env.GGL_CLIENT_SECRET_PROD,
                GGL_REDIRECT_URL:process.env.GGL_REDIRECT_CLIENT_URL,
                GGL_JS_ORIGIN_URL:process.env.GGL_AUTHORIZE_JS_ORIGIN_URL_PROD
            },
            GITHUB:{

            }
        },
        ENABLE_REQUEST_LOGGING:process.env.ENABLE_REQUEST_LOGGING
    }
});


export const CONF = configs[currentEnv as Environment_T];
export const whichEnv:Environment_T = currentEnv;

export const DEV_CONFIG = (dev_type: Environment_T = 'LOCAL'): any => {
    if (!(dev_type in configs)) {
        console.warn(`Invalid environment type: ${dev_type}, falling back to LOCAL`);
        return configs.LOCAL;
    }
    return configs[dev_type];
};

