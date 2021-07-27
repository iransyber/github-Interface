import React from 'react'
import Layout from "./components/layout";
import NoSearch from './components/no-Search';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks';


function App() {

  const { githubState } = useGithub();
  return (
    <Layout>

      {githubState.hasUser ? (
        <>
          {githubState.loading ?
            (
              <p>Loading</p>
            )
            :
            (
              <>
                <Profile />
                <Repositories />
              </>
            )}
        </>
      ) :
        (
          <NoSearch/>
        )
      }

    </Layout>
  );
}

export default App;
