import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Account from '../../../Components/Home/Navbar/account/build/Account';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

export default {
    title: 'account navbar',
    component: Account,
} as ComponentMeta<typeof Account>

const Template: ComponentStory<any> 
= (args) => (
    <BrowserRouter>
        <Provider store={ store }>
            <Account {...args} />
        </Provider>
    </BrowserRouter>
)

export const FormLayoutStory = Template.bind( {} )