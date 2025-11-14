import React from "react";

const SignUp = () => {
  return (
    <div>
      SignUp

      <form >
        <div className="form-group col-md-6">
          <div className="col-2  mb-3">
            <label forHTML="validationDefault01">First name</label>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              placeholder="First name"
              required
            />
          </div>
          <div className="col-2 mb-3">
            <label forHTML="validationDefault02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault02"
              placeholder="Last name"
              required
            />
          </div>
          <div class="col-6 mb-3">
            <label for="Email">Email</label>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                id="validationDefaultUsername"
                placeholder="your@email.com"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-6 mb-3">
            <label for="validationDefault04">Mobile</label>
            <input
              type="tel"
              class="form-control"
              id="validationDefault04"
              placeholder=""
              required
            />
          </div>
          <div class="col-6 mb-3">
            <label for="validationDefault05">Birth Date</label>
            <input
              type="date"
              class="form-control"
              id="validationDefault05"
              placeholder="Zip"
              required
            />
          </div>
          <div className="col-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div class="form-group col-6">
          <div class="form-check"></div>
        </div>
        <button type="button" class="btn btn-success col-6">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
