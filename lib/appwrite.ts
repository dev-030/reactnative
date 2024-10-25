import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.Test.reactnative",
    projectId: "67165c0500004f9b5b20",	
    databaseId: "67165fc40025cb9b02db",
    userCollectionId: "67165fe30008a13c958c",
    videoCollectionId: "6716600f0018343d9767",
    storageId: "67166164002a9a0a7d98"
}

// Init your React Native SDK
const client = new Client()
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const database = new Databases(client);
const avatar = new Avatars(client);



// Register User

export async function createUser(userInfo: { email: string; password: string; username: string }) {
    try{

        const newAccount = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.username)

        if(!newAccount) throw Error;

        const session = await signIn(userInfo.email, userInfo.password)
        console.log('session🟢:',session)

        const avatarUrl = avatar.getInitials(userInfo.username)

        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: userInfo.email,
                username: userInfo.username,
                avatar: avatarUrl
            }
        )
        return newUser;
    }catch(error:any){
        console.log(error)
        throw new Error(error)    
    }    
}


// sign-in user

export async function signIn(email:string, password:string){
    try{
        const session = await account.createEmailPasswordSession(email, password)        
        return session;
    }catch(error:any){
        throw new Error(error)    
    }

}

// Get current user

export async function CurrentUser() {
    try {
        const result = await account.get();

        // const del = await account.deleteSession("current");
        // console.log('🔴',del);

        return result;
    } catch (error:any) {
        console.log('Error',error.message)
    }
}