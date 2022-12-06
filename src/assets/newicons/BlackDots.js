import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgBlackDots = props => (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M9 10.688a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375ZM14.625 10.688a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375ZM3.375 10.688a1.687 1.687 0 1 0 0-3.375 1.687 1.687 0 0 0 0 3.375Z"
      fill="#000"
    />
  </Svg>
);
const Memo = memo(SvgBlackDots);
export default Memo;
