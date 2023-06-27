import image from "../image/Rick-and-Morty.png";

export default function Home() {
  return (
    <div classname="container">
      <img className="img-fluid " src={image} alt="" />
    </div>
  );
}
