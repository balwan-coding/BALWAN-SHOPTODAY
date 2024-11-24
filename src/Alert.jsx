import React, { useEffect } from "react";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { MdOutlineWarningAmber } from "react-icons/md";
import { withAlert } from "./withProvider";

const themeMap = {
  success: {
    Icon: AiTwotoneCheckCircle,
    color: "bg-green-400",
  },
  error: {
    Icon: AiTwotoneCloseCircle,
    color: "bg-red-400",
  },
  warning: {
    Icon: MdOutlineWarningAmber,
    color: "bg-yellow-400",
  },
};

function Alert({ alert, removeAlert }) {
  useEffect(
    function () {
      if (alert) {
        const TimeOut = setTimeout(removeAlert, 5 * 1000);
        return function () {
          clearTimeout(TimeOut);
        };
      }
    },
    [alert]
  );

  if (!alert) {
    return;
  }

  const { message, type } = alert;
  const { Icon, color } = themeMap[type];

  return (
    <div className="fixed flex items-center justify-between w-3/4 mt-2 bg-white left-10 right-10 top-13">
      <div className="flex items-center gap-2 pr-2 ">
        <div className={"flex justify-center w-14 " + color}>
          <Icon className="text-5xl text-center" />
        </div>
        <p className="text-2xl font-bold">{type}</p>
        <p className="hidden font-sans text-xl sm:block lg:block md:block">
          {message}
        </p>
      </div>
      <button
        className="m-2 text-xl font-semibold hover:text-red-800 hover:font-bold"
        onClick={removeAlert}
      >
        Dissmis
      </button>
    </div>
  );
}

export default withAlert(Alert);
