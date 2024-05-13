import { ref } from 'vue'
import { projectFirestore } from '../Firebase/Config'

const getPosts = () => {
  const posts = ref([]) // Changed from jobs to posts
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('Articles').get()
      console.log(res.docs)

      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })      
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts;