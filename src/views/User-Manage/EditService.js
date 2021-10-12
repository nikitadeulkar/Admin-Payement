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
  CInputFile,
  CLabel,
  CSelect,
  CRow,
} from '@coreui/react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';


const EditService = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Update Service</h4>
              <Link to="/service-list">
                <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="8" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Service Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Name" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="select" className="fontnsize">Service Type </CLabel>
                    <CSelect custom name="select" id="select" className="fontnsize">
                      <option value="0">Current</option>
                      <option value="1">Coming Soon</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2">Update Service</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditService
