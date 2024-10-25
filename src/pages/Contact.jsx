import ij from '../img/ij.webp'
function Contact() {
  
    return (
    <>
      <div className="container"> 
          <div className="Contact">
            <div className="Cp1">
              <div className="Cp1_boxs1">
                  <h1>Hamroh Bank</h1>
                  <h2>Biz siz bilanmiz!</h2>
                  <p>“Hamroh” aksiyadorlik-tijorat banki respublika bo‘ylab keng hududiy filiallar tarmog‘iga ega bo‘lib, ularning soni 70 dan ortiq.</p>
              </div>
              <div className="Cp1_boxs2">
                  <img src={ij} alt="" />
              </div>
            </div>
            <div className="Cp2">
              <span>
                <h1>Aloqa markazi: </h1>1256
              </span>
              <span>
                <h1>Ishonch telefoni:  </h1>900088146
              </span>
              <span>
                <h1>Aloqa markazi: </h1>1256
              </span>
              <span>
                <h1>To`liq nomi:</h1>Chet el kapitali ishtrokidagi `Hamrohbank` aksiyadorlik tijorat banki
              </span>
              <span>
                <h1>Qisqartirilgan nom:  </h1>`Hamrohbank`
              </span>
              <span>
                <h1>Manzili: </h1>Qashqadaryo viloyati, Kitob tumani, Paxtakor ko`chasi. 1A-uy <a href="https://www.google.ru/maps/@39.1175085,66.8936038,102m/data=!3m1!1e3?hl=ru&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">Xaritadan kurish</a>
              </span>
              <span>
                <h1>Veb sayt:  </h1><a href="http://localhost:5173/"> wwww.hamrohbank.uz</a>
              </span>

            </div>
            
          </div>
      </div>
    </>
    )
  }
  
  export default Contact;