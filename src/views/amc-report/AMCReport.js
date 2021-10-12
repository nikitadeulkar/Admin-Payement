import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CImg,
    CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const usersData = [
    {
        id: 0, ID: '12', Customer_Name: 'John', Date: '15/06/2021', Mob_No: '325641552', Call_vendor: 'xxxx', Email: 'john@gmail.com', AMC_charges: '0',
        Home_Address: 'lorem', Product: 'Split AC', Unit: '1', Capacity: '1 to n', Service: 'AMC', Tenure: 'Yearly',
        first_Service_Date: '11/03/2020', sec_Service_Date: '11/03/2020', third_Service_Date: '11/03/2020', fourth_Service_Date: '11/03/2020',
        AMC_charges: '0', Tax: '0 %', Amount: '0', AMC_amt: '0', Service_parts: 'NA', Parts_Charges: '0', Total: '0', Payment_By_Client: '0',
        Amount_Shorfall: '0', Payment_Mode: 'xxxx', Remark: ''
    }
]

const fields = [
    { key: 'ID' },
    { key: 'Customer_Name' },
    { key: 'Date' },
    { key: 'Mob_No' },
    { key: 'Call_vendor' },
    { key: 'Email' },
    { key: 'Home_Address' }, { key: 'Product' }, { key: 'Unit' }, { key: 'Capacity' }, { key: 'Service' },
    { key: 'Tenure' },
    { key: 'first_Service_Date', label: '1st Service Date' }, { key: 'Status1', label: 'Status' },
    { key: 'sec_Service_Date', label: '2nd Service Date' }, { key: 'Status2', label: 'Status' },
    { key: 'third_Service_Date', label: '3rd Service Date' }, { key: 'Status2', label: 'Status' },
    { key: 'fourth_Service_Date', label: '4th Service Date' }, { key: 'Status4', label: 'Status' },
    {
        key: 'AMC_charges',
        label: 'AMC Charges W/O Tax'
    },
    {
        key: 'Tax',
        label: 'Tax %'
    },
    { key: 'Amount' },
    {
        key: 'AMC_amt',
        label: 'Final AMC Amount'
    },
    { key: 'Service_parts' },
    { key: 'Parts_Charges' },
    { key: 'Total' }, { key: 'Payment_By_Client' }, { key: 'Amount_Shorfall' }, { key: 'Payment_Mode' },
    { key: 'Remark' },
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]

const AMCReport = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>AMC Report</h4>
                            <Link to="/add-amc-report">
                                <CButton size="md" color="success" className="ml-auto">+ Add AMC Report</CButton>
                            </Link>
                        </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={usersData}
                                fields={fields}
                                striped
                                tableFilter
                                itemsPerPageSelect
                                itemsPerPage={5}
                                hover
                                sorter
                                pagination
                                scopedSlots={{
                                    'Status1':
                                        () => {
                                            return (
                                                <td className="" >
                                                    <CBadge className="mr-1" color="success">Done</CBadge>
                                                </td>
                                            )
                                        },
                                    'Status2':
                                        () => {
                                            return (
                                                <td className="" >
                                                    <CBadge className="mr-1" color="warning">Pending</CBadge>
                                                </td>
                                            )
                                        },
                                    'Status3':
                                        () => {
                                            return (
                                                <td className="" >
                                                    <CBadge className="mr-1" color="warning">Pending</CBadge>
                                                </td>
                                            )
                                        },
                                    'Status4':
                                        () => {
                                            return (
                                                <td className="" >
                                                    <CBadge className="mr-1" color="warning">Pending</CBadge>
                                                </td>
                                            )
                                        },
                                    'show_details':
                                        () => {
                                            return (
                                                <td className="py-2 d-flex">
                                                    <Link to="/edit-amc-report">
                                                        <CButton size="sm" className="ml-1" >
                                                            <CIcon name="cil-pencil" color="primary" />
                                                        </CButton>
                                                    </Link>
                                                    <CButton size="sm" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary" />
                                                    </CButton>
                                                </td>
                                            )
                                        }
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}
export default AMCReport;