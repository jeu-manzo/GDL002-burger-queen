import React from 'react';
import Form from 'react-bootstrap/Form'

class FormGroupTable extends React.Component {



  render () {
    return (
      <Form>
        <Form.Group className="form-table">
          <Form.Label>Mesa: </Form.Label>
          <Form.Control type="text" placeholder="Mesa..." />
        </Form.Group>
        <Form.Group className="form-name">
          <Form.Label>Nombre: </Form.Label>
          <Form.Control type="text" placeholder="María..." />
        </Form.Group>
        <Form.Group className="form-amount-people">
          <Form.Label>Personas: </Form.Label>
          <Form.Control type="text" placeholder="3" />
        </Form.Group>
      </Form>
    )
  }

}

export default FormGroupTable
