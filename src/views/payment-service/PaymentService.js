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
    CBadge, CSelect, CInput, CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const usersData = [
    { id: 0, ID: '1', Customer_Name: 'John Deo', Amount: '$ 12', Work_Description: 'Lorem ipsum', Transaction_Date: '22/06/2021' }
]

const fields = [
    { key: 'ID' },
    { key: 'Customer_Name' },
    { key: 'Amount' },
    { key: 'Transaction_Date' },
    { key: 'Work_Description' },
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]

const PaymentService = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Payment Service</h4>
                            {/* <Link to="">
                                <CButton size="md" color="success" className="ml-auto">+ Add Payment Service</CButton>
                            </Link> */}
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
                                    'show_details':
                                        () => {
                                            return (
                                                <td className=" d-flex">
                                                    <Link to="edit-payment">
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
export default PaymentService;