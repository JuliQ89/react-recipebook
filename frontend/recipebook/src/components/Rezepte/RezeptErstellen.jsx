import React from "react";
import Header from "../Header";
import {
  RiTimeLine,
  RiGroupLine,
  RiFireLine,
  RiAddFill,
} from "@remixicon/react";

const RezeptErstellen = () => {
  return (
    <>
      <Header searchBar={false} />

      <section className="mt-5 w-100 d-flex justify-content-center">
        <div className="card w-75">
          <div className="card-header">Create Recipe</div>
          <form className="card-body d-flex flex-column gap-4">
            {/* RECIPE name */}
            <div className="mb-3">
              <label htmlFor="recipe_name" className="form-label">
                Nudeln
              </label>
              <input
                type="text"
                className="form-control"
                id="recipe_name"
                placeholder="z.B. Italian"
              />
            </div>
            {/* RECIPE is_public */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="recipe_ispublic"
              />
              <label className="form-check-label" htmlFor="recipe_ispublic">
                Is Public
              </label>
            </div>
            {/* RECIPE img */}
            <div className="mb-3">
              <label htmlFor="recipe_img" className="form-label">
                Recipe Icon
              </label>
              <input className="form-control" type="file" id="recipe_img" />
            </div>
            {/* RECIPE description */}
            <div className="mb-3">
              <label htmlFor="recipe_description" className="form-label">
                Recipe description
              </label>
              <textarea
                className="form-control"
                id="recipe_description"
                rows="3"
              ></textarea>
            </div>
            {/* RECIPE calories */}
            <div className="mb-3">
              <label htmlFor="recipe_calories" className="form-label">
                Recipe Calories
              </label>
              <div className="input-group">
                <span className="input-group-text" id="recipe_calories">
                  <RiFireLine size={17} color="#6a6a6a" />
                </span>
                <input
                  type="number"
                  className="form-control"
                  id="recipe_calories"
                  aria-describedby="basic-addon3 basic-addon4"
                  placeholder="z.B. 2510"
                />
              </div>
            </div>
            {/* RECIPE kategory */}
            <select className="form-select" aria-label="Select Kategory">
              <option selected>Select Kategory</option>
              <option value="1">Italian</option>
              <option value="2">French</option>
              <option value="3">British</option>
            </select>
            {/* RECIPE duration */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <RiTimeLine size={17} color="#6a6a6a" />
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="z.B. 50"
                aria-label="Duration to cook Recipe"
              />
              <span className="input-group-text" style={{ color: "#6a6a6a" }}>
                Min.
              </span>
            </div>
            {/* RECIPE persons */}
            <div className="mb-3">
              <label htmlFor="recipe_persons" className="form-label">
                Recipe Persons
              </label>
              <div className="input-group">
                <span className="input-group-text" id="recipe_calories">
                  <RiGroupLine size={17} color="#6a6a6a" />
                </span>
                <input
                  type="number"
                  className="form-control"
                  id="recipe_persons"
                  aria-describedby="basic-addon3 basic-addon4"
                  placeholder="z.B. 4"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary align-self-start">
              <RiAddFill size={17} /> Create
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default RezeptErstellen;
