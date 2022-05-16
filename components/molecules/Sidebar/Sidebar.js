import { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

import { Gap, SidebarLink, SidebarSection } from "@components/atoms";
import sidebarProps from "consts/dashboard";

function Sidebar() {
  // Responsive state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Scrollbars
      autoHideDuration={100}
      universal={true}
      autoHide
      className="max-w-md w-[90vw] lg:max-w-[300px] lg:w-full h-full bg-white overflow-y-auto z-50 absolute hidden lg:relative lg:block border-r border-gray-300"
    >
      <div className="py-8">
        <h1 className="text-4xl font-bold text-orange text-center pb-12 border-b-2 border-muted">
          ToqCer
        </h1>
        <div className="select-none">
          {sidebarProps.map((sidebarProp, index) => (
            <SidebarSection key={index} className="border-b-2 border-muted">
              {sidebarProp.children.map((level1, index) =>
                level1?.children ? (
                  <SidebarLink
                    key={index}
                    text={level1.text}
                    href={level1.href}
                    Icon={level1.icon()}
                  >
                    <ul
                      className={`m-0 transition-all duration-300 overflow-hidden`}
                    >
                      {level1.children.map((level2) => (
                        <SidebarLink
                          text={level2.text}
                          key={Math.random()}
                          href={level2.href}
                          Icon={level2.icon()}
                          className="py-2"
                        />
                      ))}
                    </ul>
                  </SidebarLink>
                ) : (
                  <SidebarLink
                    text={level1.text}
                    key={Math.random()}
                    href={level1.href}
                    Icon={level1.icon()}
                    className="py-3"
                  />
                )
              )}
            </SidebarSection>
          ))}
        </div>
      </div>
    </Scrollbars>
  );
}

export default Sidebar;
