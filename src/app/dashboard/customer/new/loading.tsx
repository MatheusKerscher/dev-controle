const Loading = () => {
  return (
    <div className="mx-auto w-full">
      <div className="space-y-3 w-full animate-pulse">
        <div className="flex flex-col gap-6">
          <div className="h-8 rounded bg-gray-200"></div>
          <div className="flex-col md:flex-row gap-6">
            <div className="flex-1 h-8 rounded bg-gray-200"></div>
            <div className="flex-1 h-8 rounded bg-gray-200"></div>
          </div>
          <div className="h-8 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
