import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Form = () => {
  return (
    <form className="search-form">
      <div className="search-form--specification">
        <label for="ingredient" className="search-form__label">
          Ingredient:
        </label>
        <input
          id="ingredient"
          className="search-form__input"
          placeholder="eggs, spinach"
          type="text"
        />
        <ul className="search-form--ingredient-list"></ul>
      </div>
      <div className="search-form__checkbox--container">
        <h3 className="search-form__checkbox--instructions">
          Click to select dietary restrictions:
        </h3>
        <div className="search-form__checkboxes">
          <div className="search-form__checkbox">
            <input
              id="gluten-free"
              className="search-form__checkbox-input"
              type="checkbox"
            />
            <label for="gluten-free" className="search-form__checkbox-label">
              <span className="search-form__checkbox-btn search-form__checkbox-org"></span>
              Gluten Free
            </label>
          </div>
          <div className="search-form__checkbox">
            <input
              id="dairy-free"
              className="search-form__checkbox-input"
              type="checkbox"
            />
            <label for="dairy-free" className="search-form__checkbox-label">
              <span className="search-form__checkbox-btn search-form__checkbox-red"></span>
              Dairy Free
            </label>
          </div>
          <div className="search-form__checkbox">
            <input
              id="pescatarian"
              className="search-form__checkbox-input"
              type="checkbox"
            />
            <label for="pescatarian" className="search-form__checkbox-label">
              <span className="search-form__checkbox-btn search-form__checkbox-gry"></span>
              Pescatarian
            </label>
          </div>
          <div className="search-form__checkbox">
            <input
              id="vegetarian"
              className="search-form__checkbox-input"
              type="checkbox"
            />
            <label for="vegetarian" className="search-form__checkbox-label">
              <span className="search-form__checkbox-btn search-form__checkbox-org"></span>
              Vegetarian
            </label>
          </div>
          <div className="search-form__checkbox">
            <input
              id="vegan"
              className="search-form__checkbox-input"
              type="checkbox"
            />
            <label for="vegan" className="search-form__checkbox-label">
              <span className="search-form__checkbox-btn search-form__checkbox-red"></span>
              Vegan
            </label>
          </div>
          <div className="search-form__checkbox">
            <input
              id="keto"
              className="search-form__checkbox-input"
              type="checkbox"
            />
            <label for="keto" className="search-form__checkbox-label">
              <span className="search-form__checkbox-btn search-form__checkbox-gry"></span>
              Keto
            </label>
          </div>
        </div>
        <button className="search-form__button">Submit</button>

        {/* <div className="search-form__button--container"></div> */}
      </div>
    </form>
  );
};

export default Form;
