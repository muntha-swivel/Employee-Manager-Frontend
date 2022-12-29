import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ACard } from "../../../components/molecules";
import data from "../employee";

export default {
  title: "Molecules/ACard",
  component: ACard,
} as ComponentMeta<typeof ACard>;

const Template: ComponentStory<typeof ACard> = (args) => <ACard {...args} />;

export const card = Template.bind({});
card.args = {
  firstName: data.firstName,
  lastName: data.lastName,
  email: data.email,
  phone: data.phone,
  gender: data.gender,
  photo: data.photo,
};
