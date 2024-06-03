import './App.css';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const GET_ALL_POSTS = gql`
  query GetAllPosts { 
    getAllPosts {
      id
      title
      username
    }
  }
`

function App() {

  const [ postInput, setPostInput ] = useState("");

  const { loading, error, data } = useQuery(GET_ALL_POSTS, {
    onCompleted: (queryData) => {
      console.log(queryData);
      console.log(queryData.getAllPosts);
      const postsArray = queryData.getAllPosts;
      for (let i = 0; i < postsArray.length; i++) {
        console.log(postsArray[i].title + " pais " + postsArray[i].username + " es su capital ");
      }
    }
  });

  if (loading) return null;
  if (error) return "Error: " + error;

  console.log(postInput);

  return (
    <div className="App">
      <header className="App-header">
       <h1>GRAPHQL API QUERY APP</h1>
       <input type="text" onChange={(e) => setPostInput(e.target.value)} />
      </header>
    </div>
  );
}

export default App;