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
    CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
const usersData = [
    { id: 0, ID: '1', Customer_Name: 'John Deo',  Feedback: 'Sweet Park'}
]

const fields = [
    { key: 'ID' },
    { key: 'Customer_Name' },
    { key: 'Feedback' },
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]

const FeedbackScreen = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Feedback Screen</h4>
                            {/* <Link to="/add-feedback">
                                <CButton size="md" color="success" className="ml-auto">+ Add Feedback</CButton>
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
                                                <td className="py-2 d-flex">
                                                    <Link to="/edit-feedback">
                                                        <CButton size="sm" className="ml-1" >
                                                            <CIcon name="cil-pencil" color="primary" />
                                                        </CButton>
                                                    </Link>
                                                    <CButton size="sm" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary" />
                                                    </CButton>
                                                </td>
                                            )
                                        },
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}
export default FeedbackScreen;