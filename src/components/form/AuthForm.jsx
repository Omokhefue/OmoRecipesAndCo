const InitForm = ({ isLogin }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userInfo = Object.fromEntries(formData);
    const path = isLogin === true ? "login" : "signup";
    const res = await fetch(`http://localhost:5000/api/v1/auth/${path}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!res.ok) {
      throw Error("there was an error signing up. Please try again");
    }
    const data = await res.json();
    localStorage.setItem("access_token", data.token);
    localStorage.removeItem("liked");
  };
  return (
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
      {!isLogin && (
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      )}

      <button type="submit">{isLogin ? "Login" : "SignUp"}</button>
    </form>
  );
};

export default InitForm;
