import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './StepSection.css';

const STEP__DATA = [
    {
        title: 'Настройте свой кошелек',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus, accusantium quidem sequi temporibus nemo.',
        icon: 'ri-wallet-line'
    },

    {
        title: 'Создайте свою коллекцию',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus, accusantium quidem sequi temporibus nemo.',
        icon: 'ri-layout-masonry-line'
    },

    {
        title: 'Добавьте свой NFT',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus, accusantium quidem sequi temporibus nemo.',
        icon: 'ri-image-line'
    },

    {
        title: 'Перечислите их для продавца',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil natus, accusantium quidem sequi temporibus nemo.',
        icon: 'ri-list-check'
    },
]


const StepSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4'>
                    <h3 className='step__title'>Create and sell your NFT</h3>
                </Col>

                    {
                        STEP__DATA.map((item,index)=>
                        <Col lg='3' md='4' sm='6' key={index}>
                        <div className='single__step__item'>
                                <span>
                                    <i class={item.icon}></i>
                                </span>
                                <div className='step__item__content'>
                                    <h5>
                                        <Link to='/wallet'>{item.title}</Link>
                                    </h5>
                                    <p className='mb-0'>{item.desc}</p>
                                </div>
                        </div>
                    </Col>
                        )
                    }


                
            </Row>
        </Container>
    </section>
  
  )
}

export default StepSection
