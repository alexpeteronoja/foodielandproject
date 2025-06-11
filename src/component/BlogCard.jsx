function BlogCard(props) {
  return (
    <div>
      <div className="px-4 py-8 rounded-4xl grid sm:grid-cols-2 gap-x-6">
        <div className="mb-9 sm:mb-0 mx-auto sm:mx-0">
          <img src={props.img} alt="" className="w-full  h-full rounded-2xl " />
        </div>

        <div className="flex flex-col justify-between ">
          <div>
            <p className="text-2xl font-semibold mb-4">{props.title}</p>

            <p className="text-[#00000099]">{props.content}</p>
          </div>

          <div className="flex justify-between mt-7">
            <div className="flex items-center me-2">
              <img
                src={props.authorImg}
                alt=""
                className="w-10 h-10 me-4 rounded-full"
              />
              <span className="text-sm font-bold">{props.author}</span>
            </div>

            <div className="text-sm my-auto">{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
