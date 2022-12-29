import { getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardBody } from "../components/atoms";

const employee = {
  firstName: "Dude",
  lastName: "Mac",
  email: "mac@gmail.com",
  phone: "+94779122134",
  photo: "https://images.news18.com/ibnlive/uploads/2022/12/ranveer-singh.jpg",
};
describe("Card", () => {
  it("should render firstName, lastName, email, phone", () => {
    const { getByText } = render(
      <CardBody
        firstName={employee.firstName}
        lastName={employee.lastName}
        email={employee.email}
        phone={employee.phone}
      />
    );
    console.log(getByText);
    const firstName = getByText(employee.firstName);
    const email = getByText(employee.email);
    const phone = getByText(employee.phone);

    expect(firstName).toBeVisible();
    expect(email).toBeVisible();
    expect(phone).toBeVisible();
  });
});
