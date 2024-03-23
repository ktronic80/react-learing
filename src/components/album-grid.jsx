import AlbumImage from "./album-image";

function createAlbumImage({ name, image }) {
  return <AlbumImage name={name} imageUrl={image} />;
}

export default function AlbumGrid({ images, searchTerm }) {
  if (images) {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        {images.map((image) => {
          return createAlbumImage(image);
        })}
      </div>
    );
  } else {
    return <div>No images found for {searchTerm}</div>;
  }
}
