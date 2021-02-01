import React, { useImperativeHandle, useState, useContext } from "react";
import { Box, Meter } from "grommet";
import { CardHeading } from "../CardHeading";
import { CardLegend } from "../CardLegend";
import Security from "../../interfaces/security.interface";
import { Context, Store } from '../../store'

const accentColors = ['accent-4', 'accent-3'];

interface LegendInfo {
  name: string;
  value?: string;
  color: string;
}


interface PERatioProps {
  cardname: String,
  [propName: string]: {};
}

export interface PERatioRef {
  updateLegend(selection: Security): void;
}

export const PERatio = React.forwardRef<PERatioRef, PERatioProps>(
  (props, ref) => {
    let { cardname,  ...rest } = props;
    const { state } = useContext(Context);
    let selectedCompany = state.selectedSecurity;

    const [legend, setLegend] = useState<LegendInfo[]>(getLegend(state));

    const [active, setActive] = useState("First")
    useImperativeHandle(ref, () => ({ updateLegend }));

    function updateLegend(selection: Security) {
      setLegend(getLegend(state))
    }
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
          {selectedCompany && selectedCompany.companyDetails && (
            <Meter
              round
              values={[
                {
                  label: "First",
                  value: parseFloat(selectedCompany.lastSale),
                  highlight: active === "First",
                  onHover: (over) =>
                    setActive("First")
                },
                {
                  label: "Second",
                  value: parseFloat(selectedCompany.companyDetails.EPS),
                  highlight: active === "Second",
                  onHover: (over) =>
                    setActive("Second")
                }
              ]}
            />
          )
          }
        </Box>
        <Box flex />
        <CardLegend items={legend} />
      </CardHeading>
    );
  }
);

const getLegend = (state: Store) => {
  if (!state.selectedSecurity || !state.selectedSecurity.companyDetails) {

    return []
  }
  return [
    {
      name: state.selectedSecurity.symbol,
      color: accentColors[0],
      value: state.selectedSecurity.companyDetails.PERatio,
    },
    {
      name: state.selectedSecurity.industry + " : " + state.selectedSecurity.sector,
      color: accentColors[1],
      value: state.selectedSecurity.companyDetails.EPS,
    },
  ]
}
