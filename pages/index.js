import config from '../config';
import styled from 'styled-components';
import {CSSReset} from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {

  const estilosDaPagina = { 
    // backgroundColor: "red"
   };
  console.log(config.playlists);

  return (
    <>
    <CSSReset />
    <div style={estilosDaPagina}>
      <Menu />
      <Header />
      <TimeLines playlists={config.playlists} >
        conteudo
      </TimeLines>
    </div>
    </>
  );
}
export default HomePage;



// function Menu() {
//  return (
//    <div>
//      menu
//    </div>
//  );
// }

const StyledHeader = styled.div`
  img{
    width: 80px;
    height: 80px;
    border-radius: 50%;

  }
  .user-info{
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px , 32px;
    gap: 16px;

  }

`;
function Header() {
  return (
    <StyledHeader>
      <img src="banner" />


      <section className='user-info'>
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>

    </StyledHeader>
  );
}

function TimeLines(props) {

  const playlistName = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistName.map(playlistName => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>{

              videos.map(video => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                )
              })

            }</div>
          </section>

        )
      }
      )}
    </StyledTimeline>
  );
}