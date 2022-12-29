import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CardBody } from "../../../components/atoms";

export default {
  title: "Atoms/CardBody",
  component: CardBody,
} as ComponentMeta<typeof CardBody>;

const Template: ComponentStory<typeof CardBody> = (args) => (
  <CardBody {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  firstName: "Dude",
  lastName: "Mac",
  email: "mac@gmail.com",
  phone: "+94779122134",
  photo: "https://images.news18.com/ibnlive/uploads/2022/12/ranveer-singh.jpg",
};
