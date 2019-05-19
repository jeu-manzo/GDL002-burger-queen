import React from 'react';
import Modal from 'react-bootstrap/Modal'
import FormGroupTable from './FormGroupTable'
import Button from './Button'



class AddTable  extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button className="btn-add" label="+"  onClick={this.handleShow}></Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Mesa</Modal.Title>
          </Modal.Header>
          <Modal.Body>{<FormGroupTable/>}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" label="Crear Mesa" onClick={this.handleClose}></Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddTable
