import aks from "./assets/404.png"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        404
      <img src={aks} alt="" style={{width: "50%"}} />

      <Link to="/">برگشت به صفحه اصلی</Link>
    </div>
  )
}

export default NotFound
