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


const AddAppointmentBooking = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Add Appointment and Booking</h4>
              <Link to="/appointments-&-bookings">
                <Button variant="contained" size="" color="primary" className="mr-2"><KeyboardBackspaceIcon /> </Button>
              </Link>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol xs="12" md="8" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Customer Name</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="Name" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Mobile Number (Customer)</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="e.g. 9878564587" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Date</CLabel>
                    <CInput type="date" name="date-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Time</CLabel>
                    <CInput name="date-input" placeholder="" id="timefrom"
                      type="time"
                      defaultValue="01:30"
                      // className={styles.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }} />
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Accept</option>
                      <option value="2">Reject</option>
                      <option value="3">Pending</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="4" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Address </CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="4"
                      placeholder="Enter Here..."
                    />
                  </CCol>
                  <CCol xs="12" md="8" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Work Description </CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="4"
                      placeholder="Enter Here..."
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="text-right">
              <CButton type="submit" size="" color="success" className="mr-2">Add Appointment and Booking</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default AddAppointmentBooking
