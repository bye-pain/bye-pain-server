/**
 * Created by crist on 07/04/2017.
 */
const config = {};

config.redisStore = {
  url: process.env.REDIS_STORE_URI,
  secret: process.env.REDIS_STORE_SECRET
};

export default config;