import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import starIcon from "../assets/images/star.svg";
import gerboxIcon from "../assets/images/gerbox.svg";
import { Avatar, RightIcon } from "../assets/icon";
import AirIcon from "../assets/images/air.svg";
import DoorIcon from "../assets/images/door.svg";

function Cars() {
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((dataObj) => {
        setCar(dataObj);
      });
  }, []);
  return (
    <div className="w-[1200px] mx-auto mt-[24px] mb-[20px]">
      <div className="text-center">
        <Link
          to={"/add"}
          className="px-[32px] rounded-[8px] bg-[#E8F1FB] py-[16px] font-medium text-[14px] leading-[21px] text-[#1572D3]"
        >
          Add Cars
        </Link>
        <h2 className="mt-[24px] font-medium text-[38px] leading-[49.4px]">
          Most popular cars rental deals
        </h2>
      </div>
      <ul className="mt-[20px] flex justify-center gap-[32px] flex-wrap">
        {car.map((item, index) => (
          <li
            key={index}
            className="shadow-2xl shadow-[#104C8B29] rounded-[20px] py-[26px] px-[24px] "
          >
            <img src={item.img} alt="Name" className="w-[208px] h-[104px]" />
            <strong className="font-medium text-[16px] leading-[17px] text-[#262626]">
              {item.name}
            </strong>
            <div className="flex mt-[12px] mb-[16px]">
              <img src={starIcon} alt="" />
              <strong className="block ml-[6px] text-[12px] font-medium leading-[17px]">
                {item.rate}
              </strong>
              <span className="block font-normal text-[12px] leading-[17px]">
                ({item.review})
              </span>
            </div>
            <div className="flex items-center gap-[41px]">
              <div className="flex items-center gap-[4px]">
                <Avatar />
                <span className="block font-normal text-[12px] leading-[17px] text-[#959595]">
                  {item.passenger} Passagers
                </span>
              </div>
              <div className="flex items-center gap-[5px] mb-[8px]">
                <img src={gerboxIcon} alt="Gerbox" />
                <span className="block font-normal text-[12px] leading-[17px] text-[#959595]">
                  {item.gearbox}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[19px] border-b-[1px] mt-[8px] pb-[24px]">
              <div className="flex items-center gap-[4px]">
                <img src={AirIcon} alt="Air" />
                <span className="block font-normal text-[12px] leading-[17px] text-[#959595]">
                  Air Conditioning /{item.air}
                </span>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={DoorIcon} alt="Door" />
                <span className="block font-normal text-[12px] leading-[17px] text-[#959595]">
                  {item.door} door
                </span>
              </div>
            </div>
            <div className="flex justify-between py-[24px]">
              <span className="block">Price</span>
              <strong className="block">
                ${item.price}{" "}
                <span className="font-normal text-[16px] leading-[17px]">
                  /day
                </span>{" "}
              </strong>
            </div>
            <div className="bg-[#1572D3] flex items-center justify-center rounded-[8px] gap-[8px] py-[15px]">
              <button className="text-center font-medium text-[14px] leading-[17px] text-white">
                Rent Now
              </button>
              <RightIcon />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cars;
