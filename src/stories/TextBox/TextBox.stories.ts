import {Meta, StoryObj} from "@storybook/react";
import {TextBox} from "../../components/TextBox/TextBox";

const meta = {
    title: 'Components/TextBox',
    component: TextBox,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof TextBox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const TextBoxStory: Story = {
    args: {
        text: 'React',
        backgroundColor: 'rgba(251, 243, 219, 1)',
        fontColor: 'rgba(255, 255, 255, 1)'
    }
}
