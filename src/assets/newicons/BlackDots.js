import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgBlackDots = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 11 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M9.984 4.618a.258.258 0 0 0-.143-.472H6.89c-.11 0-.209-.071-.244-.176l-.902-2.691a.258.258 0 0 0-.49 0L4.354 3.97a.258.258 0 0 1-.244.176h-2.95a.258.258 0 0 0-.142.472l2.369 1.575c.098.065.14.188.1.3l-.923 2.651a.258.258 0 0 0 .392.296l2.397-1.684a.258.258 0 0 1 .296 0L8.046 9.44a.258.258 0 0 0 .391-.296l-.923-2.652a.258.258 0 0 1 .1-.3l2.37-1.574Z"
      fill="#B4B5B9"
      stroke="#B4B5B9"
      strokeWidth={0.69}
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgBlackDots);
export default Memo;
