import b1 from '../img/xd.png'
import { useState, useEffect } from "react";
function Haqida() {
  const [familiy, setfamiliy] = useState([]);
  useEffect(() => {
    fetch('/public/db.json')
      .then((request) => request.json())
      .then((response) => setfamiliy(response.haqida));
  }, []);

  return (
    <>
      <div className="container">
        <div className="Haqida">
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
          <div className="haqida-boxs2">
            <div className="h-b2-child1">
              <p>
                Bankimiz 5 yildan buyon moliyaviy xizmatlar bozorida o`zining yetakchi mavqeini saqlab kelmoqda. Bank Oʻzbekiston Respublikasi Vazirlar Mahkamasining qaroriga koʻra 1995-yil 7-noyabrda tashkil etilgan bo`lib, shu kungacha kapital va aktivlar hajmi bo`yicha O`zbekistonning yetakchi banklaridan biri hisoblanadi.
              </p>
            </div>
            <div className="h-b2-child2">
              <div className="grandf">
              <div className="book1">
                  <div className="lllDAD">
                    <div2 className="lll"><h2>21</h2></div2>
                    <div2 className="lll"><p>Bank <br /> xizmatlari markazi</p></div2>
                  </div>
                  <p className="line"></p>
                </div>
                <div className="book1">
                  <div className="lllDAD">
                    <div2 className="lll"><h2>46</h2></div2>
                    <div2 className="lll"><p>Savdo nuqtalari <br />Respublika bo`yicha</p></div2>
                  </div>
                  <p className="line"></p>
                </div>
              </div>
              <div className="grandf">
              <div className="book1">
                  <div className="lllDAD">
                    <div2 className="lll"><h2>14</h2></div2>
                    <div2 className="lll"><p>Savdo ofisi <br />Respublika bo`yicha</p></div2>
                  </div>
                  <p className="line"></p>
                </div>
                <div className="book1">
                  <div className="lllDAD">
                    <div2 className="lll"><h2> 197</h2></div2>
                    <div2 className="lll"><p>Bankomat <br /> Respublika bo`yicha</p></div2>
                  </div>
                  <p className="line"></p>
                </div>
              </div>
            </div>

          </div>
          <div className="haqida-boxs3">
    <marquee behavior="scroll" direction="left" scrollamount="2">
        <div className="haqida-cards">
            {familiy.map((item, id) => (
                <div className="haqida-cardw" key={id}>
                    <div className="haqida-card_x">
                        <img src={item.image} alt="" />
                        <div className="info">
                            <h4>{item.name}</h4>
                            <h6>{item.who}</h6>
                            <h6>{item.tel}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </marquee>
    <marquee behavior="scroll" direction="right" scrollamount="2">
        <div className="haqida-cards">
            {familiy.map((item, id) => (
                <div className="haqida-cardw" key={id}>
                    <div className="haqida-card_x">
                        <img src={item.image} alt="" />
                        <div className="info">
                            <h4>{item.name}</h4>
                            <h6>{item.who}</h6>
                            <h6>{item.tel}</h6>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </marquee>
</div>

        </div>
      </div>
    </>
  );
}

export default Haqida;
