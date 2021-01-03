import React, { useImperativeHandle, useState } from "react";
import { Box, Stack } from "grommet";
import { CardHeading } from "./CardHeading";
import { CardLegend } from "./CardLegend";
import SearchResult from "../interfaces/search.interface";
const accentColors = ['accent-4','accent-3'];

const Circle = ({ size, color, ...rest }) => (
  <Box
    width={size}
    height={size}
    background={color}
    animation={{ size: "xlarge", type: "zoomIn" }}
    {...rest}
  />
);
interface LegendInfo {
  name: string;
  value?: string;
  color: string;
}


interface MarketCapProps {
  cardname:String, 
  selectedSecurity:SearchResult,
  [propName: string]: {};
}

export interface MarketCapRef {
  updateLegend(selection:SearchResult): void;
}
export const MarketCap = React.forwardRef<MarketCapRef, MarketCapProps>(
  (props, ref) => {
    var {cardname, selectedSecurity, ...rest } = props;
    const [legend, setLegend] = useState<LegendInfo[]>([
      {
        name: selectedSecurity.symbol,
        color: accentColors[0],
        value: selectedSecurity.marketCap,
      },
      {
        name: selectedSecurity.industry + " : " + selectedSecurity.sector,
        color: accentColors[1],
        value: selectedSecurity.industryMarketCap,
      },
    ]);
  
    useImperativeHandle(ref, () => ({ updateLegend }));
    function updateLegend(selection:SearchResult) { 
      setLegend([
        {
          name: selectedSecurity.symbol,
          color: accentColors[0],
          value: selectedSecurity.marketCap,
        },
        {
          name: selectedSecurity.industry + " : " + selectedSecurity.sector,
          color: accentColors[1],
          value: selectedSecurity.industryMarketCap,
        },
      ])
   }
  
    
    const ratio = parseFloat(selectedSecurity.industryMarketCap)/parseFloat(selectedSecurity.marketCap);
  
    const relative:String = Math.sqrt((160000)/(ratio)).toString()+"px";
    return (
      <CardHeading
        title={cardname}
        pad={{ horizontal: "small", vertical: "medium" }}
        width="450px"
        height="450px"
        {...rest}
      >
        <Box
          direction="row"
          pad={{ horizontal: "xxsmall", vertical: "xxsmall" }}
          alignSelf="center"
          align="center"
        >
          <Stack anchor="bottom-left">
            <Circle size="400px" color={accentColors[1]} elevation="large" />
            <Circle size={relative} color={accentColors[0]} elevation="large" />
          </Stack>
        </Box>
        <Box flex />
        <CardLegend items={legend} />
      </CardHeading>
    );  }
);

