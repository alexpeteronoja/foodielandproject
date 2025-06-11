import Ads from '../component/Ads';
import Card from '../component/Card';
import Footer from '../component/Footer';
import IngredientandDirection from '../component/IngredientandDirection';
import Navbar from '../component/navbar';
import RecipeCard from '../component/RecipeCard';
import Subscribe from '../component/Subscribe';
import DeliciousRecipeData from '../data/DeliciousRecipeData';
import SimpleRecipe from '../data/SimpleRecipe';

function Recipe() {
  return (
    <>
      <div>
        <Navbar />

        <div className="mx-5 lg:mx-[80px]">
          <div className="grid lg:grid-cols-[60%_40%] mt-20 gap-y-16 gap-x-10">
            <div>
              <h1 className="font-semibold text-center md:text-start text-6xl  mb-12">
                Health Japanese Fried Rice
              </h1>

              <div className="flex flex-col md:flex-row gap-9">
                <div className="flex justify-center md:justify-start space-x-4 ">
                  <div>
                    <img
                      src="images/Ellipse 2.png"
                      alt=""
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <p className="font-bold">John Smith</p>
                    <p className="text-sm">15 March 2022</p>
                  </div>
                </div>

                <div className="flex gap-y-3 flex-wrap justify-center md:justify-start">
                  <div>
                    <div className="w-[139px] h-10 flex justify-center items-center space-x-2  ">
                      <div>
                        <img src="/images/Timer.png" alt="" className="w-6 " />
                      </div>

                      <div className="flex flex-col">
                        <div className="text-xs font-medium">PREP TIME</div>
                        <div className="text-sm">15 Minutes</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-[139px] h-10 flex justify-center items-center space-x-2  ">
                      <div>
                        <img
                          src="/images/Timer.png"
                          alt=""
                          className="w-6 h-6"
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className="text-xs font-medium">COOK TIME</div>
                        <div className="text-sm">15 Minutes</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="w-[139px] h-10 flex justify-center items-center space-x-2  ">
                      <div>
                        <img
                          src="/images/ForkKnife.png"
                          alt=""
                          className="w-6 h-6"
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className="text-sm">Chicken</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sharing and Printing */}

            <div className="flex justify-center lg:justify-end items-center space-x-8">
              <div>
                <img
                  src="images/printer.png"
                  alt=""
                  className="bg-[#E7FAFE] p-7 rounded-full"
                />
                <p className="font-medium text-xs text-center">Print</p>
              </div>

              <div className="">
                <img
                  src="images/share.png"
                  alt=""
                  className="bg-[#E7FAFE] p-7 rounded-full w-20"
                />
                <p className="font-medium text-xs text-center">SHARE</p>
              </div>
            </div>

            {/* Big Image Thurmnail */}

            <div>
              <img src="images/Group 13937.png" alt="" className="w-full" />
            </div>

            {/* Nutrition Information */}

            <div className="bg-[#E7FAFE] rounded-3xl p-8  flex flex-col justify-between">
              <div>
                <p className="font-semibold text-2xl mb-6">
                  Nutrition Information
                </p>

                <table className="font-medium text-lg w-full nutrition-table">
                  <tr>
                    <td className="text-[#00000099]">Calories</td>
                    <td>219.9 kcal</td>
                  </tr>

                  <tr>
                    <td className="text-[#00000099]">Total Fat</td>
                    <td>10.7 g</td>
                  </tr>

                  <tr>
                    <td className="text-[#00000099]">Protein</td>
                    <td>7.9 g</td>
                  </tr>

                  <tr>
                    <td className="text-[#00000099]">Carbohydrate</td>
                    <td>22.3 g</td>
                  </tr>

                  <tr>
                    <td className="text-[#00000099]">Cholesterol</td>
                    <td>37.4 mg</td>
                  </tr>
                </table>
              </div>

              <div>
                <p className="text-center font-normal text-[#00000099]">
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.{' '}
                </p>
              </div>
            </div>
          </div>

          <p className="my-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="grid lg:grid-cols-[60%_40%] gap-y-16 gap-x-10">
            <div>
              <IngredientandDirection />
            </div>

            {/* Other Recipe Section */}

            <div>
              <p className="font-semibold text-3xl mb-8">Other Recipe</p>

              <div className="mb-20">
                {SimpleRecipe.sort(() => Math.random() - 0.5)
                  .slice(0, 3)
                  .map((item, index) => (
                    <div>
                      <RecipeCard
                        key={index}
                        title={
                          item.title.length > 31
                            ? `${item.title.slice(0, 31)}...`
                            : item.title
                        }
                        img={item.img}
                        chief={'By Andreas Paula'}
                        cardHeight={'120px'}
                      />
                    </div>
                  ))}
              </div>

              <div>
                <Ads />
              </div>
            </div>
          </div>

          <div className="my-40">
            <Subscribe />
          </div>

          <div>
            <div className="flex flex-wrap gap-6 justify-center mb-40">
              {DeliciousRecipeData.sort(() => Math.random() - 0.5)
                .slice(0, 4)
                .map((cardItem, index) => (
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

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
