export default function HighlightedText({ children, colorBack }: { children: string; colorBack: string }) {
    return (
        <span style={{ backgroundColor: colorBack, paddingTop: 1, paddingLeft: 2, paddingRight: 2 }}>
            {children}
        </span>
    );
}
