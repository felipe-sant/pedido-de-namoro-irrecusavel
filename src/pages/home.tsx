import geraPosicao from "../functions/geraPosicao";

function Home() {
    function desvia() {
        const recusar = document.getElementById('recusar');
        if (!recusar) return;
        recusar.style.position = 'absolute';
        recusar.style.left = geraPosicao(10, 90);
        recusar.style.top = geraPosicao(10, 90);
    }

    function sim() {
        alert("Você aceitou namorar comigo! :)");
        window.location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
    }

    return (
        <main id="conteudo">
            <h1>Aceita namorar comigo?</h1>
            <div className="botoes">
                <button className="btn acc" onClick={sim}>Sim ❤️</button>
                <button className="btn rec" id="recusar" onMouseOver={desvia} onClick={desvia}>Não 💔</button>
            </div>
        </main>
    )
}

export default Home