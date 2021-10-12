import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CImg,
    CBadge, CSelect, CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react';


const usersData = [
    { id: 0, ID: '1', Customer_Name: 'John Deo', Amount: '1236548794', Date: '12/07/21'}
]

const fields = [
    { key: 'ID' },
    { key: 'Customer_Name' },
    { key: 'Amount' },
    { key: 'Date' },
    
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]

const ManageTechnician = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Withdrawal Request</h4>
                            
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
                                                    <Link to="/edit-technician">
                                                        <CButton size="sm" className="ml-1" >
                                                        <CheckCircleOutlineIcon style={{color:'green'}} />                                                   </CButton>
                                                    </Link>
                                                    <CButton size="sm" className="ml-1">
                                                        < ClearIcon color="red" />
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
export default ManageTechnician;