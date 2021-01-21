import Money from '../../images/bitcoin-icon.png';
import Piggybank from '../../images/piggybank.png';


export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Exchange',
  headline: 'Become a crypto trader in seconds',
  description:
    'We have got everything you need to start stock.',
  buttonLabel: 'Start Now',
  imgStart: true,
  img: Money,
  alt: 'Money',
  dark: true,
  primary: true, 
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Piggybank,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Journey',
  headline: 'Creating an account is extremely easy',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: require('../../images/papers.png').default
  ,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true
};
