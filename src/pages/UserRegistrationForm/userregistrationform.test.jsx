import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderSuccessMessage } from ".";
import { ToastMessage } from "../../components";

describe("User Registration Form", () => {
  it("should render success message with correct text", () => {
    render(renderSuccessMessage());
    expect(screen.getByText("You have been added to the List!")).toBeInTheDocument();
  });

  it('should render ToastMessage component even with empty text', () => {
    const { container } = render(
      <div className="flex justify-center pt-16">
        <ToastMessage
          text=""
          toastStyleClass="border border-dashed border-[green] inline-block px-8 py-1 rounded-[15px]"
          textStyleClass="text-[green] font-sans text-xs font-bold"
        />
      </div>
    );

    expect(container.firstChild).toHaveClass('flex', 'justify-center', 'pt-16');
  });
});
