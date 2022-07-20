import * as dotEnv from 'dotenv';
dotEnv.config();

export const dataBaseConf = {
  url: process.env.MONGO_URL,
};
