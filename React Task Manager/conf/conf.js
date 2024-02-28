const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDataBaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionProjectId: String(import.meta.env.VITE_APPWRITE_COLLECTION_PROJECTS_ID),
  appwriteCollectionTaskId: String(import.meta.env.VITE_APPWRITE_COLLECTION_TASKS_ID),
  // appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf