function Card(props) {
  return (
    <>
      <div>
        <div
          className={`${props.cardBgColor}  ${props.cardWidthandHeight}  px-4 py-4 rounded-4xl flex flex-col`}
        >
          <div>
            <img
              src={props.img}
              alt=""
              className={`w-full ${props.cardImgHeight} rounded-2xl`}
            />
          </div>

          <div className="flex flex-col flex-1  justify-between">
            <div>
              <p className={`${props.fontSize} font-semibold mt-6`}>
                {props.title}
              </p>
            </div>

            <div className="flex space-x-4 mt-7">
              <p className="w-[139px] h-10 flex justify-center items-center space-x-2  px-4 rounded-full">
                <img src="/images/Timer.png" alt="" className="w-6 h-6" />

                <span className="text-sm">{props.time}</span>
              </p>

              <p className="w-[139px] h-10 flex justify-center items-center space-x-2 px-4 rounded-full">
                <img src="/images/ForkKnife.png" alt="" className="w-6 h-6" />{' '}
                <span>{props.mealType}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
