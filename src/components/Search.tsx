import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface propsType {
    id : string,
    category : string[]
}
export function Search(props:propsType){
    const SearchBox = styled.div`
        height:0;
        padding:20px 0;
        opacity:0;
        overflow:hidden;
        box-sizing:border-box;
        transition:all 0.3s ease;

        &.on{
            height:auto;
            opacity:1;
            overflow:visible;
        }

        .box__category{
            .swiper-slide{
                display:block;
                width:auto;
                padding:10px 15px;
                font-size:16px;
                border:1px solid #e5e5e5;
                border-radius:20px;

                &:not(:first-child){
                    margin-left:10px;
                }

                &.active{
                    color:#fff;
                    border-color:#7ec9d5;
                    background:#7ec9d5;
                }
            }
        }
    `;

    const FormBox = styled.form`
        display:flex;
        margin:15px 0;

        input{
            flex:1;
            display:block;
            width:100%;
            height:48px;
            padding:5px 10px;
            margin-right:10px;
            font-size:16px;
            border:1px solid #e5e5e5;
            border-radius:5px;
        }

        button{
            display:block;
            width:100px;
            height:48px;
            font-size:18px;
            font-weight:bold;
            color:#fff;
            background-color:#7ec9d5;
            border-radius:5px;
            border:none;
        }
    `;

    return (
        <SearchBox id={props.id}>
            <FormBox action="post">
                <input type="text" placeholder="주소 또는 사업장 입력" />
                <button type="button">검색</button>
            </FormBox>
            <Swiper 
                spaceBetween={0}
                slidesPerView="auto"
                pagination={true}
                className="swiper-default box__category"
            >
                <SwiperSlide className="active">전체</SwiperSlide>
                {
                    props.category.map((item, idx)=>{
                        return(
                            <SwiperSlide key={idx}>{item}</SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </SearchBox>
    )
}