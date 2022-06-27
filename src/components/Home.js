import React from "react";
import { ProductCard, AboutCard } from "./ProductCard.js";
import { WavyDiv, MenuBar, Arrowdown, SearcIcon } from "./Icons.js";

const Home = () => {
  const products = [
    {
      image:
        "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1656224772/pexels-dmitry-zvolskiy-2082087_1_mufkd6.png",
      title: "Room with one king-size bed",
      price: "35$",
      size: (
        <span>
          28M<sup>2</sup>
        </span>
      ),
    },
    {
      image:
        "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1656224764/pexels-naim-benjelloun-2029670_1_j27kek.png",
      title: "Penthouse for 8 person",
      price: "2039$",
      size: (
        <span>
          438M<sup>2</sup>
        </span>
      ),
    },
  ];

  const about = [
    {
      image:
        "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1656224753/pexels-max-vakhtbovych-5998051_1_ryc5xs.png",
      title: "Chapter I",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      abtcardimg: {
        width: "90%",
        height: "267px",
      },
      cstClass: "col-md-5",
    },

    {
      image:
        "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1656224753/pexels-max-vakhtbovych-6492403_1_pgbiyw.png",
      title: "Chapter II",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      abtcardimg: {
        width: "90%",
        height: "333px",
      },
      cstClass: "col-md-7",
    },

    {
      image:
        "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1656224751/pexels-houzlook-com-3356416_2_femxsq.png",
      title: "Chapter III",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      abtcardimg: {
        width: "90%",
        height: "503px",
      },
      cstClass: "col-md-5",
    },
    {
      image:
        "https://res.cloudinary.com/aditya-college-of-engineering-technology/image/upload/v1656224772/pexels-oleg-zaicev-4834891_1_m3loug.png",
      title: "Chapter IV",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun",
      abtcardimg: {
        width: "90%",
        height: "500px",
      },
      cstClass: "col-md-7",
    },
  ];

  return (
    <div>
      <div className="section1">
        <div className="overlay1">
          <div className="headernav row">
            <div className="logo">Your Logo</div>
            <div className="navmenu">
              <div>Explore</div>
              <div>about us</div>
              <div>Cites</div>
              <div>
                <button style={{ padding: "6px 40px" }}>Call</button>
              </div>
            </div>
            <div className="menuicon">
              <MenuBar />
            </div>
          </div>
          <header className="headermain">
            <h1>
              {" "}
              Rethink your <br />
              living & renting{" "}
            </h1>
            <h4>Make your stay painless with us</h4>
          </header>
          <div
            className="d-flex center-center"
            style={{ width: "100%", marginBottom: "50px" }}
          >
            <div className="searchOptions transparent_block row">
              {/* Bootstrap is not used  all classes are selfmade*/}
              {/* Bootstrap is not used  all classes are selfmade*/}
              {/* Bootstrap is not used  all classes are selfmade*/}
              {/* Bootstrap is not used  all classes are selfmade*/}
              <div className="searchoption col-sm-3">
                <p style={{ color: "#6D6D6D", fontSize: "6px;" }}>CITY</p>
                Select your city
              </div>
              <div className="searchoption col-sm-3">
                <p style={{ color: "#6D6D6D", fontSize: "6px;" }}>DATES</p>
                Select your dates
              </div>
              <div className="searchoption col-sm-3">
                <p style={{ color: "#6D6D6D", fontSize: "6px;" }}>GUESTS</p>
                Add guests
              </div>
              <button
                className="srcbutton col-sm-3 d-flex center-center"
                style={{ fontSize: "26px", height: "100%", fontWeigt: "500" }}
              >
                <SearcIcon />
                &nbsp; Search
              </button>
            </div>
          </div>
          <div className="d-flex center-center">
            <Arrowdown />
          </div>
        </div>
      </div>
      <div className="Hidewave">
        <WavyDiv />
      </div>

      {/* <div className="wavyDiv" style={{ width: "100%" }}></div> */}
      <div className="section2">
        <div className="subsecbody">
          <div className="subsechead">
            <h1>Explore</h1>
            <p>
              From one-guest rooms to
              <br /> penthouses with pools and gardens
            </p>
          </div>
          <div className="row">
            {products.map((item, idx) => {
              return (
                <ProductCard
                  key={idx}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  size={item.size}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="section3" style={{ marginTop: "150px" }}>
        <div className="subsecbody">
          <div className="subsechead">
            <h1>About us</h1>
            <p>Allow us to tell you a short story...</p>
          </div>
          <div className="row">
            {about.map((item, index) => {
              return (
                <AboutCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  details={item.details}
                  abtcardimg={item.abtcardimg}
                  cstClass={item.cstClass}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="subsecbody">
          <div className="footernav">
            <div className="footer_logo_container">
              <div className="footerlogo">Your Logo</div>
              <p>
                2021 Company Name
                <br />
                All rights reserved
              </p>
            </div>

            <div className="footernavmenu">
              <div>Explore</div>
              <div>about us</div>
              <div>Cites</div>
              <div>
                <button>Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
