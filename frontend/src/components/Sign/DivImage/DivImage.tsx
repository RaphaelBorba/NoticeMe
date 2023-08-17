import login from '../../../assets/images/imagemLogin.png'
import { DivImageCss } from './style';

export default function DivImage() {

    return (
        <DivImageCss>
            <img src={login} alt={login} />
            <span>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable. </span>
        </DivImageCss>
    );
}