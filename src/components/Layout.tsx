import React, { useContext, useState } from "react";
import "../styles/layout.scss";
import Title from "./Title";
import { MarketCapRef, MarketCap } from "./financial/MarketCap";
import { PERatio, PERatioRef } from "./financial/PERatio";
import { Context } from '../store'
import { RatioModal } from "./financial/RatioModal";


function Layout() {
  const bubbleRef = React.useRef() as React.MutableRefObject<MarketCapRef>;
  const peRef = React.useRef() as React.MutableRefObject<PERatioRef>;
  const { state } = useContext(Context);
  const [showModal, setShowModal] = useState(false)

  const onTitleClick = e => {
    setShowModal(!showModal)
  };

  return (
    <div >
      {state.selectedSecurity != null && (
        <div>
        <div className="main-container">
          <div className="title-container">
            <Title name={state.selectedSecurity.symbol} value={state.selectedSecurity.lastSale} fullName={state.selectedSecurity.securityName} onClick={onTitleClick} />
            {state.relatedCompanies.length > 0 && state.relatedCompanies.map((item) =>
              <Title name={item.symbol} value={item.lastSale} fullName={item.securityName} onClick={onTitleClick} />
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
        {/* <RatioModal show={showModal} name={state.selectedSecurity.symbol} ratio={state.selectedSecurity.ratios[0]}></RatioModal> */}
        </div>

      )}

    </div>
  );
}

export default Layout;
