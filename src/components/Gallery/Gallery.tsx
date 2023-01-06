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
    setBarSearch,
    searchWord,
  } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col md:pt-32 min-h-[600px] justify-between items-center px-6 py-6 bg-slate-200 dark:bg-slate-700 md:px-24 mobile:pt-40">
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 auto-cols-max gap-4 md:grid-cols-4 md:gap-6 ">
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
              {!isFetching ? (
                <button
                  className="btn-red"
                  onClick={() => {
                    setCountSearch(countSearch + 20);
                  }}
                >
                  Load more
                </button>
              ) : (
                <>
                  <button type="button" className="btn-red" disabled>
                    <CircleNotch
                      className="animate-spin h-5 w-5 mr-3 ..."
                      size={32}
                    />
                    Load More...
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              {isFetching ? (
                <button type="button" className="btn-red" disabled>
                  <CircleNotch
                    className="animate-spin h-5 w-5 mr-3 ..."
                    size={32}
                  />
                  Load More...
                </button>
              ) : (
                <button
                  className="btn-red"
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
