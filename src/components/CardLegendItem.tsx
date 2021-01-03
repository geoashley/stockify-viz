import React from 'react';
import { Box, Text } from 'grommet';
import { convertToRepresentation} from '../util/numericUtil'

export const CardLegendItem = ({ item, showValue = true }) => (
  <Box direction="row" gap="xsmall" align="center">
    <Box background={item?.color} pad="xsmall" margin="xxsmall" />
    <Text size="xsmall">{item?.name}</Text>
    {showValue && (
      <Text weight="bold" size="xsmall">
        {convertToRepresentation(item?.value)}
      </Text>
    )}
  </Box>
);
