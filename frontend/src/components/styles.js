import styled from 'styled-components';

export const Colors = {
  white: 'white',
  black: '#0f0e22',
  blue: '#161a36',
  sea_blue: '#0d3149',
  orange_dark: '#b74500',
  orange: '#cf6400',
  orange_light: '#ef7e00'
};

export const Breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

export const Devices = {
  tablet: `(min-width: ${Breakpoints.sm})`,
  desktop: `(min-width: ${Breakpoints.md})`
};

/* TYPOGRAPHY */

export const H1 = styled.h1`
  margin: 0;
  font-weight: 200;
  font-size: 40px;
  line-height: 44px;

  @media ${Devices.tablet} {
    font-size: 50px;
    line-height: 54px;
  }

  @media ${Devices.desktop} {
    font-size: 60px;
    line-height: 64px;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  font-weight: 200;
  font-size: 35px;
  line-height: 39px;

  @media ${Devices.tablet} {
    font-size: 40px;
    line-height: 44px;
  }

  @media ${Devices.desktop} {
    font-size: 45px;
    line-height: 49px;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  font-weight: 200;
  font-size: 25px;
  line-height: 29px;

  @media ${Devices.tablet} {
    font-size: 30px;
    line-height: 34px;
  }

  @media ${Devices.desktop} {
    font-size: 35px;
    line-height: 39px;
  }
`;

export const TextM = styled.span`
  font-size: 0.75em;
`;

export const TextS = styled.span`
  font-size: 0.5em;
`;

export const M = styled.span`
  font-weight: 400;
`;

export const B = styled.b`
  font-weight: 700;
`;

export const P = styled.p`
  font-size: 16px;

  @media ${Devices.tablet} {
    font-size: 18px;
  }

  @media ${Devices.desktop} {
    font-size: 20px;
  }
`;

/* ELEMENTS */

export const Divider = styled.div`
  width: 100%;
  height: ${props => (props.heightM ? props.heightM : '10px')};

  @media ${Devices.tablet} {
    height: ${props => (props.heightT ? props.heightT : '20px')};
  }

  @media ${Devices.desktop} {
    height: ${props => (props.heightD ? props.heightD : '30px')};
  }
`;

export const Underlined = styled.div`
  margin: 0;
  text-align: center;
  position: relative;
  display: inline-block;
  margin-bottom: 30px;

  @media ${Devices.tablet} {
    margin-bottom: 0;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 6px;
    background: ${Colors.orange};
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
  }

  &:before {
    width: 50px;
    bottom: -10px;

    @media ${Devices.tablet} {
      left: -40px;
      top: 14px;
    }

    @media ${Devices.desktop} {
      left: -45px;
      top: 16px;
    }
  }

  &:after {
    width: 35px;
    bottom: -22px;
    opacity: 0.5;

    @media ${Devices.tablet} {
      left: -25px;
      top: 25px;
    }

    @media ${Devices.desktop} {
      left: -30px;
      top: 28px;
    }
  }
`;

export const IntroContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const Bolder = styled.span`
  font-weight: bolder;
`;

export const WhiteLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => (props.color ? Colors[props.color] : 'white')};
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: -1;
`;
