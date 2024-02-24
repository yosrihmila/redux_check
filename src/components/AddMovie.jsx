import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/slices/movieSlice'
function AddMovie() {



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [movieInfo,setMovie]=useState()

    const dispatch=useDispatch()
    const add=()=>{
    dispatch(addMovie(movieInfo))
    setShow(false)
    }   
    return (
        <>
            <Button onClick={handleShow}>
            Add task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Task id</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name Product" onChange={(e)=>setMovie({...movieInfo,id:e.target.value})} />

                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>description</Form.Label>
                            <Form.Control type="text" placeholder="description" onChange={(e)=>setMovie({...movieInfo,description:e.target.value})}   />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Doneornot</Form.Label>
                            <Form.Control type="text" placeholder="Doneornot" onChange={(e)=>setMovie({...movieInfo,Doneornot:e.target.value})}   />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={add}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddMovie