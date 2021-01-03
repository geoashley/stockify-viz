import React from 'react';

import { Box } from 'grommet';
import {CardLegendItem as  LegendItem } from './CardLegendItem';

export const CardLegend = ({ items, ...rest }) => (
  <Box pad="small" gap="medium" direction="row" align="start">
    <Box>
      <LegendItem item={items[0]} {...rest} />
      <LegendItem item={items[1]} {...rest} />
    </Box>
    <Box>
      <LegendItem item={items[2]} {...rest} />
      <LegendItem item={items[3]} {...rest} />
    </Box>
    {items[4] && items[5] && (
      <Box>
        <LegendItem item={items[4]} {...rest} />
        <LegendItem item={items[5]} {...rest} />
      </Box>
    )}
  </Box>
);
