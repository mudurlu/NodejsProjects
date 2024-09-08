import {Post} from "./Post.js"

const Post1 = new Post("Title-1", "Post-1", "A. Mudurlu", 2011);
const Post2 = new Post("Title-2", "Post-2", "D. Akalın", 2012);
const Post3 = new Post("Title-3", "Post-3", "C. Can", 2013);
const Post4 = new Post("Title-4", "Post-4", "S. Bacı", 2014);

let posts = [Post1, Post2, Post3, Post4];
console.log();

// List Posts
const listPosts = () => {
  posts.map((post) => {
      console.log(`Başlık: ${post.title}, Gönderi: ${post.content}, Yazar: ${post.author}, Yıl: ${post.year}`);
  })
}
// Add Post
const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts)
      reject("Hata Oluştu");
  })
  return promise1;
}
// Show Posts
async function showPosts() {
  try {
      await addPost(createPost);
      listPosts();
  } catch(error) {
      console.log(error);
  }
}
// Create Post TERMINAL
const createPost = new Post(process.argv[2], process.argv[3], process.argv[4], Number(process.argv[5]));;
// Run
showPosts();