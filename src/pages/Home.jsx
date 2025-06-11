import React from 'react';
import Card from '../component/Card';
import Navbar from '../component/navbar';
import Categories from '../data/Categories';
import SimpleRecipe from '../data/SimpleRecipe';
import Ads from '../component/Ads';
import DeliciousRecipeData from '../data/DeliciousRecipeData';
import Subscribe from '../component/Subscribe';
import Footer from '../component/Footer';

function Home() {
  return (
    <>
      <div className="">
        <Navbar />

        <div className=" grid lg:grid-cols-2 lg:mx-[80px] lg:my-10">
          <div className="bg-[#E7FAFE] py-12 px-12 lg:rounded-l-4xl order-2 lg:order-1 min-w-0">
            <div>
              <p className="bg-[#FFFFFF] w-40 h-11 rounded-full flex justify-center items-center px-5 space-x-3">
                <img src="images/image 14.png" alt="" className="w-6 h-6" />
                <span className="text-sm font-semibold">Hot Recipes</span>
              </p>
            </div>
            <p className="font-semibold text-[64px] line-height-normal mt-8">
              Spicy delicious chicken wings
            </p>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{' '}
            </p>

            <div className="flex space-x-4 mt-8">
              <p className="w-[139px] h-10 flex justify-center items-center space-x-2 time-btn px-4 rounded-full">
                <img src="/images/Timer.png" alt="" className="w-6 h-6" />

                <span className="text-sm">30 Minutes</span>
              </p>

              <p className="w-[139px] h-10 flex justify-center items-center space-x-2 time-btn px-4 rounded-full">
                <img src="/images/ForkKnife.png" alt="" className="w-6 h-6" />{' '}
                <span>Chicken</span>
              </p>
            </div>

            {/* Profile  */}

            <div className="mt-24 flex flex-col md:flex-row  md:justify-between space-y-8 md:space-y-0">
              <div className="flex space-x-4 justify-center md:justify-start">
                <div>
                  <img
                    src="images/Ellipse 2.png"
                    alt=""
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <p className="font-bold">John Smith</p>
                  <p>15 March 2022</p>
                </div>
              </div>
              <div>
                <div className="flex justify-center md:justify-start">
                  <button className="w-50 h-15 bg-black text-white rounded-2xl px-9 flex justify-between items-center">
                    <span className="text-sm">View Recipes</span>
                    <img
                      src="images/PlayCircle.png"
                      alt=""
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="  order-1 lg:order-2">
            <img
              src="images/Mask Group - Copy.png"
              alt=""
              className="w-full h-[200px] md:h-[350px] lg:h-[100%]"
            />
          </div>
        </div>

        {/* Categories Section */}

        <div className="mx-5 lg:mx-[80px]">
          <div className="flex justify-between space-x-12 mt-40">
            <p className="font-semibold text-2xl md:text-5xl my-auto">
              Categories
            </p>
            <p className="text-center md:text-start bg-[#E7FAFE] w-[200px] h-[60px] rounded-2xl font-semibold flex justify-center items-center cursor-pointer">
              View All Categories
            </p>
          </div>

          <div className="flex flex-wrap justify-center mt-20 gap-x-3 gap-y-4 ">
            {Categories.map((card, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center space-y-7 px-7 w-40 md:w-45 h-51 rounded-4xl ${card.gradColor}`}
              >
                <img src={card.img} alt="" className="w-25 h-25" />
                <p className="font-semibold text-lg">{card.title}</p>
              </div>
            ))}
          </div>

          {/* Recipes Section */}

          <div className="">
            <p className="my-45 font-semibold text-5xl text-center ">
              Simple and tasty recipes
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
              {SimpleRecipe.map((cardItem, index) => (
                <React.Fragment key={index}>
                  <Card
                    key={index}
                    title={cardItem.title}
                    img={cardItem.img}
                    time={cardItem.time}
                    mealType={cardItem.mealType}
                    fontSize={'text-2xl'}
                    cardBgColor={
                      'bg-[linear-gradient(180deg,_#E7F9FD99_37%,_#E7F9FDFF_10%)]'
                    }
                    cardWidthandHeight={'h-full w-full max-w-[400px]'}
                  />

                  {index === 4 && (
                    <div>
                      <Ads />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Cheif Section */}

          <div className="grid md:grid-cols-2 my-35">
            <div className="order-2 md:order-1">
              <p className="font-semibold text-5xl mt-3 md:mt-41 mb-6 text-center md:text-start">
                Everyone can be a chef in their own kitchen
              </p>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim{' '}
              </p>
              <div className="mt-15 md:mt-18 flex justify-center md:justify-start">
                <button className="text-white text-sm bg-[#000000] rounded-2xl py-5 px-12 cursor-pointer ">
                  Learn More
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="images/Group 880.png"
                alt=""
                className="w-full h-full mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Social Handle Section */}

        <div className="bg-[#E7F9FD] px-5 lg:px-[80px] py-20 mb-40">
          <p className="font-semibold text-5xl text-center mb-6">
            Check out @foodieland on Instagram
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad
            minim{' '}
          </p>

          <div className="flex gap-4 flex-wrap justify-center my-20">
            <img src="images/Post.png" alt="" className="w-60" />
            <img src="images/Post (1).png" alt="" className="w-60" />
            <img src="images/Post (2).png" alt="" className="w-60" />
            <img src="images/Post (3).png" alt="" className="w-60" />
          </div>

          <div className="flex justify-center">
            <button className="w-57 h-15 bg-black text-white rounded-2xl flex justify-between items-center px-8 cursor-pointer">
              <p className="text-sm">Visit Our Instagram</p>
              <img src="images/004-instagram.png" alt="" className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mx-5 lg:mx-[80px]">
          {/* Delicious Recipe Section */}

          <div className="flex flex-col md:flex-row gap-8 mb-20">
            <p className="text-5xl font-semibold">
              Try this delicious recipe to make your day
            </p>
            <p className="my-auto">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{' '}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center mb-40">
            {DeliciousRecipeData.map((cardItem, index) => (
              <Card
                key={index}
                title={cardItem.title}
                img={cardItem.img}
                time={cardItem.time}
                mealType={cardItem.mealType}
                fontSize={'text-lg'}
                cardBgColor={
                  'bg-[linear-gradient(180deg,_#E7F9FD99_37%,_#E7F9FDFF_10%)]'
                }
                cardWidthandHeight={'w-[300px] md:w-[250px]  h-full'}
                cardImgHeight={'h-50'}
                // sm:w-[35rem] md:w-[100%] lg:w-[88%] xl:w-[100%]
              />
            ))}
          </div>
        </div>

        {/* Subscribe Section */}

        {/* <div className="mx-5 lg:mx-[80px]"> */}
        <div className="mb-40">
          <Subscribe />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
