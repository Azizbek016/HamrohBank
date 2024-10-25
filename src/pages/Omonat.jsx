import { useState, useEffect } from "react";
import i1 from '../img/i1.png'
import i2 from '../img/i2.png'
import i3 from '../img/i3.png'
import ok from '../img/pageO1.png'
import mobile from '../img/mobile.png'
import opacha from '../img/Opa.png'
function Omonat() {
  const [familiy, setfamiliy] = useState([]);


  useEffect(() => {
    fetch('/public/db.json')
      .then((request) => request.json())
      .then((response) => setfamiliy(response.omonatlar));
  }, []);











  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


















  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // Xabarni ko'rsatish uchun

  const handleInfo = (e) => {
    e.preventDefault();

    // Tekshirish
    if (firstName.length < 3 || /\d/.test(firstName)) {
      setError("Ism 3ta harfdan kam va raqam qatnashmasin.");
      return;
    }

    if (lastName.length < 4 || /\d/.test(lastName)) {
      setError("Familiya 4ta harfdan kam va raqam qatnashmasin.");
      return;
    }

    if (phone.length < 9 || phone.length > 15 || isNaN(phone)) {
      setError("Telefon raqam 9tadan 15tagacha bo'lishi kerak.");
      return;
    }

    setError(""); // Oldingi xatolarni tozalash
    setSuccessMessage("Tezda siz bilan aloqaga chiqamiz");
    setShowSuccess(true); // Xabarni ko'rsatish

    // Xabarni 3 soniyadan keyin yashirish
    setTimeout(() => {
      setShowSuccess(false);
      setSuccessMessage(""); // Xabarni tozalash
    }, 3000);

    SendBotMessage();
  };

  const SendBotMessage = async () => {
    const botToken = "7336017237:AAGYTYWUXET68CEdmJ3P4jg7GHR8YELH4KU";
    const chatId = "5156680646";

    const telegramurl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const message = `
*Ism:* ${firstName}
*Familiya:* ${lastName}
*Telefon:* ${phone}
`;

    try {
      const responseBot = await fetch(telegramurl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown" // Markdown formatini ko'rsatish
        }),
      });

      if (responseBot.ok) {
        console.log("Xabar muvaffaqiyatli yuborildi");
      } else {
        const errorText = await responseBot.text();
        console.log(`Xabar yuborilmadi: ${errorText}`);
      }
    } catch (error) {
      console.error(`Xato: ${error}`);
    }
  };


  return (
    <>
      <div className="container">
        <div className="Omonatlarr">
        <div className="omonatend">
            <div className="omonatend1">
              <div className="textsection">

                <h1>Omonatingizni
                  <span> Hamroh Bank</span>  ilovasi orqali boshqaring</h1>
                <p>Mablag`laringizni to`plang va ko`paytiring</p>
                <p>Omonatning ko`payish dinamikasini real vaqtda kuzatib boring</p>

                <div className="mobile">
                  <img src={mobile} alt="" />
                  <div>
                    <h3>Hamroh Bank</h3>
                    <p>Bank xizmatlariga tezkor kirish uchun QR-kodni skanerlash
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="omonatend2">
              <img src={ok} alt="" />
            </div>
          </div>
          <div>
          <div className="App">
                
                {isModalOpen && (
                  <div className="contuz">
                    
                    <div className="modall">
                    <button className="close" onClick={toggleModal}>X</button>
                    
                    <div className="content">
                      <h2>HAMROHBANKga xush kelibsiz! <br /> Iltimos shaklni to`ldiring.</h2>
                      <form onSubmit={handleInfo}>
                        <input
                          type="text"
                          placeholder="Ismingizni kiriting"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          style={{ borderColor: error && /\bIsm\b/.test(error) ? "red" : "initial" }}
                        />
                        <input
                          type="text"
                          placeholder="Familiyangizni kiriting"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          style={{ borderColor: error && /\bFamiliya\b/.test(error) ? "red" : "initial" }}
                        />
                        <input
                          type="text"
                          placeholder="Telefon raqamingizni kiriting"
                          onChange={(e) => setPhone(e.target.value)}
                          value={phone}
                          style={{ borderColor: error && /\btelefon raqam\b/.test(error) ? "red" : "initial" }}
                        />
                        <button type="submit">Yuborish</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                      </form>
                     
                    </div>
                    <div className="content2">
                    <img src={opacha} alt="" />
                    </div>
                    
                    {showSuccess && <div className="hCont"><h1 className="fade-in">{successMessage}</h1></div>}
                  </div>
                  </div>
  
                )}
            </div>
          </div>
          {familiy.map((item, id) => (
            <div className="Omonatlar" key={id} >
              <div className="Omonatlar_x">
                <div className="aboutsDad">
                  <div className="nameW"><h1>{item.name} <span> omonati</span></h1></div>
                  <div className="haqidaW"><p className="haqida">{item.haqida}</p></div>
                  <div className="ssD">
                    <div className="muddatiW"><p className="muddati"> <img src={i1} alt="" />  {item.muddati}</p></div>
                    <div className="foiziW"><p className="foizi"> <img src={i2} alt="" />  {item.foizi}</p></div>
                    <div className="tuldirishW"><p className="tuldirish"> <img src={i3} alt="" />  {item.tuldirish}</p></div>
                  </div>

                </div>
                <div className="image"><img src={item.img} alt="" /></div>

              </div>
              <button onClick={toggleModal}  className="rasmiylashtirish">Rasmiylashtirish</button>
            </div>
          ))}
          <div className="rasmiy">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Omonat;