import { Carousel } from "react-bootstrap";
import React, { Component } from 'react'
import Logo from '../../assets/logo.svg';
import slide1 from  '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import "./Galery.css"



class Banner extends Component {

    render() {
        return (


            <div>

                <p class="estilosGal">
                    DISFRUTA LA VIDA, DISFRUTA DE UN BUEN MATE 
                    <img  alt="" className="App-logo2" />    </p>

                <Carousel pauseOnHover={false}>
                    <Carousel.Item>
                    
                        <div className="carousel-item active">
                            <img
                                src={slide2}
                                className="d-block slide"
                                alt="slide carousel"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                   
                        <div className="carousel-item active">
                            <img
                                src={slide1}
                                className="d-block slide"
                                alt="slide carousel"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                   
                        <div className="carousel-item active">
                            <img
                                src={slide3}
                                className="d-block slide"
                                alt="slide carousel"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>


        )
    }
}
export default Banner;


