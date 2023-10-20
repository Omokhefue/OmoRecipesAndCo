const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData);
    console.log(userInfo);
    const res = await fetch("http://localhost:5000/api/v1/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!res.ok) {
      throw Error("there was an error logging in . Please try again");
    }
    const data = await res.json();
    console.log(data);
    localStorage.setItem("access_token", data.token);
  };
  return (
    <>
      <div className="user-registration-form">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              minLength="6"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};
export default Login;
