import React from 'react';

export default class ClientDetails extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="card border-0">
                    <div className="card-header bg-success">
                        <h4 className="card-title">
                            Client Name
                        </h4>
                    </div>
                    <div className="card-body p-5">
                        <div className="row">
                            <div className="col-md-12 form-section-header">
                                Basic Details
                            </div>
                        </div>
                        <div className="form-row border-bottom pb-3">
                            <div className="col-lg-6">
                                <div className="row">
                                    <label htmlFor="bdrId" className="col-sm-5 col-form-label">
                                        Bdr Id
                                    </label>
                                    <div className="col-sm-7">
                                    <span className="form-control-plaintext" id="bdrId">
                                        3423723
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="row">
                                    <label htmlFor="bdrId" className="col-sm-5 col-form-label">
                                        Client Type
                                    </label>
                                    <div className="col-sm-7">
                                    <span className="form-control-plaintext" id="bdrId">
                                        Internal
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <label htmlFor="registeredAddress" className="col-sm-5 col-form-label">
                                        Registered Address
                                    </label>
                                    <div className="col-sm-7">
                                    <span className="form-control-plaintext" id="registeredAddress">
                                        354 Myrtle Ave.<br/>
                                        New York, NY 10034
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="row">
                                    <label htmlFor="businessAddress" className="col-sm-5 col-form-label">
                                        Business Address
                                    </label>
                                    <div className="col-sm-7">
                                        <span className="form-control-plaintext" id="businessAddress">
                                            957 Plymouth Court<br/>
                                            West Babylon, NY 11704
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 form-section-header">
                                <span>Billing Info</span>
                            </div>
                        </div>
                        <form action="">
                            <div className="form-row pb-3">
                                <div className="form-group col-md-3">
                                    <label htmlFor="accountType">Account Type</label>
                                    <select name="accountType" id="accountType" className="form-control">
                                        <option value="">Lorem</option>
                                        <option value="">Ipsum</option>
                                        <option value="">Finibus</option>
                                        <option value="">Bonorum</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3 offset-md-1">
                                    <label htmlFor="rechargeType">Recharge Type</label>
                                    <select name="rechargeType" id="rechargeType" className="form-control">
                                        <option value="">Lorem Ipsum</option>
                                        <option value="">Aldus PageMaker</option>
                                        <option value="">Letraset sheets</option>
                                        <option value="">specimen book</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4 offset-md-1">
                                    <label htmlFor="rechargeReason">Recharge Reason</label>
                                    <select name="rechargeReason" id="rechargeReason" className="form-control">
                                        <option value="">Contrary to popular belief, Lorem Ipsum </option>
                                        <option value="">Latin literature from 45 BC, making it over 2000</option>
                                        <option value="">the majority have suffered alteration in some form</option>
                                        <option value="">All the Lorem Ipsum generators on the Internet</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group pb-3">
                                <label htmlFor="otherReason">Other Reason</label>
                                <textarea className="form-control" placeholder="Enter the other reason here" id="otherReason"/>
                            </div>
                            <div className="form-row pb-3">
                                <div className="form-group col-md-3">
                                    <label htmlFor="euVat">EU Vat number</label>
                                    <input type="text" name="euVat" id="euVat" className="form-control"/>
                                </div>
                                <div className="form-group col-md-3 offset-md-1">
                                    <label htmlFor="ukVat">UK vat number</label>
                                    <input type="text" name="ukVat" id="ukVat" className="form-control"/>
                                </div>
                                <div className="form-group col-md-4 offset-md-1">
                                    <label htmlFor="directInvoicingEmail">Direct invoicing email</label>
                                    <input type="email" name="directInvoicingEmail" id="directInvoicingEmail"
                                           className="form-control"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <label htmlFor="vatPercent">VAT (%)</label>
                                    <input type="text" name="vatPercent" id="vatPercent" className="form-control"/>
                                </div>
                                <div className="form-group col-md-3 offset-md-1">
                                    <label htmlFor="eTradingCost">E-Trading Cost</label>
                                    <input type="number" name="eTradingCost" id="eTradingCost"
                                           className="form-control"/>
                                </div>
                                <div className="form-group col-md-4 offset-md-1">
                                    <label htmlFor="billingRegion">E-Trading Cost</label>
                                    <input type="text" name="billingRegion" id="billingRegion"
                                           className="form-control"/>
                                </div>
                            </div>
                            <button className="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}