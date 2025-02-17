import React from "react";
import WaitingIcon from "../../assets/icons/LeavingQueue.png";
import {Button, Divider, Input, LinkButton, ToastMessage} from "../../components";

const UserRegistrationForm = () => {
  return (
    <div className="__main__container">
      <div className="__formBox__container flex flex-col justify-center items-center h-screen">
        <div className="__inputForm__section px-20 max-sm:px-16  rounded-[10px] bg-[#F3F3F5] pt-6 pb-16">
          <form className="flex flex-col">
            <h2 className="text-center uppercase font-sans text-[#FF00BF] text-lg max-sm:text-sm tracking-[1.2px] max-sm:tracking-[0.5px] font-bold py-6">
              Wait list Registration
            </h2>
            <div className="__inputForm flex flex-col justify-center gap-[15px]">
              <Input
                type="text"
                placeholder="Name"
                inputVal={""}
                onChangeHandler={() => {}}
                IsRequired={true}
                styleClass="bg-transparent text-[#333347] outline-none px-3 max-sm:px-1.5 max-sm:py-1 max-sm:placeholder:text-xs border rounded-[6px] py-2 border-[#333347]/45 placeholder:text-[#333347]/45 placeholder:font-medium placeholder:font-sans"
              />
              <Input
                type="text"
                placeholder="Invite Code (optional)"
                inputVal={""}
                onChangeHandler={() => {}}
                IsRequired={true}
                styleClass="bg-transparent text-[#333347] outline-none px-3 max-sm:px-1.5 max-sm:py-1 max-sm:placeholder:text-xs border rounded-[6px] py-2 border-[#333347]/45 placeholder:text-[#333347]/45 placeholder:font-medium placeholder:font-sans"
              />
              <div className="__buttonGroup__container flex justify-center pt-6">
                <Button
                  text="Add User to Wait List"
                  type="submit"
                  StyleClass="border p-2 rounded-[8px] w-fit bg-[#352384] text-sm font-sans px-8 hover:cursor-pointer"
                  IsIcon={false}
                  onClickHandler={() => {}}
                />
              </div>
            </div>
            <Divider
              color="#FF00BF"
              width={0.8}
              verticalGap="my-6"
              horizontalGap="px-6"
            />
          </form>

          <div className="__waitingStatus__buttonGroup__container flex justify-center">
            <LinkButton
              textLink="Waiting List Status"
              slug="/waitlist"
              styleClass="bg-[#352384] flex justify-center gap-3 w-fit font-sans text-sm p-2 rounded-[8px] px-6"
              IsIcon={true}
              IconComponent={WaitingIcon}
            />
          </div>

          {/* Error and Success Section */}
          {/* <div className="flex justify-center pt-16">
            <ToastMessage
              text="Invalid Invite Code"
              toastStyleClass="border border-dashed border-[red] inline-block px-8 py-1 rounded-[15px]"
              textStyleClass="text-[red] font-sans text-xs font-bold"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
