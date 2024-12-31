import React, { ReactNode, useState } from "react";
import "./MainTabs.scss";

interface Tab {
  name: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

interface MainTabsProps {
  tabs: Tab[];
}

const MainTabs: React.FC<MainTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map((tab, index) => (
          <li className="tabs__item" key={index}>
            <label>
              <input
                type="radio"
                name={tab.name}
                checked={activeTab === index}
                onChange={() => setActiveTab(index)}
              />
              {tab.icon}
              <span>{tab.title}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="tabs__content-wrapper">
        {tabs.map((tab, index) => (
          <div
            className={`tabs__content ${
              activeTab === index ? "" : "tabs__content--hidden"
            }`}
            key={index}
          >
            {tab.children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainTabs;
