import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from '../../Components/Auth/Login/Login';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'login_layout',
    component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<any> 
= (args) => (
    <BrowserRouter>
        <Provider store={ store }>
            <Login {...args} />
        </Provider>
    </BrowserRouter>
)

export const FormLayoutStory = Template.bind( {} )