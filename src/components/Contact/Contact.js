import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const formEndpoint = "https://formspree.io/f/mbjngdpy";
  const onSubmit = async (data) => {
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      alert("Form was successfully submitted");
      reset();
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div className="contact-component">
      <section className="py-5" id="contact">
        <div className="container-xxl py-5">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2 className="text-white">CONTACT ME</h2>
            <h5 className="text-white fw-normal py-2 fst-italic">
              Interested if I'd be the right fit for your team? Fill in this
              form and I will respond within 24-48 hours.
            </h5>
          </div>
          <div className="row pt-4 mt-5">
            <div className="col-12">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control p-3"
                        id="floatingInput"
                        placeholder="Enter Name*"
                        name="name"
                        {...register("name", { required: true })}
                      />
                      {/* <label for="floatingInput">Enter Name*</label> */}
                      <error style={{ color: "red",textShadow: '2px 2px 2px black'}}>
                        {errors.name?.type === "required" && "Name is required"}
                      </error>
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control p-3"
                        id="floatingEmail"
                        placeholder="Enter Email*"
                        name="email"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                      />
                      {/* <label for="floatingEmail">Enter Email*</label> */}
                      <error style={{ color: "red",textShadow: '2px 2px 2px black' }}>
                        {errors.email?.type === "required" &&
                          "Email is required"}
                        {errors.email?.type === "pattern" &&
                          "Entered email is in wrong format"}
                      </error>
                    </div>
                    <div className="mb-3">
                      <input
                        type="number"
                        className="form-control p-3"
                        id="floatingPassword"
                        placeholder="Enter Phone*"
                        name="number"
                        {...register("number", {
                          required: true,
                          minLength: 10,
                          maxLength: 12,
                        })}
                      />
                      {/* <label for="floatingPassword">Enter Phone*</label> */}
                      <error style={{ color: "red",textShadow: '2px 2px 2px black' }}>
                        {errors.number?.type === "required" &&
                          "Phone number is required"}
                        {errors.number?.type === "minLength" &&
                          "Entered number is less than 10 digits"}
                        {errors.number?.type === "maxLength" &&
                          "Entered number is more than 12 digits"}
                      </error>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <textarea
                      style={{ height: "205px" }}
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingMessage"
                      name="message"
                      {...register("message", { required: true })}
                    ></textarea>
                    {/* <label for="floatingMessage" className="px-6">
                      Enter Message*
                    </label> */}
                    <error style={{ color: "red",textShadow: '2px 2px 2px black' }}>
                      {errors.message?.type === "required" &&
                        "Message is required"}
                    </error>
                  </div>
                  <div className="col-12 mt-5 d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-outline-light"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
