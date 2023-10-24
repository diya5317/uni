import "./button.css";
import { Link } from "./link";

export function Button(
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant?: "primary" | "secondary"; to?: string },
) {
  const button = (
    <button
      {...props}
      className={props.variant === "primary" ? "button-primary" : undefined}
      style={{ fontWeight: "bold" }}
    />
  );
  return props.to ? (
    <Link to={props.to} tabIndex={-1}>
      {button}
    </Link>
  ) : (
    button
  );
}
