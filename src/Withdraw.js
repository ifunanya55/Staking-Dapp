import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.js';



class Withdraw extends Component {

    constructor(props) {
        super(props)
        this.state = {
            withdrawAmount: '0'
        }
    }

    render() {
        return (
            <div>
                <div class="img-fluid" alt="Responsive image">

                    <div class="row justify-content-center align-item-center flex-fill">
                        <div class="col-sm-4">
                            <div className='move-card-right'>
                                <div class="seventhDiv card border border-dark rounded-lg shadow-lg p-3 mb-5 bg-white rounded">

                                    <div class="card-body">
                                    <h6> <p>       You have {window.web3.utils.fromWei(this.props.LPTokenBalance, 'Ether')} STK tokens staked</p></h6>
                                        <form onSubmit = {(event) => {
                                            event.preventDefault()
                                            let AmountToBeWithdrawn
                                            AmountToBeWithdrawn = window.web3.utils.toWei(this.state.withdrawAmount, 'Ether')
                                            this.props.Withdraw(AmountToBeWithdrawn)

                                            this.props.StakingContract.events.allEvents()
                                            .on('data', (event) => {
                                             window.location.reload()
                                            })
                                            .on('error', console.error);
                                        
                                        }} min = '0' >
                                            <div class="form-group form-body">
                                                <label for="exampleInputEmail1">STAKE Token</label>
                                                <span class='float-right text-muted'>
                                                    You have {window.web3.utils.fromWei(this.props.LPTokenBalance, 'Ether')}  LP Tokens
                                                </span>
                                                <input type="number" min = '0' class="form-control" aria-describedby="emailHelp" onChange={(event) => {
                                                    const LPTokenAmount = this.input.value.toString()
                                                    this.setState({ withdrawAmount: LPTokenAmount })
                                                }}
                                                    ref={(input) => { this.input = input }}
                                                    placeholder= '0' />
                                                <small id="emailHelp" class="form-text text-muted">
                                                    You want to withdraw {this.state.withdrawAmount} STAKE Tokens.
                                                </small>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">RWD Token</label>
                                                <span className='float-right text-muted'>
                                                    You have {window.web3.utils.fromWei(this.props.RewardTokenBalance, 'Ether')} RWD tokens
                                                </span>
                                                <input type="number" class="form-control" aria-describedby="ethToPay" onChange={(event) => {
                                                    const RewardTokenAmount = this.input2.value.toString()
                                                    this.setState({ withdrawAmount: RewardTokenAmount })
                                                }}
                                                    ref={(input) => { this.input2 = input }}
                                                    placeholder={this.state.withdrawAmount.toString()} disabled />
                                                <small id="ethToPay"> You will get { this.state.withdrawAmount/100} more Reward Tokens and { this.state.withdrawAmount} STAKE token when you withdraw. </small>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button type="submit" class=" stakenow-btn btn-lg " >WITHDRAW</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Withdraw;