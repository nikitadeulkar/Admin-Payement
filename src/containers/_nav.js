import React from 'react'
import CIcon from '@coreui/icons-react'
import FeedbackIcon from '@material-ui/icons/Feedback';
import PaymentIcon from '@material-ui/icons/Payment';
import ReportIcon from '@material-ui/icons/Report';

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Manage User',
    to: 'User-Manage',
    icon: "cil-people"
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Deposite Request',
    to: '/deposite-request',
    icon:  <PaymentIcon className="c-sidebar-nav-m-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Withdrawal  Request',
    to: '/manage-technician',
    icon:  <PaymentIcon className="c-sidebar-nav-m-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Feedback Screen',
    to: '/feedback-screen',
    icon: <FeedbackIcon className="c-sidebar-nav-m-icon"/>
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Payment Service',
    to: '/payment-service',
    icon: <PaymentIcon className="c-sidebar-nav-m-icon"/>
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'AMC Report',
    to: '/amc-report',
    icon: <ReportIcon className="c-sidebar-nav-m-icon"/>
  },
   
  
]

export default _nav
