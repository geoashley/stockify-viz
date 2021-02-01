export const responsiveRows = {
    small: ['auto', 'auto', 'auto', 'auto', 'auto'],
    medium: ['auto', 'auto', 'auto'],
    large: ['auto', 'auto'],
  };
  
  export const responsiveColumns = {
    small: ['flex'],
    medium: ['flex', 'flex', 'flex'],
    large: ['flex', 'flex', 'flex', 'flex'],
  };
  
  export const responsiveAreas = {
    small: [
      { name: 'marketcap', start: [0, 0], end: [0, 0] },
      { name: 'pe', start: [0, 1], end: [0, 1] },
    ],
    medium: [
      { name: 'marketcap', start: [0, 0], end: [0, 0] },
      { name: 'pe', start: [1, 0], end: [1, 0] },
    ],
    large: [
      { name: 'marketcap', start: [0, 0], end: [0, 0] },
      { name: 'pe', start: [1, 0], end: [1, 0] },
    ],
  };