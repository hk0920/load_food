import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';

export interface dataProps{
    textAlign: string,
    image : string,
    title : string,
    text : string,
    buttonText : string
};

export interface arrDataProps{
    data : dataProps[];
}

export function DefaultRolling (props:arrDataProps){
    return(
        <Swiper 
            spaceBetween={0}
            slidesPerView={"auto"}
            pagination={true}
            className="swiper-default"
        >
            {
                props.data.map((item, idx)=>{
                    return(
                        <SwiperSlide key={idx}>
                            
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}