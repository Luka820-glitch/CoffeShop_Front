import styled from 'styled-components';
import heroImg from '../assets/Fotos/cover-foto.png';
import overlayImg from '../assets/Fotos/Rectangle.png';

export const HeroWrapper = styled.section`
  position: relative;
  height: 662px;
  width: 100%;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #f0eeed;
  z-index: 1;
  margin: -10px auto 76px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 937px;
  height: 662px;
  background: url(${overlayImg}) center/cover no-repeat;
  z-index: 0;
`;

export const HeroText = styled.div`
  position: relative;
  width: 649px;
  margin-left: 102px;
  margin-top: 176px;
  display: flex;
  flex-direction: column;

  hr {
    width: 496px;
    height: 3px;
    background-color: #fff;
    border: none;
    margin: 0;
  }

  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 36px;
    color: #f0eeed;
    margin: 37px 0 13px;
  }

  h1 {
    font-family: 'High Tower Text', serif;
    font-weight: 400;
    font-size: 96px;
    color: #f0eeed;
    margin: 0;
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #fbfbfb;
    margin: 0 0 37px;
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroOverlay />
      <HeroText>
        <hr />
        <h2>Simple Clever</h2>
        <h1>Best Coffe</h1>
        <h3>Lorem.....</h3>
        <hr />
      </HeroText>
    </HeroWrapper>
  );
};

export default Hero;
