import {Link} from 'react-router-dom';
import './erro.css';

function Erro() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Page is not found!</h2>
            <Link to="/">Clique aqui para ver os filmes em cartaz!</Link>
        </div>
    )
}

export default Erro;