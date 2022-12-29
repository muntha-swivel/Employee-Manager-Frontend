import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import { PictureButton } from "../../../components/atoms";

export default {
  title: "Atoms/Buttons/PictureBtn",
  component: PictureButton,
} as ComponentMeta<typeof PictureButton>;

const Template: ComponentStory<typeof PictureButton> = (args) => (
  <PictureButton {...args} />
);

export const PictureBtn = Template.bind({});
PictureBtn.args = {
  icon: <AcUnitIcon />,
};
