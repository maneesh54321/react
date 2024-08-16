export default function Button({ children, nobg, ...props }) {
  let classes = "rounded-md bg-gray-600 px-4 py-2 text-white";
  if (nobg) {
    classes = "px-4 py-2 text-black hover:text-red-500";
  }
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
