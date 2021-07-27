/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repository-item';
import * as S from './styled'

// import { Container } from './styles';

function Repositories() {

  const { githubState, getUserRepos, getUserStarred } = useGithub();

  const [hasUserForSearchRepos, serHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }

    serHasUserForSearchRepos(!!githubState.repositories)

  }, [githubState.user.login]);

  return (

    <>
      {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTablist>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTablist>

          <S.WrapperTabPanel>

            <S.WrapperList>
              {githubState.repositories.map((item) => (
                < RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name} />
              ))}
            </S.WrapperList>

          </S.WrapperTabPanel>
          <S.WrapperTabPanel>

            <S.WrapperList>
              {githubState.starred.map((item) => (
                < RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkTorRepo={item.html_url}
                  fullName={item.full_name} />
              ))}
            </S.WrapperList>

          </S.WrapperTabPanel>

        </S.WrapperTabs>

      ) :
        (
          <></>
        )}
    </>
  );
}

export default Repositories;