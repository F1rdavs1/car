import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCars() {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState();
  function getImgSrc(e) {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    const dataObj = {
      id: Math.floor(Math.random() * 10),
      name: e.target.name.value,
      rate: e.target.rate.value,
      review: e.target.review.value,
      passenger: e.target.passenger.value,
      img: imgSrc,
      gearbox: e.target.gearbox.value,
      door: e.target.door.value,
      air: e.target.air.value,
      price: e.target.price.value,
    };
    fetch("http://localhost:3000/cars", {
      method: "post",
      body: JSON.stringify(dataObj),
    }).then((res) => {
      setTimeout(() => {
        navigate(-1);
      }, 800);
    });
  }
  return (
    <>
      <div className="w-[90%] mx-auto flex justify-around pt-[100px]">
        <form onSubmit={handleSubmitForm} className="flex justify-around ">
          <div className="w-[45%] ">
            <button className="absolute right-[115px] top-[40px] rounded-[20px] text-white bg-[green] px-[30px] py-[10px]">
              Save
            </button>
            <input
              required
              className="w-full border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md"
              autoComplete="off"
              placeholder="Enter car name"
              type="text"
              name="name"
            />
            <input
              required
              className="w-full my-[30px] border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md"
              autoComplete="off"
              placeholder="Rate the car"
              type="text"
              name="rate"
            />
            <input
              required
              className="w-full mb-[30px] border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md"
              autoComplete="off"
              placeholder="Enter a review"
              type="number"
              name="review"
            />
            <input
              required
              className="w-full border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md mb-[20px]"
              autoComplete="off"
              placeholder="Enter the number of passengers"
              type="number"
              name="passenger"
            />
            <label className="w-[200px]  h-[200px]">
              <input
                required
                onChange={(e) => getImgSrc(e)}
                type="file"
                className="bg-[yellow hidden mt-[30px] w-[200px] h-[200px]"
                name="img"
              />
              <img
                className="w-[208px] h-[104px] bg-[yellow]"
                src={imgSrc}
                alt="img"
              />
              <p className="text-[20px] text-[gray]">Choose car img</p>
            </label>
          </div>
          <div className="w-[45%] space-y-[30px]">
            <select
              className="w-full border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md text-[gray]"
              name="gearbox"
            >
              <option value="Auto">Auto</option>
              <option value="Mecxanic">Mecxanic</option>
            </select>
            <input
              required
              className="w-full border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md"
              autoComplete="off"
              placeholder="Enter door"
              type="number"
              name="door"
            />
            <select
              className="w-full border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md text-[gray]"
              name="air"
            >
              <option value="">Air Conditioning </option>
              <option value="Yes">Yes</option>
              <option value="Yes">No</option>
            </select>
            <input
              required
              className="w-full border-[1px] outline-none border-slate-500 py-[10px] text-[17px] pl-[5px] rounded-md"
              autoComplete="off"
              placeholder="Price"
              type="text"
              name="price"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCars;
