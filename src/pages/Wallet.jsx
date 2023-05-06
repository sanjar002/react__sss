import React from 'react';
import CommonSection from '../components/ui/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap'; 

import '../styles/Wallet.css';

const wallet__data = [
  {
    title: 'Bitcoin',
    desc: "биткоин – это набор математических операций. Он не привязан к фиатным деньгам или другим активам, у него нет физического выражения в виде купюр или монет",
    icon: 'ri-bit-coin-line'
  },

  {
    title: 'Coinbase',
    desc: "Денежная база = М0 + денежные средства в обязательных резервах (в ЦБ РФ) + денежные средства коммерческих банков на корреспондентских счетах ЦБ РФ.",
    icon: 'ri-coin-line'
  },

  {
    title: 'Metamask',
    desc: "Сегодня MetaMask работает с токенами ERC20, BEP20 и BEP2. Кошелек MetaMask – “главный” кошелек в экосистеме Ethereum. Он служит связующим звеном между всеми.",
    icon: 'ri-money-cny-circle-line'
  },

  {
    title: 'Authereum',
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore in esse est beatae, sint ad? Quaerat, reprehenderit dolores quod laborum veniam est magnam obcaecati odio.",
    icon: 'ri-bit-coin-line'
  },
]


const Wallet = () => {
  return (
    <>
    <CommonSection title='Connect Wallet' />

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 text-center'>
             <div className="w-50 m-auto">
             <h3 className='text-light'>Подключить свой кошелек</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Ab sequi corrupti soluta aut vel provident veritatis ex voluptas, optio totam?</p>
             </div>
          </Col>

          {
            wallet__data.map((item,index) => (
              <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
              <div className="wallet__item">
                <span> <i class={item.icon}></i> </span>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
            ))
          }

        
        </Row>
      </Container>
    </section>
    </>
 
  )
}

export default Wallet
