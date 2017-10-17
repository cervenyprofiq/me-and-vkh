import React from 'react'
import {Button} from 'semantic-ui-react'

const MyButton = (props) => (
  <Button disabled={props.disabled} onClick={props.onClick}>
    {props.text}
  </Button>
);

export default MyButton;