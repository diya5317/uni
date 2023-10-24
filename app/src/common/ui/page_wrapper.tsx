export const PageWrapper = (props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    style={{ width: 800, maxWidth: "100vw", margin: "0 auto", ...props.style }}
  >
    {props.children}
  </div>
);
