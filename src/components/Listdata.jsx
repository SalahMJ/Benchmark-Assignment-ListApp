import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap'; 

const ListDataComponent = () => {
  const [listData, setListData] = useState([])
    
useEffect(() => {
        fetch('https://api.github.com/users')
          .then(response => response.json())
          .then(listData => setListData(listData))
      }, [ ])
      
    
  return (
    <div class = "textStyle">
    <Container>

      <ListGroup>
        {listData.map(info => (
          <ListGroup.Item key={info.id}>
            {info.id} ) The GitHub ID is :  {info.login} & its Profile URL is : {info.html_url}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
    </ div>
  )
}

export default ListDataComponent
