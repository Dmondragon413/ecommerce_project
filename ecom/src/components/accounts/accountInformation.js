import React, { Component } from 'react';
import PageTitle from '../pagetitle';
import AccountInformationForm from './accountInformationForm';


class AccountInformation extends Component {
    onSubmit = (fields) => {
        console.log(fields);
    }
    
    render() {
        return (
            <div className='account-information'>
                <PageTitle className='account-information__page-title' title='Account Information'/>
                <AccountInformationForm onSubmit={this.onSubmit} className='account-information__form'/>
            </div>
        )
    }
}

export default AccountInformation;