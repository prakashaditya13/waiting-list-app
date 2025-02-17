import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, LinkButton, ToastMessage } from "../../components";
import SychronizeIcon from "../../assets/icons/Synchronize.png";
import LoaderIcon from "../../assets/icons/Loader.gif";
import { useWaitlist } from "../../hooks/UserWaitlist";
import { inviteCodes } from "../../config";
import { CalculateWaitTime } from "../../utils";

/**
 * WaitlistStatus Component displays and manages the waitlist status.
 * It handles user registration manually and automatically using a query param.
 */

const WaitlistStatus = () => {
  const { users, CreateUser } = useWaitlist();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("auto");

  /** State to manage the visibility of automated user addition message */
  const [isAutomateMsg, setAutomateMsg] = useState(false);

  /** State to store the current random user and list type */
  const [currentRandomMsg, setCurrentRandomMsg] = useState({
    name: "",
    listType: "",
  });

  /** Predefined list of random user names */
  const RandomNames = [
    "Aditya",
    "Rahul",
    "Abhishek",
    "Rajat",
    "Samir",
    "Aruna",
  ];

  useEffect(() => {
    // This is only runs when auto query param is true
    /**
     * Automates user addition every 10 seconds if 'auto' query param is true.
     */
    if (value === "true") {
      const automateInterval = setInterval(() => {
        const RandomName =
          RandomNames[Math.floor(Math.random() * RandomNames.length)];
        const generateRandomInviteCode =
          inviteCodes[Math.floor(Math.random() * inviteCodes.length)];
        setCurrentRandomMsg(() => {
          return {
            name: RandomName,
            listType:
              generateRandomInviteCode !== null
                ? "Priority list"
                : "General wait list",
          };
        });
        CreateUser(RandomName, generateRandomInviteCode);
        setAutomateMsg(true);
        const timer = setTimeout(() => setAutomateMsg(false), 3000);
        return () => clearTimeout(timer);
      }, 10000); // Runs every 10 sec and add user to the list

      return () => {
        clearInterval(automateInterval);
      };
    }
  }, [CreateUser, value]);

  return (
    <div className="__waitlistStatus__main__container p-6 text-[#fff]">
      <div className="__main__header__container flex justify-between items-baseline">
        <h3 className="font-sans text-lg max-sm:text-sm tracking-[1.2px]">
          User Waiting Status
        </h3>
        {isAutomateMsg && (
          <div className="__toastMsg__container max-sm:hidden">
            <ToastMessage
              text={`User ${currentRandomMsg?.name} is added to the ${currentRandomMsg?.listType}`}
              toastStyleClass="border border-dashed border-[#fff] inline-block px-8 py-1 rounded-[15px]"
              textStyleClass="text-[#fff] font-sans text-xs font-bold"
            />
          </div>
        )}

        <LinkButton
          textLink="Wait list registration"
          slug="/"
          styleClass="bg-[#FF00BF] rounded-[6px] font-sans text-[#fff] text-sm max-sm:text-xs px-4 py-2 font-bold"
          IsIcon={false}
        />
      </div>

      <div className="__metaInfo__container text-sm max-sm:text-xs flex justify-between pt-8">
        <p className="flex gap-1 items-center">
          <img src={SychronizeIcon} className="" width={15} height={2} />
          <p>User will be added every 10 sec</p>
        </p>
        <p className="flex items-center">
          <span>Total Users :- </span>
          <span className="text-[#FF00BF]"> {users?.length} </span>
        </p>
      </div>

      <div className="__table__container">
        {users?.map((item, index) => {
          return (
            <div
              key={users?.id}
              className="__tableRow__container my-4 bg-[#F3F3F5] text-[#000] px-4 max-sm:px-1 flex justify-evenly rounded-[7px] py-2 font-sans [&>div>p]:flex [&>div>p]:gap-2 [&>div>p>span]:text-[#352384]"
            >
              <div>
                <p>
                  <h4>User: </h4>
                  <span>{item?.name}</span>
                </p>
                <p>
                  <h4>Status: </h4>
                  <span
                    className={`${
                      item?.inviteCode === null ||
                      item?.inviteCode === "" ||
                      !inviteCodes?.includes(item?.inviteCode)
                        ? "!text-[red]"
                        : "!text-[green]"
                    }`}
                  >
                    {item?.inviteCode === null ||
                    item?.inviteCode === "" ||
                    !inviteCodes?.includes(item?.inviteCode)
                      ? "Invalid Code"
                      : `Valid( ${item?.inviteCode} )`}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <h4>Position: </h4>
                  <span>{item?.position}th</span>
                </p>
                <p>
                  <h4>Est. Wait Time: </h4>
                  <span>{CalculateWaitTime(index + 1, item?.isPriority)}</span>
                </p>
              </div>
            </div>
          );
        })}

        <div className="__loader__container py-7 flex justify-center">
          <div className="loader flex flex-col justify-center items-center">
            <img src={LoaderIcon} width={50} height={50} />
            <h4 className="font-sans text-sm max-sm:text-xs">
              Waiting for the user...
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistStatus;
