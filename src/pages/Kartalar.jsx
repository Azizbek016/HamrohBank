import { useState, useEffect } from "react";
import buttom from '../img/bottom.png'
import opacha from '../img/Opa.png'
function Kartalar() {
  const [familiy, setfamiliy] = useState([]);


  useEffect(() => {
    fetch('https://jixuityqtvyuspnzkltq.supabase.co/storage/v1/object/public/azzz/db.json')
      .then((request) => request.json())
      .then((response) => setfamiliy(response.cards));
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
    const botToken = "7659981160:AAHVKWuMO5HNQYGOaZzNz42nZBjC9Ngq3AU";
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
        <div className="Kartalar">
          <div className="K_p1">
            <div className="h1-cont">
              <h1>
                Hamroh bank plastik kartalarini xarid qiling  va Iphone 16 pro  yutib oling.
              </h1>
            </div>
            <p>
              Shoshiling sovrinlar <br /> soni cheklangan
            </p>

          </div>
          <div className="Ktalar">
            <div>
              <h1>Hamroh bank kartalar</h1>
              <img src={buttom} alt="" />
            </div>
          </div>
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
          <div className="K_p2">

            <div className="cards">
              {familiy.map((item, id) => (
                <div className="cardW" key={id} >
                  <div className="card_x">
                    <h1>{item.name}</h1>
                    <h2>Narxi: {item.price}</h2>
                    <div className="p_cont">
                      <p>{item.about}</p>
                    </div>
                    <button onClick={toggleModal} className="button2"><p>Buyurtma qilish</p></button>
                  </div>
                  <article className="card">
                    <img src={item.images} alt={item.name} />
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
}

export default Kartalar;