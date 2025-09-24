const Loading = () => {
  return (
    <div className="mx-auto w-full">
      <div className="space-y-3 w-full animate-pulse">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2 h-6 rounded bg-gray-200"></div>
          <div className="col-span-1 hidden sm:block h-6 rounded bg-gray-200"></div>
          <div className="col-span-1 hidden sm:block h-6 rounded bg-gray-200"></div>
          <div className="col-span-2 sm:col-span-1 h-6 rounded bg-gray-200"></div>
          <div className="col-span-2 sm:col-span-1 h-6 rounded bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2 h-6 rounded bg-gray-200"></div>
          <div className="col-span-1 hidden sm:block h-6 rounded bg-gray-200"></div>
          <div className="col-span-1 hidden sm:block h-6 rounded bg-gray-200"></div>
          <div className="col-span-2 sm:col-span-1 h-6 rounded bg-gray-200"></div>
          <div className="col-span-2 sm:col-span-1 h-6 rounded bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2 h-6 rounded bg-gray-200"></div>
          <div className="col-span-1 hidden sm:block h-6 rounded bg-gray-200"></div>
          <div className="col-span-1 hidden sm:block h-6 rounded bg-gray-200"></div>
          <div className="col-span-2 sm:col-span-1 h-6 rounded bg-gray-200"></div>
          <div className="col-span-2 sm:col-span-1 h-6 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
