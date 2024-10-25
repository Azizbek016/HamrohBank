import React, { useState } from 'react';
import Scaner1 from '../img/telegram.png';
import Scaner2 from '../img/insta.png';
import Scaner3 from '../img/facebook.png';
import Scaner4 from '../img/youtube.png';
import next from '../img/next.png';
import next2 from '../img/next2.png';
import T from '../img/T.png'
import I from '../img/I.png'
import F from '../img/F.png'
import Y from '../img/Y.png'

function Login() {
    const [showImage, setShowImage] = useState({
        telegram: false,
        instagram: false,
        facebook: false,
        youtube: false,
    });

    const handleNextClick = (platform) => {
        setShowImage((prev) => ({ ...prev, [platform]: true }));
    };

    const handleBackClick = (platform) => {
        setShowImage((prev) => ({ ...prev, [platform]: false }));
    };

    return (
        <>
            <div className="Ijtimoiyy">
                <div className="marquee-cont">
                    <div className="marquee">
                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                    <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={T} alt="" />
                                        <h4>Telegram sahifamiz</h4></div>
                                        <h5>Telegram sahifamizga obuna buling</h5>
                                        <a href="https://web.telegram.org/a/#-4599562772">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.telegram && (
                                    <button onClick={() => handleNextClick('telegram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.telegram && (
                                <div className="image-container">
                                    <img src={Scaner1} alt="Telegram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('telegram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={I} alt="" />
                                        <h4>Instgaram sahifamiz</h4></div>
                                        <h5>Instagram sahifamizga obuna buling</h5>
                                        <a href="https://www.instagram.com/hola.vachcha/">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.instagram && (
                                    <button onClick={() => handleNextClick('instagram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.instagram && (
                                <div className="image-container">
                                    <img src={Scaner2} alt="Instagram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('instagram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={F} alt="" />
                                        <h4>Facebok sahifamiz</h4></div>
                                        <h5>Facebok  sahifamizga obuna buling</h5>
                                        <a href="https://www.facebook.com/?locale=ru_RU">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.facebook && (
                                    <button onClick={() => handleNextClick('facebook')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.facebook && (
                                <div className="image-container">
                                    <img src={Scaner3} alt="Facebook" className="scaner-image" />
                                    <button onClick={() => handleBackClick('facebook')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={Y} alt="" />
                                        <h4>YouTube sahifamiz</h4></div>
                                        <h5>YouTube  sahifamizga obuna buling</h5>
                                        <a href="https://www.youtube.com/@HamrohBankUz">@Hamroh_BankUz</a>
                                    </div>
                                </div>
                                {!showImage.youtube && (
                                    <button onClick={() => handleNextClick('youtube')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.youtube && (
                                <div className="image-container">
                                    <img src={Scaner4} alt="YouTube" className="scaner-image" />
                                    <button onClick={() => handleBackClick('youtube')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>
                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                    <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={T} alt="" />
                                        <h4>Telegram sahifamiz</h4></div>
                                        <h5>Telegram sahifamizga obuna buling</h5>
                                        <a href="https://web.telegram.org/a/#-4599562772">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.telegram && (
                                    <button onClick={() => handleNextClick('telegram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.telegram && (
                                <div className="image-container">
                                    <img src={Scaner1} alt="Telegram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('telegram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={I} alt="" />
                                        <h4>Instgaram sahifamiz</h4></div>
                                        <h5>Instagram sahifamizga obuna buling</h5>
                                        <a href="https://www.instagram.com/hola.vachcha/">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.instagram && (
                                    <button onClick={() => handleNextClick('instagram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.instagram && (
                                <div className="image-container">
                                    <img src={Scaner2} alt="Instagram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('instagram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={F} alt="" />
                                        <h4>Facebok sahifamiz</h4></div>
                                        <h5>Facebok  sahifamizga obuna buling</h5>
                                        <a href="https://www.facebook.com/?locale=ru_RU">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.facebook && (
                                    <button onClick={() => handleNextClick('facebook')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.facebook && (
                                <div className="image-container">
                                    <img src={Scaner3} alt="Facebook" className="scaner-image" />
                                    <button onClick={() => handleBackClick('facebook')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={Y} alt="" />
                                        <h4>YouTube sahifamiz</h4></div>
                                        <h5>YouTube  sahifamizga obuna buling</h5>
                                        <a href="https://www.youtube.com/@HamrohBankUz">@Hamroh_BankUz</a>
                                    </div>
                                </div>
                                {!showImage.youtube && (
                                    <button onClick={() => handleNextClick('youtube')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.youtube && (
                                <div className="image-container">
                                    <img src={Scaner4} alt="YouTube" className="scaner-image" />
                                    <button onClick={() => handleBackClick('youtube')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>
                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                    <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={T} alt="" />
                                        <h4>Telegram sahifamiz</h4></div>
                                        <h5>Telegram sahifamizga obuna buling</h5>
                                        <a href="https://web.telegram.org/a/#-4599562772">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.telegram && (
                                    <button onClick={() => handleNextClick('telegram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.telegram && (
                                <div className="image-container">
                                    <img src={Scaner1} alt="Telegram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('telegram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={I} alt="" />
                                        <h4>Instgaram sahifamiz</h4></div>
                                        <h5>Instagram sahifamizga obuna buling</h5>
                                        <a href="https://www.instagram.com/hola.vachcha/">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.instagram && (
                                    <button onClick={() => handleNextClick('instagram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.instagram && (
                                <div className="image-container">
                                    <img src={Scaner2} alt="Instagram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('instagram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={F} alt="" />
                                        <h4>Facebok sahifamiz</h4></div>
                                        <h5>Facebok  sahifamizga obuna buling</h5>
                                        <a href="https://www.facebook.com/?locale=ru_RU">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.facebook && (
                                    <button onClick={() => handleNextClick('facebook')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.facebook && (
                                <div className="image-container">
                                    <img src={Scaner3} alt="Facebook" className="scaner-image" />
                                    <button onClick={() => handleBackClick('facebook')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={Y} alt="" />
                                        <h4>YouTube sahifamiz</h4></div>
                                        <h5>YouTube  sahifamizga obuna buling</h5>
                                        <a href="https://www.youtube.com/@HamrohBankUz">@Hamroh_BankUz</a>
                                    </div>
                                </div>
                                {!showImage.youtube && (
                                    <button onClick={() => handleNextClick('youtube')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.youtube && (
                                <div className="image-container">
                                    <img src={Scaner4} alt="YouTube" className="scaner-image" />
                                    <button onClick={() => handleBackClick('youtube')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>
                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                    <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={T} alt="" />
                                        <h4>Telegram sahifamiz</h4></div>
                                        <h5>Telegram sahifamizga obuna buling</h5>
                                        <a href="https://web.telegram.org/a/#-4599562772">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.telegram && (
                                    <button onClick={() => handleNextClick('telegram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.telegram && (
                                <div className="image-container">
                                    <img src={Scaner1} alt="Telegram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('telegram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={I} alt="" />
                                        <h4>Instgaram sahifamiz</h4></div>
                                        <h5>Instagram sahifamizga obuna buling</h5>
                                        <a href="https://www.instagram.com/hola.vachcha/">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.instagram && (
                                    <button onClick={() => handleNextClick('instagram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.instagram && (
                                <div className="image-container">
                                    <img src={Scaner2} alt="Instagram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('instagram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={F} alt="" />
                                        <h4>Facebok sahifamiz</h4></div>
                                        <h5>Facebok  sahifamizga obuna buling</h5>
                                        <a href="https://www.facebook.com/?locale=ru_RU">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.facebook && (
                                    <button onClick={() => handleNextClick('facebook')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.facebook && (
                                <div className="image-container">
                                    <img src={Scaner3} alt="Facebook" className="scaner-image" />
                                    <button onClick={() => handleBackClick('facebook')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={Y} alt="" />
                                        <h4>YouTube sahifamiz</h4></div>
                                        <h5>YouTube  sahifamizga obuna buling</h5>
                                        <a href="https://www.youtube.com/@HamrohBankUz">@Hamroh_BankUz</a>
                                    </div>
                                </div>
                                {!showImage.youtube && (
                                    <button onClick={() => handleNextClick('youtube')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.youtube && (
                                <div className="image-container">
                                    <img src={Scaner4} alt="YouTube" className="scaner-image" />
                                    <button onClick={() => handleBackClick('youtube')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>
                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                    <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={T} alt="" />
                                        <h4>Telegram sahifamiz</h4></div>
                                        <h5>Telegram sahifamizga obuna buling</h5>
                                        <a href="https://web.telegram.org/a/#-4599562772">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.telegram && (
                                    <button onClick={() => handleNextClick('telegram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.telegram && (
                                <div className="image-container">
                                    <img src={Scaner1} alt="Telegram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('telegram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={I} alt="" />
                                        <h4>Instgaram sahifamiz</h4></div>
                                        <h5>Instagram sahifamizga obuna buling</h5>
                                        <a href="https://www.instagram.com/hola.vachcha/">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.instagram && (
                                    <button onClick={() => handleNextClick('instagram')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.instagram && (
                                <div className="image-container">
                                    <img src={Scaner2} alt="Instagram" className="scaner-image" />
                                    <button onClick={() => handleBackClick('instagram')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={F} alt="" />
                                        <h4>Facebok sahifamiz</h4></div>
                                        <h5>Facebok  sahifamizga obuna buling</h5>
                                        <a href="https://www.facebook.com/?locale=ru_RU">@Hamroh_Bank</a>
                                    </div>
                                </div>
                                {!showImage.facebook && (
                                    <button onClick={() => handleNextClick('facebook')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.facebook && (
                                <div className="image-container">
                                    <img src={Scaner3} alt="Facebook" className="scaner-image" />
                                    <button onClick={() => handleBackClick('facebook')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>

                        <div className="item">
                            <div className="item-old">
                                <div className="item-old-text">
                                <div className="item-old-text-child">
                                        <div className="nex"><img className='img' src={Y} alt="" />
                                        <h4>YouTube sahifamiz</h4></div>
                                        <h5>YouTube  sahifamizga obuna buling</h5>
                                        <a href="https://www.youtube.com/@HamrohBankUz">@Hamroh_BankUz</a>
                                    </div>
                                </div>
                                {!showImage.youtube && (
                                    <button onClick={() => handleNextClick('youtube')}>
                                        <img src={next} alt="Next" />
                                    </button>
                                )}
                            </div>

                            {showImage.youtube && (
                                <div className="image-container">
                                    <img src={Scaner4} alt="YouTube" className="scaner-image" />
                                    <button onClick={() => handleBackClick('youtube')} className="back-button"><img src={next2} alt="" /></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;