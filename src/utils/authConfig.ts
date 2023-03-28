const devMode = process.env.NODE_ENV == 'development' ? true : false;

const domains = {
    dev: 'http://localhost:3000',
    prod: 'https://beta.toxmod.xyz',
};


export const databases = {
    mongo: process.env.MONGOOSE_URL,
};


export const config = {
    cookieName: 'token',
    botToken: process.env.CLIENT_TOKEN,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    jwtSecret: devMode ? process.env.DEV_JWT_SECRET : process.env.PROD_JWT_SECRET,
    appUri: devMode ? `${domains.dev}` : `${domains.prod}`
};