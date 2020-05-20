import React from "react";

const Form = () => {
  return (
    <form className="search-form">
      <div className="search-form--specification">
        <label
          for="ingredient"
          className="search-form__label"
        >
          Ingredient:
        </label>
        <input
          id="ingredient"
          className="search-form__input"
          placeholder="eggs, spinach"
          type="text"
        />
      </div>
      <div className="search-form__checkbox--container">
        <div className="search-form__checkbox--gluten-free">
          <input
            id="gluten-free"
            className="search-form__checkbox-input"
            type="checkbox"
          />
          <label for="gluten-free" className="search-form__checkbox-label">
          <span className="search-form__checkbox-btn"></span>
            Gluten Free
          </label>
        </div>
        <div className="search-form__checkbox--dairy-free">
          <input
            id="dairy-free"
            className="search-form__checkbox-input"
            type="checkbox"
          />
          <label for="dairy-free" className="search-form__checkbox-label">
          <span className="search-form__checkbox-btn"></span>
            Dairy Free
          </label>
        </div>
        <div className="search-form__checkbox--pescatarian">
          <input
            id="pescatarian"
            className="search-form__checkbox-input"
            type="checkbox"
          />
          <label for="pescatarian" className="search-form__checkbox-label">
          <span className="search-form__checkbox-btn"></span>
            Pescatarian
          </label>
        </div>
        <div className="search-form__checkbox--vegetarian">
          <input
            id="vegetarian"
            className="search-form__checkbox-input"
            type="checkbox"
          />
          <label for="vegetarian" className="search-form__checkbox-label">
          <span className="search-form__checkbox-btn"></span>
            Vegetarian
          </label>
        </div>
        <div className="search-form__checkbox--vegan">
          <input
            id="vegan"
            className="search-form__checkbox-input"
            type="checkbox"
          />
          <label for="vegan" className="search-form__checkbox-label">
          <span className="search-form__checkbox-btn"></span>
            Vegan
          </label>
        </div>
        <div className="search-form__checkbox--keto">
          <input
            id="keto"
            className="search-form__checkbox-input"
            type="checkbox"
          />
          <label for="keto" className="search-form__checkbox-label">
          <span className="search-form__checkbox-btn"></span>
            Keto
          </label>
        </div>
        <div className="search-form__button--container">
          <button className="search-form__button">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
