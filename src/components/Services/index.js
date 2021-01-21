import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import Icon4 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Buy and Sell Crypto</ServicesH2>
          <ServicesP>
          Buy or sell Bitcoin, Ethereum, and other crypto assets with your card or bank account.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Hedge with Poloniex Futures</ServicesH2>
          <ServicesP>
          Trade Bitcoin, Ethereum, and other perpetual with up to 100x leverage on Poloniex Futures.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Earn Rewards for Trading</ServicesH2>
          <ServicesP>
          Never miss an opportunity for a little competition. 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Active your card!</ServicesH2>
          <ServicesP>
            We offer a special card just for virtual money stock. Order now! 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
