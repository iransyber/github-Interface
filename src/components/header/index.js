import React, { useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled'

// import { Container } from './styles';

function Header() {

    const { getUser } = useGithub();

    const [usernameForSearch, setUsernameForSeach] = useState();

    const submitGetUser = () => {
        if (!usernameForSearch) return;
        return getUser(usernameForSearch);
    }

    return (
        <S.Wrapper>
            <input type="text" placeholder="Buscar Repositorio" 
            onChange={(event) => setUsernameForSeach(event.target.value)}/>
            <button type="submit"
            onClick={submitGetUser}><span>Buscar</span></button>
        </S.Wrapper>
    )
}

export default Header;