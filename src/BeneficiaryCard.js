import React, { Component } from 'react';

import WithdrawButton from './WithdrawButton.js';

class BeneficiaryCard extends Component {
  render() {    
    return (
      <div className="contract-card">
        <div className="contract-card-actions">
          <h4>Hi there beneficiary,</h4>
          <ul>
            <li><strong>Total $ staked</strong>: ±${this.props.totalStakedDollar}</li>
            <li><strong>Total withdrawals</strong>: {this.props.withdrawalCounter}</li>
          </ul>
          <div className="secondary-actions">
            <WithdrawButton
              withdrawalDate={new Date(this.props.nextWithdrawal*1000)} 
              visible={true}
              contract={this.props.contract}>Withdraw</WithdrawButton>
          </div>
        </div>
      </div>
    )
  }
};

export default BeneficiaryCard;