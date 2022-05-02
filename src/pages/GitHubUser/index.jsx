import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { Container, Card, InsideCard, ListRepo } from "./styles";

export function GitHubUser() {
  const { gitHubUser, handleGitHubUser } = useContext(AppContext);

  console.log(gitHubUser);

  useEffect(() => {
    const gitHubData = localStorage.getItem("gitHubUserData");
    const jsonToData = JSON.parse(gitHubData);
    handleGitHubUser(jsonToData);
  }, []);

  return (
    <Container>
       {gitHubUser === null ? (
            <span className="loading">Loading...</span>
          ) : (
      <Card>
        
         
            <InsideCard>
              <img src={gitHubUser?.user?.avatar_url} alt="user avatar" />
              <h1>{gitHubUser?.user?.name}</h1>
            </InsideCard>
          
       
        <h4>Total number of repositories: {gitHubUser?.repositories?.length}</h4>
        <ListRepo>
          {gitHubUser?.repositories.map((repo) => {
            return (
              <li key={repo.id}>
                <span><strong>Repo name: </strong>{repo.name}</span>
                <span><strong>Description: </strong>{repo.description}</span>
                <hr />
              </li>
            )
          })}
          
        </ListRepo>
        
      </Card>
      )}
      <Link to="/">
        Back to Search
      </Link>
    </Container>
  );
}
