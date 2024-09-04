import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Card from "../card";
import { MOCK_CARD } from "../mock/card";

describe("card section", () => {

  it("should render card", () => {
    const { getByText } = render(<Card {...MOCK_CARD} />);
    const cardTitle = getByText(MOCK_CARD.title);
    expect(cardTitle).toBeInTheDocument();
  });

  it("should render description when hover", () => {
   const { getByText, getByTestId } = render(<Card {...MOCK_CARD} />);
   const cardTitle = getByText(MOCK_CARD.title);
   userEvent.hover(cardTitle);
   const description = getByTestId('card-description');
   expect(description).toBeInTheDocument();
  });
  
});
