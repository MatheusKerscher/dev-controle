const Loading = () => {
  return (
    <div className="mx-auto w-full">
      <div className="space-y-3 w-full animate-pulse">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="h-40 rounded bg-gray-200"></div>
          <div className="h-40 rounded bg-gray-200"></div>
          <div className="h-40 rounded bg-gray-200"></div>
          <div className="h-40 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
