import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DeleteModal } from "../../../components/molecules";
import data from "../employee";

export default {
  title: "Molecules/DeleteModal",
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => (
  <DeleteModal {...args} />
);

export const card = Template.bind({});
card.args = {
  employee: data,
  isOpen: true,
};
