import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgSuchen = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="m19.407 17.753-4.41-4.41A8.148 8.148 0 0 0 16.63 8.44c0-4.516-3.674-8.19-8.19-8.19S.25 3.924.25 8.44s3.674 8.19 8.19 8.19a8.148 8.148 0 0 0 4.902-1.633l4.41 4.41a1.171 1.171 0 0 0 1.655-1.654ZM2.59 8.44a5.85 5.85 0 1 1 5.85 5.85 5.857 5.857 0 0 1-5.85-5.85Z"
      fill="#959595"
    />
  </Svg>
);
const Memo = memo(SvgSuchen);
export default Memo;
