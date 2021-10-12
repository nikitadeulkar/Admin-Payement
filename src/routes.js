import React from 'react';
import DepositeRequest from './views/DepositeRequest/DepositeRequest';
import UserManage from './views/User-Manage/UserManage';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));


const AddService = React.lazy(() => import('./views/User-Manage/AddService'));
const EditService = React.lazy(() => import('./views/User-Manage/EditService'));

const ManageTechnician = React.lazy(() => import('./views/manage-technician/ManageTechnician'));
const AddTechnician = React.lazy(() => import('./views/manage-technician/AddTechnician'));
const EditTechnician = React.lazy(() => import('./views/manage-technician/EditTechnician'));

const FeedbackScreen = React.lazy(() => import('./views/feedback-screen/FeedbackScreen'));
const EditFeedback = React.lazy(() => import('./views/feedback-screen/EditFeedback'));


const PaymentService = React.lazy(() => import('./views/payment-service/PaymentService'));
const EditPayment = React.lazy(() => import('./views/payment-service/EditPayment'));

const AppointmentsBookings = React.lazy(() => import('./views/DepositeRequest/DepositeRequest'));
const AddAppointmentBooking = React.lazy(() => import('./views/DepositeRequest/AddAppointmentBooking'));
const EditAppointmentBooking = React.lazy(() => import('./views/DepositeRequest/EditAppointmentBooking'));

const AMCReport = React.lazy(() => import('./views/amc-report/AMCReport'));
const AddAMCReport = React.lazy(() => import('./views/amc-report/AddAMCReport'));
const EditAMCReport = React.lazy(() => import('./views/amc-report/EditAMCReport'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/User-Manage', name: 'Manage User', component: UserManage },

  
  { path: '/deposite-request', name: 'Deposite Request', component: DepositeRequest },

  { path: '/edit-service', name: 'Update Service', component: EditService },

  { path: '/manage-technician', name: 'Manage Technician', component: ManageTechnician },
  { path: '/add-technician', name: 'Add Technician', component: AddTechnician },
  { path: '/edit-technician', name: 'Update Technician', component: EditTechnician },

  { path: '/feedback-screen', name: 'Feedback Screen', component: FeedbackScreen },
  { path: '/edit-feedback', name: 'Update Feedback', component: EditFeedback },

  { path: '/payment-service', name: 'Payment Service', component: PaymentService },
  { path: '/edit-payment', name: 'Update Payment', component: EditPayment },

  { path: '/add-appointment-booking', name: 'Add Appointment & Booking', component: AddAppointmentBooking },
  { path: '/edit-appointment-booking', name: 'Update Appointment & Booking', component: EditAppointmentBooking },

  { path: '/amc-report', name: 'AMC Report', component: AMCReport },
  { path: '/add-amc-report', name: 'Add AMC Report', component: AddAMCReport },
  { path: '/edit-amc-report', name: 'Update AMC Report', component: EditAMCReport },

];
export default routes;
