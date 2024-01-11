import React from 'react'
//import { Switch, Route, Redirect } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => (
   /* <Switch> // não se usa mais Switch
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>*/

    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Home/>}  />
    </Routes>
    );