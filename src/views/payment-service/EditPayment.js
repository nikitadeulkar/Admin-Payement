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


const EditPayment = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Update Payment</h4>
              <Link to="/payment-service">
                <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Customer Name</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Amount</CLabel>
                    <CInput id="text-input" name="text-input"  />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Transaction Date</CLabel>
                    <CInput type="date" name="date-input"  />
                  </CCol>
                  <CCol xs="12" md="12" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Work Description </CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="3"
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2">Update Payment</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditPayment
