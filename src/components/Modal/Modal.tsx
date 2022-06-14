import { useContext } from "react";

import { UserContext } from "../../contexts/UserContext";
import { DownloadSimple, X } from "phosphor-react";

import { saveAs } from "file-saver";
import { GalleryGrid } from "../Gallery/GalleryGrid";
import { GallerySearch } from "../Gallery/GallerySearch";

function download(photo: any) {
  saveAs(photo.photo, "image.jpg");
}

function Modal() {
  const { isOpenModal, setIsOpenModal, modalInfo, barSearch } =
    useContext(UserContext);

  return (
    <div
      className={
        isOpenModal
          ? "flex absolute inset-0 items-center justify-center py-24 h-fit z-50 bg-slate-800/30 backdrop-blur-md"
          : "hidden"
      }
    >
      <div className="bg-slate-200 dark:bg-slate-800 rounded-md w-5/6 relative p-6">
        {[modalInfo].map((photo) => {
          return (
            <div key={photo.id}>
              <div className="flex justify-between mb-8">
                <div>
                  <h2 className="text-red-600 dark:text-white text-xl font-bold">
                    {photo.photographer}
                  </h2>
                  <a
                    href={photo.photographer_url}
                    target="_blank"
                    className="text-red-600 dark:text-white hover:cursor-pointer hover:text-red-700"
                  >
                    View profile
                  </a>
                </div>
                <div className="flex">
                  <button
                    onClick={() => download({ photo: photo.src.large })}
                    className="flex cursor-pointer rounded-md mr-8 items-center px-4 py-1 h-fit text-slate-800 bg-slate-300 hover:bg-red-600 hover:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white transition-all md:flex mobile:hidden"
                  >
                    <DownloadSimple size={20} className="mr-2" /> Download
                  </button>
                  <X
                    size={32}
                    className="cursor-pointer right-6 top-6 rounded-md text-slate-800 bg-slate-300 hover:bg-red-600 hover:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white transition-all"
                    onClick={() => setIsOpenModal(false)}
                  />
                </div>
              </div>
              <div className="flex justify-center mb-8 mobile:flex-col items-center">
                <img src={photo.src.large} alt={photo.alt}></img>
                <button
                  onClick={() => download({ photo: photo.src.large })}
                  className="flex cursor-pointer rounded-md mt-8 w-full items-center py-4 h-fit text-slate-800 justify-center bg-slate-300 hover:bg-red-600 hover:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white transition-all md:hidden"
                >
                  <DownloadSimple size={20} className="mr-2" /> Download
                </button>
              </div>
            </div>
          );
        })}
        <h2 className="text-3xl md:pt-20 mobile:pt-8 my-8">More like this...</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 auto-cols-max gap-4 md:grid-cols-4 md:gap-6">
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
    </div>
  );
}

export default Modal;
