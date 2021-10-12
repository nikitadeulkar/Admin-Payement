import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const Root = styled('span')(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
  
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #B3C3D3;
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #FFF;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255,255,255,1);
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
  }

  &.${switchUnstyledClasses.checked} { 
    .${switchUnstyledClasses.thumb} {
      left: 14px;
      top: 3px;
      background-color: #FFF;
    }

    .${switchUnstyledClasses.track} {
      background: #007FFF;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }`);


const usersData = [
    { ID: '0', User_name: 'nikita', Mobile_number: '9607468692', Email: 'nikitavdeulkar0@gmail.com' ,
    Address:'Pune',Bank_Detail:'SBI3466167',Transcation_Way:'google_Pay',Joining_Date:'06/09/2021' }
]


const fields = [
    { key: ' ID' },
    { key: 'User_name' },
    { key: 'Mobile_number' },
    { key: 'Email' },
    { key:'Address'},
    { key: 'Bank_Detail'},
   
    {key:'Joining_Date'},
    {
        key: 'show_details',
        label: 'Action',
        _style: { width: '1%' },
        filter: false
    }
]

const UserManage = () => {
    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
    return (
        <>
            <CRow>
                <CCol lg="12">
                    <CCard>
                        <CCardHeader className="d-flex justify-content-between align-items-center">
                            <h4>User Manage</h4>
                            {/* <CIcon width={24} name="cil-print" /> */}

                            {/* <Link to="/add-service">
                                <CButton size="md" color="success" className="ml-auto">+ Add Services</CButton>
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
                                                    {/* <Link to="/edit-service"> */}
                                                        <CButton size="sm" className="ml-1" >
                                                           <div>
                                                           <SwitchUnstyled component={Root} {...label} />
                                                               </div>                                                 </CButton>
                                                    {/* </Link> */}
                                                    {/* <CButton size="sm" className="ml-1">
                                                        <CIcon name="cil-trash" color="primary" />
                                                    </CButton> */}

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
export default UserManage;
    