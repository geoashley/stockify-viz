// import React, { useRef, useEffect } from 'react';
// import * as d3 from 'd3';

interface IProps {
  data?: number[];
}

// /* Component */
export function Circle(props: IProps) {
//     /* The useRef Hook creates a variable that "holds on" to a value across rendering
//        passes. In this case it will hold our component's SVG DOM element. It's
//        initialized null and React will assign it later (see the return statement) */
//     const d3Container = useRef(null);

//     /* The useEffect Hook is for running side effects outside of React,
//        for instance inserting elements into the DOM using D3 */
//     useEffect(
//         () => {
//             if (props.data && d3Container.current) {
//                 const svg = d3.select(d3Container.current);

//                 svg
//                 .append('circle')
//                 .attr('cx', '50%')
//                 .attr('cy', '50%')
//                 .attr('r', 200)
//                 .style('fill', 'green');
//             }
//         },

//         /*
//             useEffect has a dependency array (below). It's a list of dependency
//             variables for this useEffect block. The block will run after mount
//             and whenever any of these variables change. We still have to check
//             if the variables are valid, but we do not have to compare old props
//             to next props to decide whether to rerender.
//         */
//         [props.data, d3Container.current])

//     return (
//         <svg
//             className="d3-component"
//             width={400}
//             height={400}
//             ref={d3Container}
//         />
//     );
}