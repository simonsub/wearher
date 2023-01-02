import React, { useState, useEffect } from "react";
import "./Search.css";
import search from "../assets/search.ico";
import arrow from "../assets/arrow.png";
import favorite from "../assets/favorite.png";
import toast, { Toaster } from "react-hot-toast";

function Search({ value, data, change, submit }) {
  const [state, setState] = useState({
    expand: false,
    favorites: [],
  });

  function handleSaveFavorites() {
    let isItNewItem = handleRemoveFromStorage(value);
    if (isItNewItem) {
      state.favorites.push(value);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
      toast("The place was add to favorites 🤙");
    } else {
      toast("The place was removed from favorites 🙀");
    }
    handleExpandFavorites();
  }

  function handleRemoveFromStorage(newItem) {
    let isItNewItem = true;
    state.favorites.forEach(function (item, index, object) {
      if (item === newItem) {
        object.splice(index, 1);
        isItNewItem = false;
      }
    });
    return isItNewItem;
  }

  function handleExpandFavorites() {
    if (state.expand === true) {
      setState({ ...state, expand: false });
    } else {
      setState({ ...state, expand: true });
    }
  }

  function handleChoiceFavorite(item, e) {
    const choice = state.favorites.at(item);
    data.value = choice;
    handleExpandFavorites();
    submit(e);
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorites"));
    if (items) {
      setState({ ...state, favorites: items });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="search__container">
        <div className="search__favorites">
          <button className="search__button" onClick={handleExpandFavorites}>
            <img src={arrow} height="32" width="32" alt="arrow" />
          </button>
          {state.expand && (
            <div className="search__favoriteContainer">
              {state.favorites.map((item, index) => (
                <div
                  className="search__favoriteItem"
                  key={index}
                  onClick={(e) => handleChoiceFavorite(index, e)}
                >
                  <div>{item}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <form className="search__form" onSubmit={submit}>
          <input
            type="text"
            value={value}
            onChange={change}
            placeholder="e.g. London,England"
            className="search__input"
          />
          <button className="search__button">
            <img src={search} height="32" width="32" alt="search" />
          </button>
        </form>
        <button className="search__button">
          <img
            src={favorite}
            height="32"
            width="32"
            alt="favorite"
            onClick={handleSaveFavorites}
          />
        </button>
      </div>
      <Toaster />
    </>
  );
}

export default Search;
