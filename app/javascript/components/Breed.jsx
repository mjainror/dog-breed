import React, { useState } from "react";
import { Link } from "react-router-dom";

const Breed = () => {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("");
  const [breed, setBreed] = useState({ image: "", name: name});

  const onChange = (event, setFunction) => {
    setIsSubmitted(false);
    setFunction(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const url = `/api/v1/breeds/details?name=${name}`;
    if (name.length == 0)
      return;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setBreed({ image: "", name: name, status: "error" });
          setIsSubmitted(true);
        }
        
        throw new Error("Something went wrong!!!");
      })
      .then((response) => {
        setBreed({ image: response.message, name: name, status: response.status });
        setIsSubmitted(true);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 col-lg-6 col-md-6 col-xs-12">
          
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="breedName">Breed</label>
              <input
                type="text"
                name="name"
                id="breedName"
                className="form-control"
                required
                onChange={(event) => onChange(event, setName)}
              />
            </div>
            
            <button type="submit" className="btn btn-outline-info custom-button mt-3">
              Submit
            </button>
            
          </form>
        </div>

        <div className="col-sm-6 col-lg-6 col-md-6 col-xs-12">
          {(() => {
            if (isSubmitted && name.length > 0) {
              if ( breed.image && breed.status == "success" ) {
                return (
                  <div>
                    <h2>Breed: {name}</h2>
                    <figure className="figure">
                      <img
                        src={breed.image}
                        alt={`${breed.name} image`}
                        className="figure-img img-fluid rounded"
                      />

                      <figcaption className="figure-caption text-end">{breed.name}</figcaption>
                    </figure>
                  </div>
                )
              }
              else {
                return (
                  <figure className="figure">
                    <figcaption className="figure-caption text-end">
                      No data found for breed name {name}
                    </figcaption>
                  </figure>
                )
              }
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Breed;
