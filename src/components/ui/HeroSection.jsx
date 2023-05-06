import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/images/hero.jpg';

import './HeroSection.css'

const HeroSection = () => {
  return (
  <section className='hero__section'>
        <Container>
            <Row>
                <Col lg='6' md='6'> 
                    <div className="hero__content">
                        <h2>Откройте для себя редкое <span>цифровое искусство </span>  и соберите необычный NFT </h2>
                        <p>Его размер не должен превышать 100 МБ. Маркетплейс поддерживает форматы JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB и GLTF.
                        Есть вероятность, что авторы могут найти способы для загрузки файлов большего размера, но многие NFT лучше работают с небольшими видео, песнями или картинками.
                        </p>

                           <div className="hero__btns d-flex align-items-center gap-4">
                           <button className='explore__btn d-flex align-items-center gap-2'> 
                                <i class="ri-rocket-line"></i> 
                                <Link to='/market'>Explore</Link>
                                </button>

                            <button className='create__btn d-flex align-items-center gap-2'> 
                                <i class="ri-ball-pen-line"></i> 
                                <Link to='/create'>Create</Link>
                                </button>
                           </div>
                    </div>
                 </Col>


                 <Col lg='6' md='6'>
                    <div className='hero__img'>
                        <img src={heroImg} alt="" className='w-100' />
                    </div>
                 </Col>
            </Row>
        </Container>
  </section>
  )
}

export default HeroSection
