
import React, { useState, useRef,useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ij from '../img/ij.webp'
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import AsosiyP1_i1 from '../img/Plastik-kard.webp'
import omonatimg from '../img/omonat.webp'
import kredit from '../img/kredit.webp'
import kreditp from '../img/kreditp.png'
import kreditK5 from '../img/k5.png'
import noname from '../img/noname.png';
import image1 from '../img/like.png'; // Birinchi rasm
import image2 from '../img/dislike.png'; // Ikkinchi rasm
import lg from '../img/lg.png'
import ok from '../img/pageO1.png'
import mobile from '../img/mobile.png'
import b1 from '../img/xd.png'
import { Link } from 'react-router-dom';
SwiperCore.use([SwiperCore.Autoplay]);

function Asosiy() {
  const [summa, setSumma] = useState(500000);
  const [muddat, setMuddat] = useState(6);

  const MAX_SUMMA = 1000000000;
  const MAX_MUDDAT = 120;

  const yigilganSumma = summa * (muddat / 12);
  const oylikOrtacha = (summa * (0.135 / 12)) + (summa / muddat);

  const formatValue = (value) => value.toLocaleString();

  const handleSummaChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue <= MAX_SUMMA && newValue % 500000 === 0) {
      setSumma(newValue);
    }
  };

  const handleMuddatChange = (e) => {
    const newValue = Number(e.target.value);
    if (newValue <= MAX_MUDDAT && newValue % 6 === 0) {
      setMuddat(newValue);
    }
  };

  const handleSummaInputChange = (e) => {
    const newValue = Number(e.target.value.replace(/\D/g, ''));
    if (newValue <= MAX_SUMMA && newValue >= 500000 && newValue % 500000 === 0) {
      setSumma(newValue);
    }
  };

  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000); // Har 5 sekundda o'tish

    return () => clearInterval(interval); // Komponent o'chirilganda intervalni to'xtatish
  }, []); 
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem('messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState(() => {
    return localStorage.getItem('name') || '';
  });
  const [confirmation, setConfirmation] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);

  const handleSendMessage = () => {
    if (inputValue.trim() && savedName) {
      const newMessage = { text: inputValue, name: savedName, showImage: true };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue('');
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setConfirmation(`"${inputValue}" ${savedName} tomonidan qabul qilindi!`);
      setTimeout(() => setConfirmation(''), 3000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleNameChange = () => {
    if (name.trim().length >= 3) {
      setSavedName(name);
      localStorage.setItem('name', name);
      setName('');
      setIsEditingName(false);
    }
  };

  const toggleImage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].showImage = !updatedMessages[index].showImage; 
    setMessages(updatedMessages);
    localStorage.setItem('messages', JSON.stringify(updatedMessages)); 
  };
  return (
    <>
      <div className="container">
      <div className="A_p1">
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="swiperChild1">
            <div className="A_p1-s1">
              <h1><span>Hamroh Bank</span> plastik kartalari</h1>
              <h2>MasterCard va Visa kartalari bilan sayohatingiz <br /> yanada foydali bo`ladi</h2>
              <Link to="cards"><button>Karta xarid qilish</button></Link>
            </div>
            <div className="A_p1-s2">
              <img src={AsosiyP1_i1} alt="Hamroh Bank" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperChild2">
            <div className="A_p1-s1">
              <h1 style={{ fontSize: "80px", color: "rgb(41, 202, 156)" }}>Omonatlar</h1>
              <h2>Milliy valyutada pullaringizni <br /> foyda bilan ko`paytiring <span>25%</span></h2>
              <Link to="deposit"><button>Batafsil</button></Link>
            </div>
            <div className="A_p1-s2">
              <img src={omonatimg} alt="Omonatlar" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperChild3">
            <div className="A_p1-s1">
              <h1 style={{ fontSize: "80px", color: "rgb(41, 202, 156)" }}>Kreditlar</h1>
              <h2>Har qanday ehtiyoj uchun qulay kreditlar <br /> Onlayn kredit rasmiylashtiring</h2>
              <Link to="credit"><button>Batafsil</button></Link>
            </div>
            <div className="A_p1-s2">
              <img src={kredit} alt="Kreditlar" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
        <div className="A_p0">
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
                    <a href="https://play.google.com/store/apps/details?id=com.hamkorbank.mobile&hl=ru"><h3>Hamroh Bank</h3></a>
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
        </div>
        <div className="A_p2">
          <div className="A_p2-boxs1">
            <div className="A_p2-boxs1-child">
              <h1>Kreditlar</h1>
              <p>Katta xarid qilishni rejalashtiryapsizmi yoki shoshilinch ehtiyojlar uchun zudlik bilan pul kerakmi?
                Unda Hamroh Bank kreditlari biridan foydalaning!</p>
             <Link to="credit" > <button>Kredit olish</button></Link>
            </div>
          </div>
          <div className="A_p2-boxs2">
            <img src={kreditK5} alt="" />
          </div>
        </div>
        <div className="A_p7">
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
              
            </div>
          </div>    
        </div>
        <div className="A_p3_cont">
          <article className='article-dad'>
            <article className="article_child1">
              <h1>
                Orzu qilingan maqsadlar uchun mablag`ni Hamroh Bank bilan jamg`arib boring
              </h1>
              <p>
                Qisman qaytarib olish imkoniyati mavjud bo`lgan va muddatidan oldin yopilgan taqdirda <br /> qotishlarsiz qulay omonatlar.
              </p>
            </article>
            <article className="article_child2">
              <img src={kreditp} alt="" />
            </article>
          </article>
          <div className="A_p3">
            <div className="containerrr">
              <div className="input-group">
                <label>Summa:</label>
                <input
                  type="range"
                  min="500000"
                  max={MAX_SUMMA}
                  step="500000"
                  value={summa}
                  onChange={handleSummaChange}
                  className="slider"
                />
                {/* <input
                type="text"
                value={formatValue(summa)}
                onChange={handleSummaInputChange}
                placeholder="Summa kiriting"
                className="input-text"
              /> */}
                <span>{formatValue(summa)} so`m</span>
              </div>
              <div className="input-group">
                <label>Muddat:</label>
                <input
                  type="range"
                  min="6"
                  max={MAX_MUDDAT}
                  step="6"
                  value={muddat}
                  onChange={handleMuddatChange}
                  className="slider"
                />
                <span>{muddat} oy</span>
              </div>

            </div>
            <div className="containerrr2">
              <div className="additional-info">
                <p className='c_text'> Oylar davomida men yig`aman <br /> <br /><span>{formatValue(yigilganSumma)} so`m</span></p>
                <p className="line"></p>
                <p className='c_text2'>Oylik foizlar: <br /> <br /> <span>{formatValue(oylikOrtacha)} so`m</span></p>
                <p className="line"></p>

              </div>
              <Link to="credit"><button className="info-button">Batafsil</button></Link>
            </div>
          </div>
        </div>
        <div className="A_p6">
        <div className="K_p1">
            <div className="h1-cont">
            <h1>  
                Hamroh bank plastik kartalarini xarid qiling  va Iphone 16 pro  yutib oling.
              </h1>
            </div>
              <p>

              </p>
                  <Link to="cards">              <button style={{cursor:"pointer"}} className="aksiya-btn">
              Ishtirok etish
              </button></Link>
          </div>
        </div>
        <div className="A_p4">
        <div className="haqida-boxs1">
            <div className="h-b1">
              <h1>
                <span>Hamroh bank</span> endi siz bilan  birga!
                Birgalikda biz bir-birimizga ishonamiz va doimo yuqoridamiz!
              </h1>
            </div>
            <div className="h-b2">
              <img src={b1} alt="" />
            </div>
          </div>
        </div>
        <div className="A_p5">
              <div className="omonatend">
              <div className="omonatend1">
              <div className="textsection">

                <h1>Hamkor ilovasi</h1>
                <p>Valyutani bir zumda ayirboshlang</p>
                <p>Oyiga 5 000 000 so`mgacha bepul pul o`tkazing</p>
                <p>Visa Classic kartasini bepul rasmiylashtiring</p>

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
        </div>

    
        <div className="A_p9">
          <div className="chat-container">
            {savedName && <div className="saved-name">Salom {savedName}, endi sharh qoldirishingiz mumkin!</div>}
            <div className="marquee">
              <div className="marquee-content">
                {messages.map((msg, index) => (
                  <div key={index} className="message">
                    <div className="message-name">
                      <span>
                        <img src={noname} alt="" />{msg.name}
                      </span>
                    </div>
                    <div className="message-text">
                      <span>{msg.text}</span>
                    </div>
                    <div onClick={() => toggleImage(index)} className="message-image">
                      <img style={{ width: "30px" }} src={msg.showImage ? image1 : image2} alt="Toggle" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-container">
              <div className="input-container2">
                <label>
                  Ismingiz: {savedName}
                </label>
                {!isEditingName && (
                  <button className='button' onClick={() => setIsEditingName(true)}>Ismni o`zgartirish</button>
                )}
              </div>
              {isEditingName && (
                <div className="name-edit">

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ismingizni kiriting..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleNameChange();
                      }
                    }}
                  />
                  <button className='button' onClick={handleNameChange}>O`zgartirish</button>
                </div>
              )}
              <div className="message-input">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="O'z fikringizni bildiring..."
                />
                <button className='btnSend' onClick={handleSendMessage}><img src={lg} alt="" /></button>
              </div>
            </div>
            {confirmation && (
              <div className="confirmation-message">{confirmation}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Asosiy;