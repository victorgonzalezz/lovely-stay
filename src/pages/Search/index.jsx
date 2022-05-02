import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import { Container, InputGroup } from "./styles";
import api from "axios";

export function Search() {
  const [inputUserName, setInputUserName] = useState("");
  const { handleGitHubUser } = useContext(AppContext)
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputUserName.trim() === "") {
      alert("You should write the field");
      return;
    }
    try {
      const data = {
        user: null,
        repositories: null
      }

      const result = await api.get(
        `https://api.github.com/users/${inputUserName}`
      );
      if(result.status === 200) {
        data.user = result.data 


        console.log(result, 'oi')
        const repos = await api.get(
          `https://api.github.com/users/${inputUserName}/repos`
        )
        data.repositories = repos.data
      }

      handleGitHubUser(data)
      history("/about")
    } catch (err) {
      alert("Not found");
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setInputUserName(value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <input
            value={inputUserName}
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="GitHub Username"
          />

          <button>Search</button>
        </InputGroup>
      </form>
    </Container>
  );
}
