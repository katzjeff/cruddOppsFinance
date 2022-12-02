import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import CreateForm from './CreateForm'

const CreateModal = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Create New Entry</Button>}
    >
      <Modal.Header>Vote Head Entry Form</Modal.Header>
      <Modal.Content image scrolling>
        <Modal.Description>
          <p>
            Please use this form to enter details of vote head expenses.
          </p>
            <CreateForm />
          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CreateModal
