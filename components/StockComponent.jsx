import React, { Component } from "react";
import { connect } from "react-redux";
class StocksCompoment extends Component {
render() {
return (<div className="container">
<h4>Stocks</h4>
{this.props.stocks.map((st, index) => (
<div className="row" key={index}>
<div className="col-4 border">{st.name}</div>
<div className="col-2 border">{st.quantity}</div>
</div>
))}
</div>
)
}}
const mapStateToProps = (state) => {
return { stocks: state.stocks };
};
export default connect(mapStateToProps) (StocksCompoment);