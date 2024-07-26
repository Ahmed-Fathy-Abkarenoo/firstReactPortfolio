import HeaderStyle from "../HeaderStyle/HeaderStyle";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="container mx-auto grid grid-cols-1 justify-items-center">
          <h2 className="text-5xl font-bold mb-8 text-black">CONTACT ME</h2>
          <HeaderStyle
            textColorClass={"text-black"}
            bgColorClassBefore={"before:bg-black"}
            bgColorClassAfter={"after:bg-black"}
          />
          <div className="row text-center w-3/5 mt-11">
            <form className="flex flex-col gap-y-4">
              <input
                className="h-16 text-[#212529] text-xl font-medium focus:outline-0"
                type="text"
                placeholder=" Name"
              />
              <input
                className="h-16 text-[#212529] text-xl font-medium focus:outline-0"
                type="email"
                placeholder=" Email Address"
              />
              <input
                className="h-16 text-[#212529] text-xl font-medium focus:outline-0"
                type="tel"
                placeholder="Phone Number"
              />
              <textarea
                className="text-[#212529] text-xl font-medium focus:outline-0"
                rows={5}
                placeholder=" Message"></textarea>
              <button className="bg-[#19BC9B] text-white text-xl font-medium px-7 py-6 w-28 rounded-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
