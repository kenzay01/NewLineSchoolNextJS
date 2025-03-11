import "./styles/HighlightedTextBorder.css";

export default function HighlightedTextBorder({ children, colorBorder }: { children: string; colorBorder: string }) {
    // Динамічне значення для позиціонування
    const dynamicBottom = children.length > 15 ? "8px" : "-4px";
    const dynamicRight = children.length > 15 ? "6px" : "-1px";

    return (
        <span
            className="highlighted-text-border"
            style={
                {
                    "--border-color": colorBorder,
                    "--bottom-offset": dynamicBottom,
                    "--right-offset": dynamicRight,
                } as React.CSSProperties
            }
        >
            {children}
        </span>
    );
}
