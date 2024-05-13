
import { projectFirestore } from '../Firebase/Config';

export async function getPost(postId) {
  if (!postId) {
    console.error("No post ID provided.");
    return null;  
  }

  try {
    const docRef = projectFirestore.collection('Articles').doc(postId);
    const doc = await docRef.get();
    if (doc.exists) {
      return { id: doc.id, ...doc.data() }; 
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return null;
  }
}
