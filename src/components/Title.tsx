import React, { useContext } from "react";
import { Context } from '../store'
import '../styles/title.scss';
import { securityDisplayname } from "../util/securityUtils";

export default function Title({ name: symbol, value, fullName, ...rest }) {
  const { state } = useContext(Context);
  console.log(state)
  return (
    <div className="title"  {...rest}>
      <div className="container">
        <h3 className="heading">
          {symbol && symbol + ' $' + value}
        </h3>
        <p className="fullname" >
          {symbol && securityDisplayname(fullName)}
        </p>
      </div>
    </div>
  );
}

