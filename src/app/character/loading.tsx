const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-200 grid place-items-center">
      <span className="rounded-full border-4 border-red-300 border-t-red-500 animate-spin duration-300" />
    </div>
  );
};

export default Loading;
