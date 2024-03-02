import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class UserAuth{
  client = new Client();
  account;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createUser(email, password, name, label="person"){
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name, { label } );
      if(userAccount){
      //   return loginAccount(userAccount)
      // }else {
        return userAccount
      }
    } catch (error) {
      console.log("createUser error"+error)
      throw error
    }
  }

  async loginAccount({email, password}){
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("login error" + error)
      throw error
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get()
    } catch (error) {
      console.log(error)
    }
  }

  async logout(){
    try {
       await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const userAuth = new UserAuth;

export default userAuth


  