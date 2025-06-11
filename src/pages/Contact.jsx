import Card from '../component/Card';
import Footer from '../component/Footer';
import Navbar from '../component/navbar';
import Subscribe from '../component/Subscribe';
import DeliciousRecipeData from '../data/DeliciousRecipeData';

function Contact() {
  return (
    <>
      <div>
        <Navbar />

        <div className="mt-21 mx-5 lg:mx-[80px]">
          <h1 className="font-semibold text-6xl text-center">Contact us</h1>

          {/* form */}

          <div className="mt-18 grid gap-5 md:grid-cols-[34%_64%]">
            <div>
              <img
                src="images/Group 13936.png"
                alt=""
                className="md:h-full mx-auto md:mx-0"
              />
            </div>

            <div>
              <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                <div>
                  <p>NAME</p>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="border rounded-2xl border-[#0000001A] outline-0 w-full h-15 px-5 mt-3"
                  />
                </div>
                <div>
                  <p>EMAIL ADDRESS</p>
                  <input
                    type="text"
                    placeholder="Your email address..."
                    className="border rounded-2xl border-[#0000001A] outline-0 w-full h-15 px-5 mt-3"
                  />
                </div>
                <div>
                  <p>SUBJECT</p>
                  <input
                    type="text"
                    placeholder="Enter subject..."
                    className="border rounded-2xl border-[#0000001A] outline-0 w-full h-15 px-5 mt-3"
                  />
                </div>
                <div>
                  <p>ENQUIRY TYPE</p>

                  <select
                    name=""
                    id=""
                    className="border rounded-2xl border-[#0000001A] outline-0 w-full h-15 px-5 mt-3 cursor-pointer"
                  >
                    <option value="">Advertising</option>
                    <option value="">Complaint</option>
                    <option value="">Enquiry</option>
                    <option value="">Suggestion</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <p>MESSAGES</p>
                <textarea
                  name=""
                  id=""
                  className="w-full h-50 border border-[#0000001A] rounded-2xl outline-0 px-5 py-5 resize-none mt-3"
                  placeholder="Enter your messages..."
                ></textarea>
              </div>
            </div>

            <div></div>
            <button className="text-white text-sm bg-[#000000] rounded-2xl cursor-pointer w-40 h-15 mx-auto md:mx-0">
              Submit
            </button>
          </div>
        </div>

        <div className="my-40">
          <Subscribe />
        </div>

        <div className="mx-5 lg:mx-[80px]">
          <p className="font-semibold text-4xl text-center mb-20">
            Check out the delicious recipe
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-40">
            {DeliciousRecipeData.sort(() => Math.random() - 0.5)
              .slice(0, 3)
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

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
