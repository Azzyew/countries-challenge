
export function DetailSkeleton() {
  return (
    <div
      role="progressbar"
      className="flex flex-col px-6 mt-12 animate-pulse lg:flex-row lg:justify-between lg:mt-16 md:px-8 lg:px-16 xl:px-20 lg:py-12"
    >
      <div className="bg-[#f5f5f5] dark:bg-[#334351] rounded-md w-full h-full lg:h-[25rem] lg:w-2/5" />

      <div className="xl:w-[40%]">
        <div className="mt-8 h-10 w-72 rounded-md bg-[#f5f5f5] dark:bg-[#334351]" />

        <div className="lg:flex lg:flex-row lg:justify-between lg:mt-2">
          <div className="mt-6 space-y-3">
            <div className="detail-skeleton-text" />
            <div className="detail-skeleton-text" />
            <div className="detail-skeleton-text" />
            <div className="detail-skeleton-text" />
            <div className="detail-skeleton-text" />
          </div>

          <div className="mt-8 space-y-3 lg:mt-6">
            <div className="detail-skeleton-text" />
            <div className="detail-skeleton-text" />
            <div className="detail-skeleton-text" />
          </div>
        </div>

        <div className="mt-8 lg:mt-16">
          <div className="h-5 w-4/5 rounded-md bg-[#f5f5f5] dark:bg-[#334351]" />
        </div>
       
      </div>
    </div>
  );
}
