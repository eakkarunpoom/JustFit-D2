import React from "react";
import Layout from "../../component/Layout";
import "./LoginPage.css";

function LoginPage() {
  return (
    <Layout>
      <main className="form_container m-auto mt-4">
        <form>
          <h1 className="h1 mb-3 text-center log-in">Log in</h1>
          <h1 className="h3 mb-3 fw-bold text-center">Welcome back</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </Layout>
  );
}

export default LoginPage;
