import { Client, Account, ID, Databases } from "appwrite";
import conf from "../conf/conf";

export class projectConfig{
  client = new Client();
  databases;

  constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client)
  }

  async createPostProject({name, slug, discription, time, task, userid}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionProjectId,
        slug,
        {
          name,
          slug,
          discription,
          time,
          task,
          userid
        }
      )
    } catch (error) {
      console.log("Appwrite service :; updatePost ;; error", error);
    }
  }

  async createPostTask({name, slug, discription, time, task, userid, deadline}){
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionTaskId,
        slug,
        {
          name,
          slug,
          discription,
          time,
          task,
          deadline,
          userid
        }
      )
    } catch (error) {
      console.log("Appwrite service :; updatePost ;; error", error);
    }
  }


  async getPostProject(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionProjectId,
        slug
      )
    } catch (error) {
      console.log("Appwrite service :; updatePost ;; error", error);
    }
  }

  async getPostTask(slug){
    try {
      return await this.databases.getDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionTaskId,
        slug
      )
    } catch (error) {
      console.log("Appwrite service :; updatePost ;; error", error);
    }
  }
  async getPostsProject(){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionProjectId,
      )
    } catch (error) {
      console.log("Appwrite service :; updatePost ;; error", error);
    }
  }

  async getPostsTask(){
    try {
      return await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionTaskId,
      )
    } catch (error) {
      console.log("Appwrite service :; updatePost ;; error", error);
    }
  }
}

const projectconfig = new projectConfig()
export default projectconfig