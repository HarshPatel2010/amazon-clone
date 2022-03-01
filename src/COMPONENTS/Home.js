import React from "react";
import "../CSS/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB407694131_.jpg"
          alt=""
        />
      </div>
      <div className="home__row">
        {/* product */}
        <Product
        key={"2535326262"}
        id={343333333}
          title={"this is amazon's first product"}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
          }
          price={19}
          rating={3}
        />
        <Product
          key={"1232"}
          id={3433333331}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
          price={11.96}
          ratings={5}
         
        />
        <Product
          key={"3923"}
          id={3433333323}
          title="Samsung 6.2 kg Fully-Automatic Top load Washing Machine (WA62M4100HY/TL, Imperial Silver)"
          price={212.68}
          ratings={4}
          image="https://www.reliancedigital.in/medias/JBL-T450-Headphones-and-Headstes-491315268-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjk3NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2g1MC85MjM5NzA5MjIwODk0LmpwZ3xmMWRhYWE4M2UyZDQ1NzA0MjIzYjRiNDZkMThkMzNiYjBhMWMxZGQ4YTc1ZGMwZWIyZTY5MDlkMzkzZDFlODk5"
        />

        {/* product */}
      </div>
      <div className="home__row">
        <Product
          key={"65420"}
          id={34333223333}
          title="Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
          price={221.13}
          ratings={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
        />
        <Product
          key={"212452"}
          id={3433322113333}
          title="JBL T450 Wired Headphone, Blue"
          price={21.13}
          ratings={5}
          image="https://www.reliancedigital.in/medias/JBL-T450-Headphones-and-Headstes-491315268-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjk3NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2g1MC85MjM5NzA5MjIwODk0LmpwZ3xmMWRhYWE4M2UyZDQ1NzA0MjIzYjRiNDZkMThkMzNiYjBhMWMxZGQ4YTc1ZGMwZWIyZTY5MDlkMzkzZDFlODk5"
        />
        <Product
          key={"581243"}
          id={34333333323}
          title="Samsung Galaxy A10 (Blue, 2GB RAM and 32GB) "
          price={179.99}
          ratings={4}
          image="https://www.reliancedigital.in/medias/JBL-T450-Headphones-and-Headstes-491315268-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjk3NDN8aW1hZ2UvanBlZ3xpbWFnZXMvaDk3L2g1MC85MjM5NzA5MjIwODk0LmpwZ3xmMWRhYWE4M2UyZDQ1NzA0MjIzYjRiNDZkMThkMzNiYjBhMWMxZGQ4YTc1ZGMwZWIyZTY5MDlkMzkzZDFlODk5"
        />
        <Product
          key={"61451"}
          id={343323233333}
          title="Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
          price={221.13}
          ratings={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
        id={32243333333}
         key={"612454"}
          title="Samsung 27 inch (68.5 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC27F390FHWXXL (Black)"
          price={221.13}
          ratings={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
