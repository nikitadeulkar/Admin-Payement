import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow, CCardFooter, CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center" style={{ background: "url(avatars/colorful.jpg) no-repeat center center", backgroundSize:"cover" }}>
      <CContainer>
        <header className="log-header">
            <div className="container d-flex justify-content-between align-items-center" style={{ height:'80px'}}>
              <CImg className="invoice-logo" height={70} src={'avatars/mInventory-light.png'} alt="mInventory" />
              <Link to="/login">
                  <CButton color="light" >Login</CButton>
              </Link>
            </div>
          </header>
        <CRow className="justify-content-center align-items-center">
          <CCol lg="6" className="text-center">
              <CImg className="" height={400} src={'avatars/3094351.png'} alt="register" />
            </CCol>
          <CCol  lg="6" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CRow>
                  <CCol xs="12" sm="12">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Full Name" autoComplete="name" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>@</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Email" autoComplete="email" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CInputGroup className="mb-4">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Repeat password" autoComplete="new-password" />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CButton color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" className="text-center">
                    <strong>Already have an account! Please <Link to="/login">Login</Link></strong>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
