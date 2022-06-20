import { CircleNotch } from "phosphor-react";
import { Key, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface photosInterface {
  id: Key | null | undefined;
  src: { large: string | undefined; original: string | undefined };
  alt: string;
  photographer: string;
}

export function GalleryGrid() {
  const { photo, modal } = useContext(UserContext);

  return (
    <>
      {photo.map((photos: photosInterface) => (
        <div key={photos.id}>
          <a className="relative z-0 row-auto">
            <img
              role="button"
              tabIndex={0}
              onKeyPress={() => modal({ photo: photos })}
              onClick={() => modal({ photo: photos })}
              src={photos.src.large}
              className="h-full object-cover rounded-2xl hover:shadow-lg hover:shadow-red-700 border-slate-300 dark:border-slate-800 transition-all ease-in-out"
              alt={photos.alt}
            ></img>
            <div className="absolute bottom-3 mx-4 text-white">
              <p>{photos.photographer}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
