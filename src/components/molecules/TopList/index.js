import React from "react";

const TopList = ({ title, children, background }) => {
  return (
    <div className={`p-4 rounded-lg ${background}`}>
      <h2 className="font-thin text-white mb-1">{title}</h2>
      <ul className="list-decimal list-outside ml-5 flex flex-col">
        {children}
      </ul>
    </div>
  );
};

function ListItem({ children, link = "#", writer, colorwriter }) {
  return (
    <>
      <li className="text-white">
        <a href={link} className="text-xl hover:underline">
          {children}
        </a>
      </li>
      <div className="flex flex-row gap-2 uppercase mt-1">
        <span
          className={`text-green-500 text-xs font-['system-ui'] ${colorwriter}`}
        >
          {writer}
        </span>
        <span className="text-white text-xs font-['system-ui']">
          6:54 AM | 5 min read
        </span>
      </div>
      <hr className="mb-3" />
    </>
  );
}

TopList.ListItem = ListItem;

export default TopList;
