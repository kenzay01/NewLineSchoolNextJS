import { ReactNode } from "react";

export default function HighlightedText({
  children,
  colorBack,
  colorText,
}: {
  children: string | ReactNode;
  colorBack: string;
  colorText?: string;
}) {
  return (
    <span
      style={{
        backgroundColor: colorBack,
        paddingTop: 1,
        paddingLeft: 2,
        paddingRight: 2,
        color: colorText,
      }}
    >
      {children}
    </span>
  );
}
