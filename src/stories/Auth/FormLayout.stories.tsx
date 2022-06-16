import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormLayout from '../../Components/Auth/Forms/FormLayout';

export default {
    title: 'form_layout',
    component: FormLayout,
} as ComponentMeta<typeof FormLayout>

const Template: ComponentStory<any> = (args) => <FormLayout {...args} />

export const FormLayoutStory = Template.bind( {} )