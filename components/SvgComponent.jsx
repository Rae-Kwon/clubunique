const SvgComponent = ({
  className,
  dataTheme,
  viewBox,
  draw,
  stroke,
  strokeWidth,
  width,
  height,
  title,
  description,
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
    role="img"
    aria-labelledby="title desc"
  >
    <title id={`${title}`}>{title}</title>
    <desc id={`${title}Icon`}>{description}</desc>
    <path
      d={draw}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
