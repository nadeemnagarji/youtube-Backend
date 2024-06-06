import { useNavigate } from "react-router-dom";

export default function User({ firstName, lastName, id }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center bg-purple-300 py-2 px-2 rounded-lg shadow-sm ">
      <p className="text-lg capitalize font-medium">
        {firstName} {lastName}
      </p>
      <button
        className="bg-green-500 px-2 py-1 rounded-lg text-sm font-semibold capitalize"
        onClick={() => navigate(`/send?id=${id}&name=${firstName}`)}
      >
        send Money
      </button>
    </div>
  );
}
