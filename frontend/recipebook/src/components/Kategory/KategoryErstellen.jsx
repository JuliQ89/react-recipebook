import React, { useState } from "react";
import { RiAddFill } from "@remixicon/react";
// import { useAxiosFetch } from "../../hooks/useAxiosFetch";
import { axiosInstance } from "../../hooks/useAxiosFetch";
// import Cookies from "js-cookie";
import Header from "../Header";
import { constantsObj } from "../../utils/constants";

const FETCH_URL = `${constantsObj.BASE_API_URL}/kategory/`;

const KategoryErstellen = () => {
  const [formData, setFormData] = useState({
    name: "",
    icon: null,
    is_public: false,
  });

  // Make That to a POST Request to the backend onhandleSubmit   instead   of a normal GET Request!
  // const { data, error } = useAxiosFetch(FETCH_URL);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    (async (url) => {
      try {
        const response = await axiosInstance.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data) {
          console.log(response.data);
        }
        setFormData({ ...formData, name: "", icon: null, is_public: false });
      } catch (error) {
        console.log(error);
      }
    })(FETCH_URL);
  };

  return (
    <>
      <Header searchBar={false} />

      <section className="mt-5 w-100 d-flex justify-content-center">
        <div className="card w-75">
          <div className="card-header">Create Kategory</div>
          <form
            className="card-body d-flex flex-column gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* KATEGORY name */}
            <div className="mb-3">
              <label htmlFor="kategory_name" className="form-label">
                Kategory Name
              </label>
              <input
                type="text"
                className="form-control"
                id="kategory_name"
                name="name"
                placeholder="z.B. Italienisch"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            {/* KATEGORY is_public */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                name="is_public"
                id="kategory_ispublic"
                checked={formData.is_public}
                onChange={(e) =>
                  setFormData({ ...formData, is_public: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="kategory_ispublic">
                Is Public
              </label>
            </div>
            {/* KATEGORY icon */}
            <div className="mb-3">
              <label htmlFor="kategory_icon" className="form-label">
                Kategory Icon
              </label>
              <input
                className="form-control"
                type="file"
                name="icon"
                id="kategory_icon"
                onChange={(e) =>
                  setFormData({ ...formData, icon: e.target.files[0] })
                }
              />
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

export default KategoryErstellen;
