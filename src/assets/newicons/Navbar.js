import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgNavbar = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M1.125 1.25h13.75M3.273 5h9.434M5.402 8.75h5.215"
      stroke="#007AFE"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgNavbar);
export default Memo;
