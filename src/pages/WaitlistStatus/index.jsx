import React from "react";
import LinkButton from "../../components/LinkButton";
import ToastMessage from "../../components/ToastMessage";
import SychronizeIcon from "../../assets/icons/Synchronize.png";
import LoaderIcon from "../../assets/icons/Loader.gif";

const WaitlistStatus = () => {
  return (
    <div className="__waitlistStatus__main__container p-6">
      <div className="__main__header__container flex justify-between items-baseline">
        <h3 className="font-sans text-lg max-sm:text-sm tracking-[1.2px]">
          User Waiting Status
        </h3>
        <div className="__toastMsg__container max-sm:hidden">
          <ToastMessage
            text="User X is added to the list"
            toastStyleClass="border border-dashed border-[#fff] inline-block px-8 py-1 rounded-[15px]"
            textStyleClass="text-[#fff] font-sans text-xs font-bold"
          />
        </div>
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
          <span>Total Users :- </span><span className="text-[#FF00BF]"> 20 </span>
        </p>
      </div>

      <div className="__table__container">
        <div className="__loader__container py-10 flex justify-center">
          <div className="loader flex flex-col justify-center items-center">
              <img src={LoaderIcon} width={50} height={50} />
              <h4 className="font-sans text-sm max-sm:text-xs">Waiting for the user...</h4>
          </div>
        </div>
        {/* <div className="__tableRow__container my-4 bg-[#F3F3F5] text-[#000] flex justify-around rounded-[7px] py-2 font-sans [&>div>p]:flex [&>div>p]:gap-2 [&>div>p>span]:text-[#352384]">
          <div>
            <p>
              <h4>User: </h4>
              <span>Aditya</span>
            </p>
            <p>
              <h4>Status: </h4>
              <span className="!text-[red]">Invalid</span>
            </p>
          </div>
          <div>
            <p>
              <h4>Position: </h4>
              <span>6th</span>
            </p>
            <p>
              <h4>Est. Wait Time: </h4>
              <span>5 Days</span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WaitlistStatus;
