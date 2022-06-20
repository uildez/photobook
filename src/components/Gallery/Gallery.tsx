import { CircleNotch } from "phosphor-react";
import { Key, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { GalleryGrid } from "./GalleryGrid";
import { GallerySearch } from "./GallerySearch";

export function Gallery() {
  const {
    barSearch,
    isFetching,
    count,
    setCount,
    countSearch,
    setCountSearch,
    handleSearchChange,
    setBarSearch,
    searchWord,
  } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col md:pt-32 min-h-[600px] justify-between items-center px-6 py-6 bg-slate-200 dark:bg-slate-700 md:px-24 mobile:pt-40"
      >
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 auto-cols-max gap-4 md:grid-cols-4 md:gap-6 "
          >
            {barSearch ? (
              <>
                <GallerySearch />
              </>
            ) : (
              <>
                <GalleryGrid />
              </>
            )}
          </div>
        </div>
        <>
          {barSearch ? (
            <>
              {isFetching && (
                <button
                  type="button"
                  className="bg-red-600 flex items-center mt-12 cursor-pointer px-8 py-4 rounded-full text-white hover:bg-red-800 transition-all ease-in-out text-xl font-semibold"
                  disabled
                >
                  <CircleNotch
                    className="animate-spin h-5 w-5 mr-3 ..."
                    size={32}
                  />
                  Load More...
                </button>
              )}
              {!isFetching && (
                <button
                  className="bg-red-600 mt-12 cursor-pointer px-8 py-4 rounded-full text-white hover:bg-red-800 transition-colors text-xl font-semibold"
                  onClick={() => {
                    setCountSearch(countSearch + 20),
                      handleSearchChange(searchWord);
                  }}
                >
                  Load more
                </button>
              )}
            </>
          ) : (
            <>
              {isFetching && (
                <button
                  type="button"
                  className="bg-red-600 flex items-center mt-12 cursor-pointer px-8 py-4 rounded-full text-white hover:bg-red-800 transition-all ease-in-out text-xl font-semibold"
                  disabled
                >
                  <CircleNotch
                    className="animate-spin h-5 w-5 mr-3 ..."
                    size={32}
                  />
                  Load More...
                </button>
              )}
              {!isFetching && (
                <button
                  className="bg-red-600 mt-12 cursor-pointer px-8 py-4 rounded-full text-white hover:bg-red-800 transition-colors text-xl font-semibold"
                  onClick={() => setCount(count + 20)}
                >
                  Load more
                </button>
              )}
            </>
          )}
        </>
      </div>
    </>
  );
}
