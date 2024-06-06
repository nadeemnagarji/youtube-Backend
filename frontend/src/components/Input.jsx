export default function Input({
  placeholder,
  name,
  onChange,
  label,
  type = "text",
  classes,
}) {
  return (
    <div
      className={`w-full gap-2  flex flex-col items-center justify-center ${classes}`}
    >
      {label ? (
        <label
          className=" self-start text-md font-semibold  text-black"
          htmlFor=""
        >
          {label}
        </label>
      ) : null}

      <input
        className={`w-full rounded-sm p-1 placeholder:ml-4 ${classes}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
