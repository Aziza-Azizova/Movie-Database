import tg from '@i/icons/tg.svg';
import vk from '@i/icons/vk.svg';
import fb from '@i/icons/fb.svg';
import insta from '@i/icons/insta.svg';
import tt from '@i/icons/tt.svg';
import yt from '@i/icons/yt.svg';
import tw from '@i/icons/tw.svg';
import lin from '@i/icons/in.svg';
import { Link } from 'react-router-dom';

function Footer() {
    const icons = [tg, vk, fb, insta, tt, yt, tw, lin]
    return (
        <div className="footer">
            <div className="footer__icons">
                {
                    icons.map((icon: any, i: number) => {
                        return <img src={icon} alt="icon" key={i} />
                    })
                }
            </div>
            <div className='footer__content'>
                <p>© 2024 CINEPHILE. Может содержать информацию, не предназначенную для несовершеннолетних</p>
                <p>Данные получены с сайта <Link to="https://www.themoviedb.org/">themoviedb.org</Link></p>
            </div>
        </div>
    )
}

export default Footer