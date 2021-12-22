import { loginUrl } from "../spotify";

export default function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
      />
      {/* Login with spotify button */}
      <a href={loginUrl}>Login with spotify</a>
    </div>
  )
}
