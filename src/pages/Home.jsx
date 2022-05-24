import React from 'react'
import Main from '../components/Main'
import MovieTiles from '../components/MovieTiles'
import requests from '../Request'

function Home() {
    return (
        <div>
            <Main />
            <MovieTiles tilesID="1" title='Upcoming' fetchURL={requests.requestUpcoming} />
            <MovieTiles tilesID="2" title='Top Rated' fetchURL={requests.requestTopRated} />
            <MovieTiles tilesID="3" title='Trending' fetchURL={requests.requestTrending} />
            <MovieTiles tilesID="4" title='Horror' fetchURL={requests.requestHorror} />
            <MovieTiles tilesID="5" title='Popular' fetchURL={requests.requestPopular} />
        </div>
    )
}

export default Home