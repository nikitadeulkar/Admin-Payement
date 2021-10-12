import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CRow,
} from '@coreui/react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

const EditFeedback = () => {
  
  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Update Feedback</h4>
              <Link to="feedback-screen">
                <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Customer Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Name" />
                  </CCol>
               
                  <CCol xs="6" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Feedback</CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="2"
                      placeholder="Enter Here..."
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2">Update Feedback</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditFeedback
