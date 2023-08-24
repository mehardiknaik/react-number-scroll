import type { Meta, StoryObj } from "@storybook/react";
import { NumberScroll } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof NumberScroll> = {
  title: "Example/Number",
  component: NumberScroll,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // number: { control: "number" },
    // decimal: { control: "number" },
    // style: {
    //   fontSize: "number",
    // },
    // className: {
    // control: "string",
    // },
  },
};

export default meta;
type Story = StoryObj<typeof NumberScroll>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    number: 123,
    style: {
      fontSize: 20,
    },
    decimal: 2,
  },
};
