const SvgComponent = ({
  className,
  dataTheme,
  viewBox,
  draw,
  stroke,
  strokeWidth,
  width,
  height,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
    className={className}
    data-theme={dataTheme}
    viewBox={viewBox}
    stroke={stroke}
    strokeWidth={strokeWidth}
    width={width}
    height={height}
  >
    <path
      d={draw}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
