import React, { useImperativeHandle, useState, useContext } from "react";
import { Box, Stack , Text, Card} from "grommet";
import { CardHeading } from "../CardHeading";
import { CardLegend } from "../CardLegend";
import Security from "../../interfaces/security.interface";
import { convertToRepresentation } from "../../util/numericUtil";
import { Context, Store } from "../../store";

const accentColors = [
  "accent-4",
  "accent-3",
  "neutral-3",
  "accent-1",
  "neutral-1",
  "neutral-2",
  "brand",
];

const Square = ({ symbol, size, color,mCap, ...rest }) => (
  <Box
    width={size}
    height={size}
    background={color}
    animation={{ size: "xlarge", type: "zoomIn" }}
    {...rest}>
      <Text alignSelf="center" margin="xsmall" weight="bold" size="xsmall">
      {symbol+` ${convertToRepresentation(mCap)}`}
      </Text> 
    </Box>
);
interface LegendInfo {
  name: string;
  value?: string;
  color: string;
}

interface MarketCapProps {
  cardname: String;
  [propName: string]: {};
}

export interface MarketCapRef {
  updateLegend(selection: Security): void;
}

export const MarketCap = React.forwardRef<MarketCapRef, MarketCapProps>(
  (props, ref) => {
    const { state } = useContext(Context);
    let { cardname, ...rest } = props;
    let selectedSecurity = state.selectedSecurity;
    let industryMarketCap = state.industryMarketCap;

    function updateLegend(selection: Security) {
      setLegend(getLegend(state));
    }

    useImperativeHandle(ref, () => ({ updateLegend }));

    const [legend, setLegend] = useState<LegendInfo[]>(getLegend(state));

    const calcRelativeSize = (symbolMarketCap: string) => {
      if (industryMarketCap) {
        const ratio =
          parseFloat(industryMarketCap) / parseFloat(symbolMarketCap);
        const relative: String = Math.sqrt(160000 / ratio).toString() + "px";
        return relative;
      }
      return null;
    };

    const getRelatedStack = () => {
      if (state.relatedCompanies.length > 0) {
        let sortedList = state.relatedCompanies.sort((a, b) => {
          return parseFloat(b.marketCap) - parseFloat(a.marketCap);
        });
        return (
            sortedList.map((item, index) => {
              return <Square
                symbol={item.symbol}
                mCap={item.marketCap}
                key={item.symbol}
                size={calcRelativeSize(item.marketCap)}
                color={accentColors[index + 2]}
                elevation="large"
              />;
            })
            
        );
      }
    };

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
          {selectedSecurity && industryMarketCap && (
            <Stack anchor="bottom-left">
              <Square
                symbol={selectedSecurity.industry+" - "+selectedSecurity.sector}
                key={state.industryMarketCap}
                mCap={state.selectedSecurity?.marketCap}
                size="400px"
                color={accentColors[1]}
                elevation="large"
              />
              {state.industryMarketCap && (
                <Square
                  symbol={selectedSecurity.symbol}
                  key={selectedSecurity.symbol}
                  mCap={state.industryMarketCap}
                  size={calcRelativeSize(selectedSecurity.marketCap)}
                  color={accentColors[0]}
                  elevation="large"
                />
              )}
              {getRelatedStack()}
            </Stack>
          )}
        </Box>
        <Box flex />
        <CardLegend items={getLegend(state)} />
      </CardHeading>
    );
  }
);

const getLegend = (state: Store) => {
  let arr: { name: string; color: string; value: string }[] = [];
  if (state.selectedSecurity) {
    // arr.push({
    //   name: state.selectedSecurity.symbol,
    //   color: accentColors[0],
    //   value: convertToRepresentation(state.selectedSecurity.marketCap),
    // });
    state.relatedCompanies &&
      state.relatedCompanies
        .sort((a, b) => {
          return parseFloat(b.marketCap) - parseFloat(a.marketCap);
        })
        .map((item, index) =>
          arr.push({
            name: item.symbol,
            color: accentColors[index + 2],
            value: convertToRepresentation(item.marketCap),
          })
        );
    state.industryMarketCap &&
      arr.push({
        name:
          state.selectedSecurity.industry +
          " : " +
          state.selectedSecurity.sector,
        color: accentColors[1],
        value: convertToRepresentation(state.industryMarketCap),
      });
  }
  return arr;
};

//const securityDisplayname = (name:String)=>name.replace(' Common Stock','');
