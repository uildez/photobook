import { CircleNotch } from "phosphor-react";
import { Key, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface photosInterface {
  id: Key | null | undefined;
  src: { medium: string | undefined; original: string | undefined };
  alt: string;
  photographer: string;
}

export function GalleryGrid() {
  const { photo, modal } = useContext(UserContext);

  return (
    <>
      {photo.map((photos: photosInterface) => (
        <div key={photos.id}>
          <div className="relative z-0 row-auto h-full">
            <img
              role="button"
              tabIndex={0}
              onClick={() => modal({ photo: photos })}
              src={photos.src.medium}
              className="photo"
              alt={photos.alt}
              width="100%"
              height="100%"
            ></img>
            <div className="absolute bottom-3 mx-4 text-white">
              <p>{photos.photographer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
