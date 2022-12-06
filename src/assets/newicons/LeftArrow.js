import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgLeftArrow = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="m10 2-8 8 8 8"
      stroke="#007AFE"
      strokeWidth={2.844}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgLeftArrow);
export default Memo;
