import React, { memo, useRef } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';

export default memo(function AppHeader() {
    const inputRef = useRef();
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <div className="prev_next">
                    <span className="iconfont">&#xe603;</span>
                    <em>&nbsp;&nbsp;&nbsp;&nbsp;</em>
                    <span className="iconfont">&#xe61f;</span>
                </div>
                <Input
                    ref={inputRef}
                    className="search "
                    placeholder="搜索音乐"
                    prefix={<SearchOutlined />}
                    bordered={false}
                />
            </HeaderLeft>
            <HeaderRight>
                <a href="/login" className="login">
                    登录
                </a>
                <span className="iconfont toolbar">&#xe63a;</span>
                <span className="iconfont toolbar">&#xe650;</span>
                <span className="iconfont toolbar">&#xe6a9;</span>
            </HeaderRight>
        </HeaderWrapper>
    );
});
