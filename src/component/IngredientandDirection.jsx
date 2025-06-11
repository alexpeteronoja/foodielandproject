function IngredientandDirection() {
  return (
    <>
      <div className="">
        <div className="mb-22">
          <p className="font-semibold text-4xl mb-12">Ingredients</p>

          <p className="text-2xl font-semibold mb-8">For main dish</p>

          <form action="">
            <ul className="mb-16 list-none p-0">
              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="mainDish" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>

              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="mainDish" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>

              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="mainDish" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>

              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="mainDish" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>

              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="mainDish" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>
            </ul>

            {/* sauce Section */}

            <p className="text-2xl font-semibold mb-8">For the sauce</p>

            <ul className="list- p-0">
              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="sauce" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>

              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="sauce" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>

              <li className="py-7 border-b border-[#0000001A] text-lg">
                <label className="rad-container">
                  <input type="radio" name="sauce" id="" className="me-6" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet
                </label>
              </li>
            </ul>
          </form>
        </div>

        {/* Direction Section */}

        <p className="font-semibold text-4xl ">Directions</p>

        <form action="">
          <ul className="list-none p-0">
            <li className="flex gap-x-6 border-b border-[#0000001A] my-8">
              <div>
                <label className="rad-container">
                  <input type="radio" name="directions" id="" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                <p className="font-semibold text-2xl">
                  1. Lorem ipsum dolor sit amet{' '}
                </p>
                <p className="my-12">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <img src="images\Rectangle 23.png" alt="" className="w-full" />
                <p className="my-12">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </li>

            <li className="flex gap-x-6 border-b border-[#0000001A] my-8">
              <div>
                <label className="rad-container">
                  <input type="radio" name="directions" id="" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                <p className="font-semibold text-2xl">
                  2. Lorem ipsum dolor sit amet{' '}
                </p>
                <p className="my-12">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </li>

            <li className="flex gap-x-6 border-b border-[#0000001A] my-8">
              <div>
                <label className="rad-container">
                  <input type="radio" name="directions" id="" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div>
                <p className="font-semibold text-2xl">
                  3. Lorem ipsum dolor sit amet{' '}
                </p>
                <p className="my-12">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default IngredientandDirection;
