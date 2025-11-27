 /*
 const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 3000,
 jwtSecret: process.env.JWT_SECRET || 'dzifadzifa123', 
 mongoUri: process.env.MONGODB_URI ||"mongodb+srv://matrevidzifa:dzifadzifa123@cluster0.wbuyhpw.mongodb.net/Portfolio?appName=Cluster0"||
 process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config
 */

 const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "dzifadzifa123",
  mongoUri: process.env.MONGODB_URI || 
    "mongodb+srv://matrevidzifa:dzifadzifa123@cluster0.wbuyhpw.mongodb.net/Portfolio?retryWrites=true&w=majority"
};

export default config;
