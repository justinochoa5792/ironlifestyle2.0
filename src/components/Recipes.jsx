import React, { Component } from "react";
import Axios from "axios";

class Recipes extends Component {
  state = {
    userSearch: "",
    recipe: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(
      `https://api.edamam.com/search?q=${this.state.userSearch}&app_id=c2f8a963&app_key=50a9c5d1f171508f80243bee7cd4734c`
    ).then((response) => {
      console.log(response.data);
      this.setState({ recipe: response.data.hits });
    });
  };

  handleChange = (e) => {
    this.setState({
      userSearch: e.target.value,
    });
  };
  renderRecipes = () => {
    return this.state.recipe.map((eachRecipe) => {
      return (
        <ul>
          <img src={eachRecipe.recipe.image} alt={eachRecipe.recipe.label} />
          <li>{eachRecipe.recipe.label}</li>
          <a href={eachRecipe.recipe.url}>Go to Recipe</a>
        </ul>
      );
    });
  };
  render() {
    return (
      <div className="recipe">
        <h1>Search for a Recipe</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="search"
            placeholder="Find Recipe"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            style={{
              margin: "10px",
              borderRadius: "5px",
              backgroundColor: "#4285f4",
              color: "white",
            }}
          >
            Search
          </button>
        </form>
        {this.renderRecipes()}
      </div>
    );
  }
}

export default Recipes;
