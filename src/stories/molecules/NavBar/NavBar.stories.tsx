import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "../../../components/molecules";

export default {
  title: "Molecules/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const card = Template.bind({});
card.args = {};
