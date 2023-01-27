import StyledBanner from "./StyledBanner"

function Banner() {
    return (<StyledBanner>
        <h2>Já sabe por onde começar?</h2>
        <p id="banner-text">Encontre na nossa estante o que você precisa para o seu desenvolvimento!</p>
        <input type="text" aria-labelledby="banner-text" placeholder="🔍 Qual será sua próxima leitura?"/>
    </StyledBanner>)
}

export default Banner