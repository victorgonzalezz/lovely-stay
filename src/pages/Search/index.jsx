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
      const result = await api.get(
        `https://api.github.com/users/${inputUserName}`
      );
      console.log(result, "oi");

      handleGitHubUser(result.data)
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
