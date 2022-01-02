import React, { useEffect } from "react";
import getPots from "./components/getPots";
import getUser from "./components/getUser";

// console.log(getUser);
const initialUser = {
  name: "sergio",
  email: "sergioebeltran@gmail.com",
};

const initialPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];
const FetchCard = () => {
  const [user, setUser] = React.useState(initialUser);
  const [posts, setsPosts] = React.useState(initialPosts);
  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
    });
  };

  const updatePosts = () => {
    getPots().then((newPosts) => {
      setsPosts(newPosts);
    });
  };

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    updatePosts();
  }, [user]);
  return (
    <>
      <div style={{ height: "100vh", background: "#ff7f50", color: "#fff" }}>
        <button className="btn btn-secondary m-5" onClick={updateUser}>
          AnotheUser
        </button>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <br />

        <h2>Posts -user: {user.id}</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export { FetchCard };
