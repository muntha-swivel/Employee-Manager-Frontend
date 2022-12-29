import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import data from "./data";
import { Provider } from "react-redux";
import customStore from "app/customStore";

import { TableView } from "../../components/organisms";

export default {
  title: "Organisms/TableView",
  component: TableView,
  decorators: [
    (Story) => (
      <Provider store={customStore}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TableView>;

const Template: ComponentStory<typeof TableView> = (args) => (
  <TableView {...args} />
);

export const card = Template.bind({});
card.args = {
  data: data,
};
