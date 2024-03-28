import React from "react";

export default function Button(props) {
  const { name } = props;
  return (
    <button className="bg-[#BEF56E] py-2 w-40 text-sm font-semibold rounded-tl-lg rounded-br-lg ">
      {name}
    </button>
  );
}
