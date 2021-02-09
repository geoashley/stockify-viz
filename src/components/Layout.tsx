import React, {  useContext } from "react";
import "../styles/index.scss";
import "../styles/layout.scss";
import Title from "./Title";
import { MarketCapRef, MarketCap } from "./financial/MarketCap";
import { PERatio, PERatioRef } from "./financial/PERatio";
import { Context } from '../store'


function Layout() {
  const bubbleRef = React.useRef() as React.MutableRefObject<MarketCapRef>;
  const peRef = React.useRef() as React.MutableRefObject<PERatioRef>;
  const { state } = useContext(Context);

  return (
    <div >
      {state.selectedSecurity != null && (
        <div>
          <div className="flexbox-container">
            <Title name={state.selectedSecurity.symbol} value={state.selectedSecurity.lastSale} fullName={state.selectedSecurity.securityName} />
            {state.relatedCompanies.length > 0 && state.relatedCompanies.map((item) =>
              <Title name={item.symbol} value={item.lastSale} fullName={item.securityName} />
            )}

          </div>
          <div className="cards">
            <div className="card">
            <MarketCap
              ref={bubbleRef}
              cardname="Market Cap"
              gridArea="marketcap"
            />

            </div>
            <div className="card">
            <PERatio
              ref={peRef}
              cardname="PE Ratio"
              gridArea="pe"
            />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
