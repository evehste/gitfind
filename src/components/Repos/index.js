import './styles.css';
import ItemList from "./ItemList/index";

const Repos = ({data}) => {
    return (
        <>
            <div>
                <h4 className="repository">Repositórios</h4>
            </div>
            {
                data.map((item, i) => <ItemList title={item.name} description={item.description} key={i} />)
            }
        </>
    )
}

export default Repos;