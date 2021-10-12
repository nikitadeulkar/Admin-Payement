import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CInput,
  CInputCheckbox,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CLabel,
  CRow,
  CImg, CModal
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >

      <div className="c-app c-default-layout flex-row align-items-center" style={{ background: "url(avatars/login.jpg) no-repeat center center", backgroundSize:"cover" }}>
        <CContainer>
          <header className="log-header">
            <div className="container d-flex justify-content-between align-items-center" style={{ height:'80px'}}>
              <CImg className="invoice-logo" height={80} src={'avatars/logo.png'} alt="mInventory" />
              {/* <Link to="/register">
                  <CButton color="light" >Registration</CButton>
              </Link> */}
            </div>
          </header>
          <CRow className="justify-content-center align-items-center">
            {/* <CCol md="7" className="text-center">
              <CImg className="" height={400} src={'avatars/3094351.png'} alt="login" />
            </CCol> */}
            <CCol md="4">
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>

                      {/* <h1>Login</h1> */}
                      <p className="text-muted">Sign In to your account</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-user" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="text" placeholder="Username" autoComplete="username" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>
                            <CIcon name="cil-lock-locked" />
                          </CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" placeholder="Password" autoComplete="current-password" />
                      </CInputGroup>
                      <CFormGroup variant="custom-checkbox" inline className="mb-3">
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Remember Me</CLabel>
                      </CFormGroup>
                      <CRow className="text-center">
                        <CCol xs="12">
                          <Link to="/dashboard">
                            <CButton color="primary" className="px-4">Login</CButton>
                          </Link>
                        </CCol>
                        {/* <CCol xs="6" className="text-right">
                          <CButton color="link" className="px-0" onClick={handleClickOpen}>Forgot password?</CButton>
                          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                            <DialogTitle id="customized-dialog-title" className="p-3" onClose={handleClose}>
                              <h4>Reset Password</h4>
                            </DialogTitle>
                            <DialogContent dividers>
                              <CForm style={{ minWidth: "300px" }}>
                                <CInputGroup className="mb-3">
                                  <CInputGroupPrepend>
                                    <CInputGroupText>
                                      <CIcon name="cil-lock-locked" />
                                    </CInputGroupText>
                                  </CInputGroupPrepend>
                                  <CInput type="password" placeholder="New Password" autoComplete="new-password" />
                                </CInputGroup>
                                <CInputGroup className="mb-3">
                                  <CInputGroupPrepend>
                                    <CInputGroupText>
                                      <CIcon name="cil-lock-locked" />
                                    </CInputGroupText>
                                  </CInputGroupPrepend>
                                  <CInput type="password" placeholder="Confirm Password" autoComplete="confirm-password" />
                                </CInputGroup>
                              </CForm>

                            </DialogContent>
                          </Dialog>
                        </CCol> */}
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>

              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </div>
  )
}

export default Login
