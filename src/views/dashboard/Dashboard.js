import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CWidgetProgressIcon
} from '@coreui/react'

import { CChartBar } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentIcon from '@material-ui/icons/Payment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ShopIcon from '@material-ui/icons/Shop';
import PeopleIcon from '@material-ui/icons/People';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import StarIcon from '@material-ui/icons/Star';


const Dashboard = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <>

      <CRow className="dashboard">
        <CCol sm="6" md="3">
          <CWidgetProgressIcon
            header="972"
            text="Total User"
            color="gradient-info"
          >
           <CIcon name="cil-people" height="36" />
          </CWidgetProgressIcon>
        </CCol>

        <CCol sm="6" md="3">
          <CWidgetProgressIcon
            header="500"
            text="Total Credit"
          // color="gradient-info"
          >
            <CreditCardIcon height="36" style={{fontSize:'inherit'}}/>
          </CWidgetProgressIcon>
        </CCol>
        <CCol sm="6" md="3">
          <CWidgetProgressIcon
            header="385"
            text="Total Debit"
            color="gradient-success"
          >
              <PaymentIcon style={{fontSize:'inherit'}}/>
          </CWidgetProgressIcon>
        </CCol>
        <CCol sm="6" md="3">
          <CWidgetProgressIcon
            header="18"
            text="Total Interest Rate"
            color="gradient-warning"
          >
            <CIcon name="cil-spreadsheet" height="36" />
          </CWidgetProgressIcon>
        </CCol>


      </CRow>

    </>
  )
}

export default Dashboard;
