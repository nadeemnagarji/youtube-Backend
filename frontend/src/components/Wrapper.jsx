export default function Wrapper({ children }) {
  return (
    <div className="w-full h-screen bg-gray-500 flex justify-center items-center">
      {children}
    </div>
  );
}
