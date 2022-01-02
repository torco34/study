const getPots = async (userId) => {
  const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
  const res = await fetch(url);
  const posts = await res.json();
  return posts;
};
export default getPots;
