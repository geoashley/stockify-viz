import React, { useImperativeHandle, useState, useContext } from "react";
import { Stack } from "grommet";
import { CardHeading } from "../CardHeading";
import { CardLegend } from "../CardLegend";
import Security from "../../interfaces/security.interface";
import { convertToRepresentation } from "../../util/numericUtil";
import { Context, Store } from "../../store";
import "../../styles/card.scss";

const accentColors = [
  "rgba(255,127,80,0.5)",
  "rgba(69, 67, 114,0)",
  "rgba(242, 244, 203)",
  "#4040a1",
  "#f4e1d2",
  "#f18973",
  "#bc5a45",
];

const Square = ({ symbol, size, color, mCap, ...rest }) => (
  <div style={{ width: size, height: size, background: color }} {...rest}>
    <h4>{symbol + ` ${convertToRepresentation(mCap)}`}</h4>
  </div>
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
        return sortedList.map((item, index) => {
          return (
            <Square
              symbol={item.symbol}
              mCap={item.marketCap}
              key={item.symbol}
              size={calcRelativeSize(item.marketCap)}
              color={accentColors[index + 2]}
              elevation="large"
            />
          );
        });
      }
    };

    return (
      <div className="card-wrapper" {...rest}>
        <h3> {cardname}</h3>
        <div>
          {selectedSecurity && industryMarketCap && (
            <Stack anchor="bottom-left">
              <Square
                symbol={
                  selectedSecurity.industry + " - " + selectedSecurity.sector
                }
                key={state.industryMarketCap}
                mCap={state.industryMarketCap}
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
        </div>
        <CardLegend items={getLegend(state)} />
      </div>
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
