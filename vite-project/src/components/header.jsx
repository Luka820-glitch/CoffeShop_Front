import styled from 'styled-components';
import logoImg from '../assets/Fotos/Qr-code-scanner.png';
import { useNavigate } from 'react-router-dom';
import useScrollHeader from '../hooks/UseScrollHeader';


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 100;
  background-color: ${({ scrolled }) => (scrolled ? '#1f1f22' : 'transparent')};
  padding-right: ${({ scrolled }) => (scrolled ? '200px' : '0')};
  transition: background-color 0.3s, padding-right 0.3s;
`;


const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 102px;

  img {
    width: 38px;
    height: 38px;
    cursor: pointer;
  }

  span {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #f0eeed;
  }
`;


const MenuSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 102px;
`;

const MenuButton = styled.button`
  padding: 10px 34px;
  border-radius: 5px;
  background-color: #1f1f22;
  color: #f0eeed;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

const Header = () => {
  const navigate = useNavigate();
  const scrolled = useScrollHeader(50);

  return (
    <HeaderWrapper scrolled={scrolled}>
      <BrandSection>
        <img src={logoImg} alt="Logo" onClick={() => navigate('/')} />
        <span>Coffee Shop</span>
      </BrandSection>
      <MenuSection>
        <MenuButton onClick={() => navigate('/coffees')}>ყავები</MenuButton>
        <MenuButton onClick={() => navigate('/ingredients')}>ინგრედიენტები</MenuButton>
      </MenuSection>
    </HeaderWrapper>
  );
};

export default Header;
