import "./styles/HighlightedTextWithDots.css";

interface Props {
  children: string;
  colorBackground: string;
  colorDots: string;
  colorText: string;
  widthDots: number;
  widthBorder: number;
  leftSide?: boolean; 
  rightSide?: boolean; 
}

export default function HighlightedTextWithDots({
  children,
  colorBackground,
  colorDots,
  colorText,
  widthDots,
  widthBorder,
  leftSide = true,  
  rightSide = true, 
}: Props) {
  const dotStyle = (position: { top?: number; bottom?: number; left?: number; right?: number }) => ({
    backgroundColor: colorDots,
    width: widthDots,
    height: widthDots,
    ...position,
  });

  const offsetTopBottom = -3 * (widthBorder === 1 ? widthBorder : widthBorder / 2.5);
  const offsetLeftRight = -3 * (widthBorder === 1 ? widthBorder : widthBorder / 1.5);

  const dots = [
    { show: leftSide, position: { top: offsetTopBottom, left: offsetLeftRight } },  
    { show: rightSide, position: { top: offsetTopBottom, right: offsetLeftRight } }, 
    { show: leftSide, position: { bottom: offsetTopBottom, left: offsetLeftRight } },
    { show: rightSide, position: { bottom: offsetTopBottom, right: offsetLeftRight } }, 
  ];

  return (
    <span
      className="highlightedText-with-dots"
      style={{
        backgroundColor: colorBackground,
        borderColor: colorDots,
        color: colorText,
        borderWidth: widthBorder,
        borderLeftWidth: leftSide ? widthBorder : 0,
        borderRightWidth: rightSide ? widthBorder : 0,
        paddingTop: widthDots >= 10 ? 3: 6,
        paddingBottom: widthDots >= 10 ? 0: 3,
      }}
    >
      {children}
      {dots
        .filter(dot => dot.show) 
        .map((dot, idx) => (
          <div key={idx} className={`highlighted-dot p${idx + 1}`} style={dotStyle(dot.position)} />
        ))}
    </span>
  );
}
