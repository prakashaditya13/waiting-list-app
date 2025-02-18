import React, { useState, useCallback } from "react";
import WaitingIcon from "../../assets/icons/LeavingQueue.png";
import {
  Button,
  Divider,
  Input,
  LinkButton,
  ToastMessage,
} from "../../components";
import { useWaitlist } from "../../hooks/UserWaitlist";
import { IsValidInviteCode } from "../../utils";

/**
 * UserRegistrationForm component handles user input for adding a user to the waitlist.
 *
 * - Accepts user name and an optional invite code.
 * - Validates the invite code and adds the user to the waitlist accordingly.
 * - Displays success or error messages based on invite code validity.
 *
 * @component
 * @returns {JSX.Element} A registration form with user input fields, submit button, and status messages.
 */

const renderSuccessMessage = () => (
  <div className="flex justify-center pt-16">
    <ToastMessage
      text="You have been added to the List!"
      toastStyleClass="border border-dashed border-[green] inline-block px-8 py-1 rounded-[15px]"
      textStyleClass="text-[green] font-sans text-xs font-bold"
    />
  </div>
);

const renderErrorMessage = () => (
  <>
    <div className="flex justify-center pt-16">
      <ToastMessage
        text="Invalid Invite Code!"
        toastStyleClass="border border-dashed border-[red] inline-block px-8 py-1 rounded-[15px]"
        textStyleClass="text-[red] font-sans text-xs font-bold"
      />
    </div>
    <div className="flex justify-center py-2">
      <ToastMessage
        text="User is added to general waitlist!"
        toastStyleClass="border border-dashed border-[#333347] inline-block px-8 py-1 rounded-[15px]"
        textStyleClass="text-[#333347] font-sans text-xs font-bold"
      />
    </div>
  </>
);

const UserRegistrationForm = () => {
  const { CreateUser } = useWaitlist();
  const [name, setName] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [checkMsg, setCheckMsg] = useState(false);
  const [loader, setLoader] = useState(false);

  /**
   * Handles the form submission event.
   *
   * - Prevents default form behavior.
   * - Validates the invite code using `IsValidInviteCode`.
   * - Calls `CreateUser` from `useWaitlist` with the provided name and invite code.
   * - Displays success message if code is valid, else shows an error and adds user to general waitlist.
   *
   * @param {Event} e - Form submit event object.
   */

  const handleCreateUserSubmit = useCallback(
    (e) => {
      setLoader(true);
      e.preventDefault();
      const IsCheckValidCode = IsValidInviteCode(inviteCode);
      CreateUser(name, IsCheckValidCode ? inviteCode : null);
      IsCheckValidCode ? setCheckMsg(true) : setCheckMsg(false);
      setName("");
      setInviteCode("");
    },
    [name, inviteCode, CreateUser]
  );

  return (
    <div className="__main__container">
      <div className="__formBox__container flex flex-col justify-center items-center h-screen">
        <div className="__inputForm__section px-20 max-sm:px-16  rounded-[10px] bg-[#F3F3F5] pt-6 pb-16">
          <form onSubmit={handleCreateUserSubmit} className="flex flex-col">
            <h2 className="text-center uppercase font-sans text-[#FF00BF] text-lg max-sm:text-sm tracking-[1.2px] max-sm:tracking-[0.5px] font-bold py-6">
              Wait list Registration
            </h2>
            <div className="__inputForm flex flex-col justify-center gap-[15px]">
              <Input
                type="text"
                placeholder="Name"
                inputVal={name}
                onChangeHandler={(e) => setName(e.target.value)}
                IsRequired={true}
                styleClass="bg-transparent text-[#333347] outline-none px-3 max-sm:px-1.5 max-sm:py-1 max-sm:placeholder:text-xs border rounded-[6px] py-2 border-[#333347]/45 placeholder:text-[#333347]/45 placeholder:font-medium placeholder:font-sans"
              />
              <Input
                type="text"
                placeholder="Invite Code (optional)"
                inputVal={inviteCode}
                onChangeHandler={(e) => setInviteCode(e.target.value)}
                IsRequired={false}
                styleClass="bg-transparent text-[#333347] outline-none px-3 max-sm:px-1.5 max-sm:py-1 max-sm:placeholder:text-xs border rounded-[6px] py-2 border-[#333347]/45 placeholder:text-[#333347]/45 placeholder:font-medium placeholder:font-sans"
              />
              <div className="__buttonGroup__container flex justify-center pt-6">
                <Button
                  text="Add User to Wait List"
                  type="submit"
                  StyleClass="border text-[#fff] p-2 rounded-[8px] w-fit bg-[#352384] text-sm font-sans px-8 hover:cursor-pointer"
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

          <div className="__waitingStatus__buttonGroup__container flex flex-col justify-center items-center gap-2">
            <LinkButton
              textLink="Waiting List Status"
              slug="/waitlist"
              styleClass="bg-[#352384] text-[#fff] flex justify-center gap-3 w-fit font-sans text-sm p-2 rounded-[8px] px-6"
              IsIcon={true}
              IconComponent={WaitingIcon}
            />
            <LinkButton
              textLink="Automate Wait List"
              slug="/waitlist?auto=true"
              styleClass="bg-[#352384] text-[#fff] flex justify-center gap-3 w-fit font-sans text-sm p-2 rounded-[8px] px-6"
              IsIcon={false}
              IconComponent={WaitingIcon}
            />
          </div>

          {/* Error and Success Section */}

          {loader ? (
            checkMsg ? (
              renderSuccessMessage()
            ) : (
              renderErrorMessage()
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationForm;
