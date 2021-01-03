import React, { useState, useContext } from "react";
import { Box, Grid, ResponsiveContext } from "grommet";
import Search from "./Search";
import "../styles/index.scss";
import SearchResult from "../interfaces/search.interface";
import Title from "./Title";
import { MarketCapRef,MarketCap } from "./MarketCap";
import {
  responsiveAreas,
  responsiveColumns,
  responsiveRows,
} from "../util/responsive";
import { aggregateQuery } from "../actions/aggregateActions";



function Layout() {
  const bubbleRef = React.useRef() as React.MutableRefObject<MarketCapRef>;

  const [selectedSecurity, setSelectedSecurity] = useState<SearchResult>();
  const size = useContext(ResponsiveContext);

  const handleSearchSelection = async (e:SearchResult) => {
    const results = await aggregateQuery(e.industry,e.sector);
    e.industryMarketCap = results;
    setSelectedSecurity(e)
    if(bubbleRef && bubbleRef.current){
      bubbleRef.current.updateLegend(e);
    }
    
  };

  return (
    <Box flex={false}>
      <Search onSelection={(e: SearchResult) => handleSearchSelection(e) }/>
      {selectedSecurity != null && (
        <div>
          <Title selectedSecurity={selectedSecurity} />
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
              gridArea="conversations"
              selectedSecurity={selectedSecurity}
            />
          </Grid>
        </div>
      )}
    </Box>
  );
}

export default Layout;
