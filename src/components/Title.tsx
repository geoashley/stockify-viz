import React from "react";
import { Box, Text, Heading } from "grommet";

export default function Title({ selectedSecurity, ...rest }) {
  return (
    <Box round pad="medium" direction="column" background="white" {...rest}>
      <Heading level="3" margin="none" size="xxsmall">
        {selectedSecurity.symbol}
      </Heading>
      <Text size="25px" weight="bold">
        {selectedSecurity.lastSale}
      </Text>
    </Box>
  );
}
