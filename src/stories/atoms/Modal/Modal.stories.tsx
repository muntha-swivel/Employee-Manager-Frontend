import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AlertModal } from "../../../components/atoms";

export default {
  title: "Atoms/AlertModal",
  component: AlertModal,
} as ComponentMeta<typeof AlertModal>;

const Template: ComponentStory<typeof AlertModal> = (args) => (
  <AlertModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  mainTitle: "Hello",
  text: "World",
};
