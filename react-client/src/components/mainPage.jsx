import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      animeList: []
    };
  }
  handleChange(e) {
    this.setState({ searchTerm: e.target.value, animeList: [] });
  }

  searchAnAnime() {
    var searchedAnime = this.state.searchTerm.split(" ").join("/");
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${searchedAnime}=1`)
      .then(res => {
        this.setState({ animeList: res.data.results });
      });
  }
  addToWatchLater(id) {
    axios
      .post("/add", { userName: "donatelosss", animeId: id })
      .then(res => console.log("hey"));
  }
  render() {
    const animes = this.state.animeList.map((anime, index) => {
      return (
        <div
          className="anime"
          id={index}
          onClick={() => {
            this.addToWatchLater(anime.mal_id);
          }}
        >
          <img src={anime.image_url} alt="Smiley face" />
          <br />
          {anime.title} {anime.score}
        </div>
      );
    });

    return (
      <div>
        <div class="active-cyan-4 mb-4">
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={this.state.searchTerm}
            onChange={this.handleChange.bind(this)}
          />
          <div id="watchLaterList">watch later list</div>
        </div>
        <button onClick={this.searchAnAnime.bind(this)}>search</button>
        <div id="animes">{animes}</div>
      </div>
    );
  }
}

export default MainPage;
