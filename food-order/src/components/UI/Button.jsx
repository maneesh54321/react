export default function Button({
  textOnly,
  className = "",
  children,
  ...props
}) {
  let cssClass = "button";
  if (textOnly) {
    cssClass = "text-button";
  }
  return (
    <button className={`${cssClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
