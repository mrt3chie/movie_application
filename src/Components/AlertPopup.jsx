import React, { useEffect, useState } from "react";

const AlertPopup = ({ showAlert, bgColor, message, icon: Icon }) => {
  const [visible, setVisible] = useState(showAlert);

  useEffect(() => {
    let timer;
    if (showAlert) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, 5000);
    } else {
      setVisible(false);
    }

    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <div>
      {visible ? (
        <div className="flex items-center justify-center absolute inset-0 bg-black bg-opacity-30">
          <div className="flex items-center space-x-3 rounded-[10px] bg-white shadow-xl ">
            <div className={`${bgColor} p-6 h-full`}>{Icon && <Icon />}</div>
            <div>
              <h3 className="text-xl  px-4">{message}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AlertPopup;
