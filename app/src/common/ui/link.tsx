import { Link as ReactRouterLink } from "react-router-dom";

export function Link({
  children,
  to,
  ...commonLinkProps
}: {
  children: React.ReactNode;
  to: string;
  tabIndex?: number;
}) {
  return isInternalURL(to) ? (
    <ReactRouterLink to={to} {...commonLinkProps}>
      {children}
    </ReactRouterLink>
  ) : (
    <a href={to} {...commonLinkProps}>
      {children}
    </a>
  );
}

const isInternalURL = (url: string) =>
  new URL(url, location.origin).origin === location.origin;
