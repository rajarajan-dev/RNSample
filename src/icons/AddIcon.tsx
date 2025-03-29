import * as React from "react";
import Svg, { SvgProps, G, Circle, Path } from "react-native-svg";
const AddIcon = (props: SvgProps) => (
  <Svg {...props}>
    <G data-name="add icon" transform="translate(-8 -8)">
      <Circle
        cx={28}
        cy={28}
        r={28}
        fill="#005aa5"
        data-name="Ellipse 1"
        opacity={0.173}
        transform="translate(8 8)"
      />
      <Circle
        cx={20}
        cy={20}
        r={20}
        fill="#005aa5"
        data-name="Ellipse 3"
        transform="translate(16 16)"
      />
      <G
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={3}
        data-name="Group 2"
      >
        <Path d="M36 44V28" data-name="Line 1" />
        <Path d="M28 36h16" data-name="Line 2" />
      </G>
    </G>
  </Svg>
);
export default AddIcon;
