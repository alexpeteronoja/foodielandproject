import BlogCard from '../component/BlogCard';
import Footer from '../component/Footer';
import Navbar from '../component/navbar';
import RecipeCard from '../component/RecipeCard';
import Subscribe from '../component/Subscribe';
import BlogData from '../data/BlogData';
import SimpleRecipe from '../data/SimpleRecipe';

function Blog() {
  return (
    <>
      <div>
        <Navbar />

        <div className="mx-5 lg:mx-[80px]">
          <h1 className="mt-20 mb-6 font-semibold text-6xl text-center">
            Blog & Article
          </h1>

          <p className="text-center mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>

          <div className="flex justify-center">
            <div className="relative">
              <button className="absolute top-23 right-15 sm:top-2.5 sm:right-2 text-white text-sm bg-[#000000] rounded-2xl cursor-pointer w-40 h-15 ">
                Search
              </button>
              <input
                className="bg-white ps-8 pe-8 sm:pe-48 py-4 w-[100%]  h-20 rounded-3xl text-sm border border-[#0000001A]"
                type="text"
                placeholder="Search article, news or recipe..."
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-[60%_40%] gap-y-16 gap-x-10 mt-32 sm:mt-20">
            <div>
              {BlogData.map((item, index) => (
                <BlogCard
                  key={index}
                  title={item.title}
                  img={item.img}
                  content={item.content}
                  authorImg={item.authorImg}
                  author={item.author}
                  date={item.date}
                />
              ))}
            </div>

            <div>
              <p className="font-semibold text-3xl p-4">Tasty Recipes</p>

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
          </div>
        </div>

        {/* Subscripe Section */}

        <div className="my-40">
          <Subscribe />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Blog;
