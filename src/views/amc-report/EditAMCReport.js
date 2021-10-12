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


const EditAMCReport = () => {

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" >
          <CCard>
            <CCardHeader className="d-flex justify-content-between">
              <h4>Update AMC Report</h4>
              <Link to="/amc-report">
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
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Mobile Number</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Date</CLabel>
                    <CInput type="date" name="date-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Call Vendor</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="email-input">Email Id/ GST</CLabel>
                    <CInput type="email" id="email-input" name="email-input"  />
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Home Address </CLabel>
                    <CTextarea
                      name="textarea-input"
                      id="textarea-input"
                      rows="2"
                      placeholder="Enter Here..."
                    />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Product</CLabel>
                    <CInput id="text-input" name="text-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="1" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Unit</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="2" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Capacity</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="text-input">Service</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Tenure Single/Yearly </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">1st Service Date</CLabel>
                    <CInput type="date" name="date-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Pending</option>
                      <option value="2">Done</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">2nd Service Date</CLabel>
                    <CInput type="date" name="date-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Pending</option>
                      <option value="2">Done</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">3rd Service Date</CLabel>
                    <CInput type="date" name="date-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Pending</option>
                      <option value="2">Done</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">4th Service Date</CLabel>
                    <CInput type="date" name="date-input" placeholder="" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Status </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Pending</option>
                      <option value="2">Done</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">AMC Charges W/O Tax</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input"> Tax</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Amount</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Final AMC Amount</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Service Parts</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Parts Charges</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Total</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Actual Payment By Client</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="date-input">Amount Shortfall</CLabel>
                    <CInput id="text-input" name="text-input" />
                  </CCol>
                  <CCol xs="12" md="3" className="mt-2 mb-2">
                    <CLabel htmlFor="select">Mode Of Payment </CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Credit</option>
                      <option value="2">Cash</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="6" className="mt-2 mb-2">
                    <CLabel htmlFor="textarea-input">Remark </CLabel>
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
              <CButton type="submit" size="" color="success" className="mr-2">Update AMC Report</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EditAMCReport
