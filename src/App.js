import "./App.css";
import { Carousel } from "./lib";

function App() {
  const data = [
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
    {
      image:
        "https://realstate.test/storage/properties/test2/3475035-e6787o.webp",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            // radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            showNavBtn={false}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
