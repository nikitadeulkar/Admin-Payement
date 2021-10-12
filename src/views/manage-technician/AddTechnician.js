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
  CInput,
  CLabel,
  CSelect,
  CRow, CTextarea
} from '@coreui/react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';


const AddTechnician = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add Technician</h4>
              <Link to="/manage-technician">
                <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Technician Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Mobile Number (Technician)</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Speciality</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Address </CLabel>
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
              <CButton type="submit" size="" color="success" className="mr-2">Add Technician</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddTechnician
