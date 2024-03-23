export default function AlbumImage({ name, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>{name}</div>
    </div>
  );
}
