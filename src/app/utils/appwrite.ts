import { Client, Databases } from 'appwrite'

console.log("******************* ENV *******************");
console.log(process.env);

export const appwriteClient = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT || '')
  .setProject(process.env.APPWRITE_PROJECT_ID || '');
  /*
console.log("******************* CLIENT *******************");
console.log(appwriteClient);
console.log("******************* ACCOUNT *******************");
export const account = new Account(appwriteClient);
console.log(account);
*/
console.log("******************* DATABASE *******************");
export const appwriteDatabase = new Databases(appwriteClient);
console.log(appwriteDatabase);
console.log("******************* DONE *******************");
