export default function ProfilePictureComp({ fotoUrl }) {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
      }}
    >
      <img
        className="w-full p-1 rounded-full ring-4 ring-default"
        src={fotoUrl}
        alt="ProfilePicture"
      />
    </div>
  );
}
