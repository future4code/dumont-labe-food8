import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

/*Cordenador de rotas */
import {goToHome} from '../../routes/coordinator';

/*imagens*/
import LogoImg from '../../assets/img/small-logo-white.png';

/*Tags styleds*/
import {
  SplashScreenContainer,
  Logo
} from './styles';

export default function SplashScreen() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToHome(history)
    }, 4000)
  }, [history])

  
  return (
    <SplashScreenContainer>
      <Logo src={LogoImg}/>
    </SplashScreenContainer>
  );
}