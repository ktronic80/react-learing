import AlbumImage from "./album-image";

function createAlbumImage({ id, name, image }) {
  return <AlbumImage key={id} id={id} name={name} imageUrl={image} />;
}

export default function AlbumGrid({ images, searchTerm }) {
  if (images && images.length > 0) {
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
    let message = 'No images found';
    if (searchTerm) {
      message = message + ` for ${searchTerm}`;
    }
    return <div> {message}</div>;
  }
}
