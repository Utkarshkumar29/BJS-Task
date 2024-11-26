import logo from "./logo.svg";
import "./App.css";
import form_image1 from "../src/assets/form_image1.jpg";
import form_image2 from "../src/assets/form_image2.jpg";
import form_image3 from "../src/assets/form_image3.jpeg";
import { useEffect, useState } from "react";

function App() {
  const [modal, setmodal] = useState(false);
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState(false);
  const images = [form_image1, form_image2, form_image3];

  const [imageIndex, setImageIndex] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (number == "") {
      setmodal(false);
      setNumberError(true);
    } else {
      setmodal(true);
      setNumber("");
    }
  };

  useEffect(() => {
    const slider = () => {
      setInterval(() => {
        setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
    };
    slider();

    return () => clearInterval(slider);
  }, [images]);

  return (
    <div className=" relative  bg-gray-200 justify-center items-center p-[24px] w-full min-h-screen h-full flex sm:flex-col lg:flex-row   ">
      {/*Form */}
      <div
        className=" sm:flex justify-center w-full h-full p-[24px] sm:p-[100px] "
        onSubmit={handleFormSubmit}
      >
        <form className=" w-full h-full flex flex-col gap-[64px] max-w-[500px] ">
          <img src={logo} alt="form_logo" className=" w-[100px] h-[100px] " />
          <div>
            <p className=" text-[48px] font-medium ">Welcome</p>
            <p>
              Design professional logos to build your brand identity with ease.
              Start inspired
              <br /> with Canva's custom templates & drag-and-drop
            </p>
          </div>

          <div className=" flex gap-[24px] flex-col ">
            <input
              type="number"
              className={`  p-[32px] rounded-[12px] max-h-[48px] ${
                numberError && " border border-red-500"
              }  `}
              onChange={(e) => setNumber(e.target.value)}
            />
            {numberError && (
              <p className=" text-red-500 ">This field can't be empty</p>
            )}
            <button
              type="submit"
              className=" cursor-pointer bg-blue-200 p-[32px] rounded-[12px] max-h-[48px] flex justify-center items-center text-white font-medium text-[16px] leading-[24px]  "
            >
              Request OTP
            </button>
          </div>
        </form>
      </div>

      {/*Carousal */}
      <div className=" hidden sm:block bg-red-500  relative w-full h-[93vh] ">
        <img
          src={images[imageIndex]}
          alt="form_logo"
          className=" w-full h-full rounded-[8px] object-cover "
        />
        {/*{images && images.map((image,index)=>{
          return(
            <>
              <img src={image} alt='form_logo' className=' w-full h-full rounded-[8px] ' />
            </>
          )
        })}*/}

        <div className=" absolute bottom-0 p-[24px] ">
          <div className="w-full bg-gray-500 p-[24px] rounded-[8px] text-white flex flex-col gap-[16px]  ">
            <p className=" text-[24px] font-medium ">Heading</p>
            <p>
              {" "}
              An image is a visual representation. An image can be
              two-dimensional, such as a drawing, painting, or photograph, or
              three-dimensional, such as a carving or sculpture. Images may be
              displayed through other media, including a projection on a
              surface, activation of electronic signals, or digital{" "}
            </p>
            <div className=" w-full flex justify-center items-center gap-[24px]  ">
              <hr
                className=" w-[25px] h-[2px] bg-white cursor-pointer "
                onClick={() => setImageIndex(0)}
              />
              <hr
                className=" w-[25px] h-[2px] bg-white cursor-pointer "
                onClick={() => setImageIndex(1)}
              />
              <hr
                className=" w-[25px] h-[2px] bg-white cursor-pointer "
                onClick={() => setImageIndex(2)}
              />
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div className=" absolute bg-black opacity-[60%] h-screen w-full flex justify-center items-center  ">
          <div className=" bg-white p-[24px] flex flex-col gap-[24px] ">
            <div className=" flex justify-between ">
              <p>Enter OTP</p>{" "}
              <p onClick={() => setmodal(false)} className=" cursor-pointer ">
                X
              </p>{" "}
            </div>
            <input className=" bg-gray-500 " />
            <button>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
