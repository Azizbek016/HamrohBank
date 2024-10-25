import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div className="not-found">
        <h1 style={{fontSize: "130px", textAlign: "center", marginTop: "150px"}}>404 Not Found</h1>
        <p className="htn">Kechirasiz, siz qidirgan narsa topilmadi. Bosh sahifaga qaytasizmi ?</p>
        <Link to="/"><button className="qwer"  style={{padding: "20px", border: "8px"}}>Bosh sahifaga qaytish </button></Link>
    </div>
  )
}

export default NotFound