import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import data from "./data";
import { wrapper } from "app/store";
import { Provider } from "react-redux";

import customStore from "app/customStore";

import { CardView } from "../../components/organisms";

export default {
  title: "Organisms/CardView",
  component: CardView,
  decorators: [
    (Story) => (
      <Provider store={customStore}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof CardView>;

const Template: ComponentStory<typeof CardView> = (args) => (
  <CardView {...args} />
);

export const card = Template.bind({});
card.args = {
  data: data,
};
