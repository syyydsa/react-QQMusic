import React, { useEffect, memo, useRef, useState } from 'react';
import {
    getPrivateContent
} from '@/service/recommend'
import { Carousel } from 'antd';

import { RecommendWrapper, RecommendControl } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import VideoCover from '@/components/video-cover';

export default memo(function PrivateContent() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // redux Hook 组件和redux关联: 获取数据和进行操作
    const [privateContent, setPrivateContent] = useState([])
    const hover = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[4].style.visibility = 'visible';
        btn[5].style.visibility = 'visible';
    };
    const leave = () => {
        const btn = document.querySelectorAll('.btn span');
        btn[4].style.visibility = 'hidden';
        btn[5].style.visibility = 'hidden';
    };
    const privateContentRef = useRef();

    useEffect(() => {
        getPrivateContent().then(res => {
            res && res.result && setPrivateContent(res.result)
        })
    }, []);

    const arr = new Array(Math.floor(privateContent.length / 3)).fill(0);
    const groupNum = arr.map((item, index) => {
        return index + item;
    });
    return (
        <RecommendWrapper onMouseLeave={leave}
                onMouseEnter={hover}>
            <ThemeHeaderRCM title="独家放送" moreLink="#" />

            <div
                className="content"
                
            >
                {/* <div className="arrow arrow-left"
                    onClick={e => carouselRef.current.prev()}></div> */}
                <div className="album">
                    <Carousel ref={privateContentRef} dots={false}>
                        {groupNum.map((item) => {
                            return (
                                <div key={item} className="page">
                                    {privateContent
                                        .slice(item * 3, (item + 1) * 3)
                                        .map((it) => {
                                            const cover_props = {
                                                key: it.id,
                                                info: it,
                                                url_name: 'sPicUrl',
                                                playCount: false,
                                                width: 350,
                                                height: 200,
                                                noArtistName: 'true',
                                            };
                                            return (
                                                <VideoCover
                                                    {...cover_props}
                                                />
                                                // <div>sdf </div>
                                            );
                                        })}
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
            <RecommendControl>
                <button
                    className="btn"
                    onClick={() => privateContentRef.current.prev()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
                <button
                    className="btn"
                    onClick={() => privateContentRef.current.next()}
                >
                    <span className="iconfont">&#xe662;</span>
                </button>
            </RecommendControl>
        </RecommendWrapper>
    );
});
