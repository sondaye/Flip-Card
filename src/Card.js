/**@jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { useState } from 'react';

const CardStyle = css`
    margin: 100px auto 0;
    width: 400px;
    height: 600px;
    perspective: 1000px;
    &:hover{
        transform: scale(0.9);
    }
    transition: 0.5s;
`;

const CardInner = props => css`
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    border: 1px solid black;
    transform: ${props.flipped ? "rotateY(180deg)" : "none"};
`;

const CardFace = css`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
`;

const CardFront = css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: green;
`;

const CardBack = css`
    background: red;
    transform: rotateY(180deg);
`;

const cardHeader = css`
    position: reative;
    padding: 30px 30px 40px;
    &:after{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }
`;

function Card(){
    const [flipped, setFlipped] = useState(false);
    const handleFlip = () => {
        setFlipped((current) => !current);
        console.log(flipped);
    }
    return(
        <div className="card" css={CardStyle}>
            <div className="card-inner" css={CardInner({flipped})} onClick={handleFlip}>
                <div className="card-front" css={[CardFace, CardFront]}>
                    <h2>Card Front</h2>
                </div>
                <div className="card-back" css={[CardFace, CardBack]}>
                    <div className="card-content">
                        <div className="card-header" css={cardHeader}>
                            <h3>Card Back title</h3>
                        </div>
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;