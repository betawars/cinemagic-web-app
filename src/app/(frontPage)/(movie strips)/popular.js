
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import './styles.css'
import Image from 'next/image'
export default function Popular({ movieData }) {
    return (
        <div className='main'>
            <p className='strip-title'>Popular</p>
            <div className="strip-movies">
                {
                    movieData.map((item, idx) => {
                        return (
                            <div key={idx} className='strip-movie-card'>
                                <div className='strip-movie-card-title'>
                                    <div>
                                        <p className='strip-movie-card-title-inner rotate'>{item.title}</p>
                                        <p>{idx+1}</p>
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
                        )
                    })
                }
            </div>
        </div>
    )
}