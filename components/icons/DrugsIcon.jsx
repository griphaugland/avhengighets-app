import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={11}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M2.528 2.063c-.598 0-1.084.461-1.084 1.03V5.5h2.167V3.094c0-.57-.485-1.031-1.083-1.031ZM0 3.093C0 1.764 1.13.689 2.528.689c1.397 0 2.528 1.076 2.528 2.406v4.812c0 1.33-1.131 2.407-2.528 2.407S0 9.236 0 7.905V3.094Zm12.524 5.488c-.16.264-.535.281-.763.066l-4.234-4.03c-.226-.215-.21-.574.07-.726a3.736 3.736 0 0 1 1.792-.454C11.384 3.438 13 4.976 13 6.876c0 .62-.174 1.203-.476 1.706ZM11.18 9.859a3.736 3.736 0 0 1-1.792.454c-1.995 0-3.611-1.539-3.611-3.438 0-.62.174-1.203.476-1.706.16-.264.535-.281.763-.066l4.234 4.03c.226.215.21.574-.07.726Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h13v11H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
