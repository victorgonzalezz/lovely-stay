import React, { useContext} from 'react'

import { AppContext } from '../../context/AppContext';
import {Container, Card} from './styles';


export function GitHubUser() {
  const {gitHubUser } = useContext(AppContext);
  console.log(gitHubUser)
  return (
    <Container>
      <Card>
        <div>
          <img src={gitHubUser?.avatar_url} alt="user avatar" />
          <span>
            {gitHubUser?.name}
          </span>
        </div>
      </Card>
    
    </Container>
  )
}
