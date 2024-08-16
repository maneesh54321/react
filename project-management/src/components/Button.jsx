export default function Button({ children, ...props }) {
  return (
    <button {...props} className="rounded-md bg-gray-600 px-4 py-2 text-white">
      {children}
    </button>
  );
}
