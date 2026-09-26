"use client"

import type { ProductInfo } from "@/data/products";
import HorizontalSpacer from "../common/HorizontalSpacer";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


import { useState } from "react";


type ProductInfoProps = {
  info: ProductInfo;
};

const ProductInfo = ({ info }: ProductInfoProps) => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="text-lg font-bold">{info.persianName}</div>
        <div className="text-xs text-gray-400">{info.englishName}</div>
      </div>
      <HorizontalSpacer />
      <div className="flex gap-1 text-sm pt-4">
        <div className="text-yellow-500"><FaStar /></div>
        <div>{info.rating}</div>
      </div>

      <div className="flex gap-3 pt-4 cursor-pointer">
        {info.colors.map((color) => (
          <div key={color.value}
            style={{ backgroundColor: color.value }}
            className={`w-8 h-8 rounded-full outline-3 outline-gray-200 border-2`}
          ></div>
        ))}
      </div>

      <div className="pt-4">
        <div className="font-bold py-2">
          ویژگی‌ها
        </div>
        <div className="grid grid-cols-1 grid-cols-3 gap-2">
          {
            info.features.map((feature) => (
              <div key={feature.label}
                className="bg-gray-100 py-2 px-1.5 rounded-lg flex flex-col">
                <span className="text-gray-600 text-xs">{feature.label}</span>
                <span className="text-sm text-black">{feature.value}</span>
              </div>
            ))
          }
        </div>
      </div>

      <div className="pt-4">
        <div className="font-bold py-2">
          توضیحات
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="flex gap-1 items-center my-2 text-xs font-medium text-primary py-2 px-4 border border-gray-300 rounded-md cursor-pointer"
        >
          <div>
          {
            isExpanded ? "بستن توضیحات" : "مشاهده کامل توضیحات"
          }
          </div>
          {
            isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />
          }
          
        </button>
        <div className={`text-base/7 text-gray-500 ${!isExpanded ? "line-clamp-3" : ""}`}>
          {info.description}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;