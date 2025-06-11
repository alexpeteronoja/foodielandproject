function RecipeCard(props) {
  return (
    <>
      <div>
        <div
          className={`${props.cardHeight}  px-4 py-4 rounded-4xl flex space-x-6`}
        >
          <div>
            <img
              src={props.img}
              alt=""
              className="w-full max-w-50 h-full rounded-2xl"
            />
          </div>

          <div className="flex flex-col py-4 justify-between ">
            <p className={`text-xl font-semibold`}>{props.title}</p>

            <p className="">
              <span className="text-sm">{props.chief}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
