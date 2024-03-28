"use client";
import { Tab } from "@headlessui/react";
import { categories } from "@/data/assets";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  return (
    <div className="w-full max-w-full px-2 mt-5">
      <Tab.Group>
        <Tab.List className="flex gap-8 justify-center rounded-xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-auto rounded-full py-2 px-4 lg:py-2.5 lg:px-6 text-sm text-white leading-5",
                  "focus:outline-none",
                  selected
                    ? "bg-[#F68E5F] shadow"
                    : "hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-7  mx-2 lg:mt-8 md:mx-10 mb-20">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-md  col-span-1 bg-[#181920]/60 ;
"
                  >
                    <img src={post.img} className="w-full h-2/3 lg:h-3/4" />
                    <div className="flex flex-col lg:gap-1 px-1 py-1 text-xs font-thin">
                      <p className="font-medium md:text-sm">{post.title}</p>
                      <p>{post.type}</p>
                      <p>{post.devices}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
