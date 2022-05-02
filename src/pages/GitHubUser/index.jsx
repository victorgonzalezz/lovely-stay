import React, { useContext} from 'react'

import { AppContext } from '../../context/AppContext';
import {Container, Card, InsideCard} from './styles';


export function GitHubUser() {
  const {gitHubUser } = useContext(AppContext);
  console.log(gitHubUser)
  return (
    <Container>
      <Card>
        <InsideCard>
          <img src={gitHubUser?.avatar_url} alt="user avatar" />
          <span>
            {gitHubUser?.name}
          </span>
        </InsideCard>
        <div>

        </div>
      </Card>
    
    </Container>
  )
}
