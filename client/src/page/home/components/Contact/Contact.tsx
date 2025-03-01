export default function Contact() {
  return (
    <section
      className="custom-container custom-section !pb-[40px]"
      id="contact"
    >
      <h2 className="custom-section-title">Get In Touch</h2>

      <div className="grid grid-cols-[4fr,8fr] gap-x-[20px]">
        <div>
          <h3 className="text-[20px] mb-[20px]">Lets talk about everything!</h3>
          <p>Dont like forms? Send me an email. 👋</p>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-x-[20px]">
            <div className="relative mb-[30px] h-[38px]">
              <input
                type="text"
                className="absolute top-0 left-0 w-full h-full text-[15px] shadow-md bg-white text-[#5e5c7f] border-none outline-none rounded-[20px] z-20 py-[25px] px-[20px]"
                placeholder="Insert your name"
              />
            </div>

            <div className="relative mb-[30px] h-[38px]">
              <input
                type="text"
                className="absolute top-0 left-0 w-full h-full text-[15px] shadow-md bg-white text-[#5e5c7f] border-none outline-none rounded-[20px] z-20 py-[25px] px-[20px]"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="relative mb-[30px] h-[38px]">
            <input
              type="text"
              className="absolute top-0 left-0 w-full h-full text-[15px] shadow-md bg-white text-[#5e5c7f] border-none outline-none rounded-[20px] z-20 py-[25px] px-[20px]"
              placeholder="Insert your subject"
            />
          </div>

          <div className="relative mb-[30px] h-[38px]">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="absolute top-0 left-0 w-full text-[15px] shadow-md bg-white text-[#5e5c7f] border-none outline-none rounded-[20px] z-20 py-[25px] px-[20px] resize-none h-[150px]"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className="custom-btn-primary mt-[110px]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
