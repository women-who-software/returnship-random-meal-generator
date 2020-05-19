import React from "react";

const Form = () => {
  return (
    <form className="search-form">
      <div className="search-form--specification">
        <label for="ingredient" className="search-form__label">
          Ingredients:
        </label>
        <input
          id="ingredient"
          className="search-form__input"
          placeholder="eggs, spinach"
          type="text"
        />
      </div>
      <div className="diet__checkbox--box">
        <div className="diet__checkbox--gluten-free">
          <input
            id="gluten-free"
            className="diet__checkbox--input"
            type="checkbox"
          />
          <label for="gluten-free" className="diet__checkbox--label">
            Gluten Free
          </label>
        </div>
        <div className="diet__checkbox--dairy-free">
          <input
            id="dairy-free"
            className="diet__checkbox--input"
            type="checkbox"
          />
          <label for="dairy-free" className="diet__checkbox--label">
            Dairy Free
          </label>
        </div>
        <div className="diet__checkbox--pescatarian">
          <input
            id="pescatarian"
            className="diet__checkbox--input"
            type="checkbox"
          />
          <label for="pescatarian" className="diet__checkbox--label">
            Pescatarian
          </label>
        </div>
        <div className="diet__checkbox--vegetarian">
          <input
            id="vegetarian"
            className="diet__checkbox--input"
            type="checkbox"
          />
          <label for="vegetarian" className="diet__checkbox--label">
            Vegetarian
          </label>
        </div>
        <div className="diet__checkbox--vegan">
          <input id="vegan" className="diet__checkbox--input" type="checkbox" />
          <label for="vegan" className="diet__checkbox--label">
            Vegan
          </label>
        </div>
        <div className="diet__checkbox--keto">
          <input id="keto" className="diet__checkbox--input" type="checkbox" />
          <label for="keto" className="diet__checkbox--label">
            Keto
          </label>
        </div>
      </div>
    </form>
  );
};

export default Form;
