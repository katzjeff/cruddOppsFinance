import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ButtonCreate = () => (
  <div>
    <Button animated className="btn">
      <Button.Content visible>Add Details</Button.Content>
      <Button.Content hidden>
        <Icon name="arrow right" />
      </Button.Content>
    </Button>
    
  </div>
);

export default ButtonCreate;
