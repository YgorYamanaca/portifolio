import React from 'react';
import NavBarStyle from './styles';

const NavBar: React.FC = () => {

  return(
    <NavBarStyle.Container>
      <div>

      </div>
      <NavBarStyle.UserPhotoContainer>
          <NavBarStyle.UserPhoto />
      </NavBarStyle.UserPhotoContainer>
      <div>
        
      </div>
    </NavBarStyle.Container>
  );
};

export default NavBar;