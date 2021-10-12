import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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
    { id: 0, ID: '1', Customer_Name: 'John Deo', Amount: '123654', Staking_Period:'3 month',Trancation_Way:'google play', Date: '22/06/2021', Time: '05:13 AM' }
]

const fields = [
    { key: 'ID' },
    { key: 'Customer_Name' },
    { key: 'Mobile_Number' },
    { key: 'Amount' },
    { key: 'Staking_Period' },
    { key: 'Trancation_Way'},
    { key: 'Date' },
    {key:'Time'},
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }


    
]

const DepositeRequest = () => {

    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>Deposite Request</h4>
                           
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
                                                    
                                                        <CButton size="sm" className="ml-1" >
                                                            <CheckCircleOutlineIcon style={{color:'green'}} />
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
export default DepositeRequest;