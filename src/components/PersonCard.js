import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const PersonCard = (props) => (
  <Card centered='true' color='red'>
    <Image source={{uri: props.image}}/>
    <Card.Content>
      <Card.Header>
        {props.name}
      </Card.Header>
      <Card.Meta>
        <span className='position'>
          {props.position}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.text}
      </Card.Description>
    </Card.Content>
  </Card>
);

export default PersonCard


