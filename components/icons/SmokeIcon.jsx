import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={11}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M9.8.688v.236c0 .82.332 1.607.923 2.187l.46.451c.459.451.717 1.064.717 1.702V5.5c0 .38-.313.688-.7.688a.693.693 0 0 1-.7-.688v-.236c0-.273-.112-.535-.308-.729l-.46-.45A4.432 4.432 0 0 1 8.4.923V.687c0-.38.313-.687.7-.687.387 0 .7.307.7.688ZM12.6 5.5v-.236c0-.821-.332-1.607-.923-2.187l-.46-.452A2.385 2.385 0 0 1 10.5.924V.687c0-.38.313-.687.7-.687.387 0 .7.307.7.688v.236c0 .273.112.535.308.728l.46.451A4.428 4.428 0 0 1 14 5.263V5.5c0 .38-.313.688-.7.688a.693.693 0 0 1-.7-.688ZM0 8.938c0-.759.628-1.376 1.4-1.376h7.7c.387 0 .7.308.7.688v2.063c0 .38-.313.687-.7.687H1.4C.628 11 0 10.383 0 9.625v-.688Zm4.9 0v.687h3.5v-.688H4.9Zm6.3-1.376c.387 0 .7.308.7.688v2.063c0 .38-.313.687-.7.687a.693.693 0 0 1-.7-.688V8.25c0-.38.313-.688.7-.688Zm2.1 0c.387 0 .7.308.7.688v2.063c0 .38-.313.687-.7.687a.693.693 0 0 1-.7-.688V8.25c0-.38.313-.688.7-.688Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v11H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
