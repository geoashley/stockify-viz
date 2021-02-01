import React, { useState, useContext } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import "../styles/index.scss";
import Title from "./Title";
import { MarketCapRef,MarketCap } from "./financial/MarketCap";
import {
  responsiveAreas,
  responsiveColumns,
  responsiveRows,
} from "../util/responsive";
import { PERatio, PERatioRef } from "./financial/PERatio";
import {Context} from '../store'


function Layout() {
  const bubbleRef = React.useRef() as React.MutableRefObject<MarketCapRef>;
  const peRef = React.useRef() as React.MutableRefObject<PERatioRef>;
  const {state} = useContext(Context);
  const size = useContext(ResponsiveContext);

  return (
    <Box flex={false} >
      {state.selectedSecurity != null && (
        <div>
          <div className="flexbox-container">
          <Title name={state.selectedSecurity.symbol} value={state.selectedSecurity.lastSale} fullName={state.selectedSecurity.securityName}/>
          {state.relatedCompanies.length>0 && state.relatedCompanies.map((item)=>
                    <Title name={item.symbol} value={item.lastSale} fullName={item.securityName}/>
          )}

          </div>
          <Grid
            align="center"
            gap="medium"
            rows={responsiveRows[size]}
            columns={responsiveColumns[size]}
            areas={responsiveAreas[size]}
          >
            <MarketCap
              ref={bubbleRef}
              cardname="Market Cap"
              gridArea="marketcap"
            />
            <PERatio
              ref={peRef}
              cardname="PE Ratio"
              gridArea="pe"
            />
          </Grid>
        </div>
      )}
    </Box>
  );
}

export default Layout;
