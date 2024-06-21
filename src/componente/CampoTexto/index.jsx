import styled from "styled-components"
import lupaImg from "./lupa.png"

const DivEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const InputEstilizado = styled.input`
  height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 602px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    left: 814px;
    gap: 365px;
`;

const LupaIcon = styled.img`
  position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;

const CampoTexto = ({ setFiltro }) => {
    return (
        <DivEstilizado>
            <InputEstilizado
                onChange={(evento) => { setFiltro(evento.target.value) }} type="text" placeholder="O que você procura?">
            </InputEstilizado>

            <LupaIcon
                src={lupaImg} alt="Lupa">
            </LupaIcon>
        </DivEstilizado>
    )
}

export default CampoTexto;