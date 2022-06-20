import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CreateNewProject from '../../../Components/Home/Mainscreen/CreateNewProject'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

export default {
    title: 'new project',
    component: CreateNewProject,
} as ComponentMeta<typeof CreateNewProject>

const Template: ComponentStory<any> 
= (args) => (
    <BrowserRouter>
        <Provider store={ store }>
            <CreateNewProject {...args} />
        </Provider>
    </BrowserRouter>
)

export const FormLayoutStory = Template.bind( {} )