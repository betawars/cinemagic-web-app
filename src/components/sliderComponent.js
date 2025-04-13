import { Card, CardActionArea} from '@mui/material'
import './sliderComponent.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';

export default function SliderComponent({ title, movieData }) {

    const router = useRouter()
    const onMovieClick = (id) => {
        router.push(`/details/${id}`)
    }

    return (
        <div className='main'>
            <p className='strip-title'>{title}</p>
            <Swiper
                spaceBetween={0}
                slidesPerView={8}
                //TODO: make this work
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                scrollbar={{ draggable: true, enabled: true }}
                className='w-[100%]'
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                    1400: {
                        slidesPerView: 6,
                    },
                    1900: {
                        slidesPerView: 8,
                    },
                    2500: {
                        slidesPerView: 10,
                    }
                }}
                modules={[Pagination, Navigation]}
            >

                {
                    movieData.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx} onClick={()=>onMovieClick(item.id)}>
                                <div className='strip-movie-card'>
                                    <div className='strip-movie-card-title'>
                                        <div>
                                            <p className='strip-movie-card-title-inner rotate'>{item.title}</p>
                                            <p>{idx + 1}</p>
                                        </div>
                                    </div>
                                    <Card className='strip-movie-card-image' sx={{ minWidth: 200, maxWidth: 200, minHeight: 300, maxHeight: 300 }}>
                                        <CardActionArea>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
                                                height={1000}
                                                width={1000}
                                                alt={item.original_title}
                                                priority
                                                content='fit'
                                            />
                                        </CardActionArea>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}