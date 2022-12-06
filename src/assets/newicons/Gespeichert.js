import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
const SvgGespeichert = props => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className
    {...props}>
    <Path
      d="M9.563 11.25H3.186A1.687 1.687 0 0 1 1.5 9.562V3.189A1.687 1.687 0 0 1 3.188 1.5h6.374a1.687 1.687 0 0 1 1.688 1.688v6.374a1.687 1.687 0 0 1-1.688 1.688Zm11.25 0h-6.375a1.687 1.687 0 0 1-1.688-1.688V3.189A1.687 1.687 0 0 1 14.438 1.5h6.374A1.687 1.687 0 0 1 22.5 3.188v6.374a1.687 1.687 0 0 1-1.688 1.688ZM9.563 22.5H3.186A1.687 1.687 0 0 1 1.5 20.812v-6.375a1.687 1.687 0 0 1 1.688-1.687h6.374a1.687 1.687 0 0 1 1.688 1.688v6.374A1.687 1.687 0 0 1 9.562 22.5Zm11.25 0h-6.375a1.687 1.687 0 0 1-1.688-1.688v-6.375a1.687 1.687 0 0 1 1.688-1.687h6.374a1.687 1.687 0 0 1 1.688 1.688v6.374a1.687 1.687 0 0 1-1.688 1.688Z"
      fill="#007AFE"
    />
  </Svg>
);
const Memo = memo(SvgGespeichert);
export default Memo;
