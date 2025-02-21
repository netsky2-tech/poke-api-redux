import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";


const PokeCard = ({ name, image, types, id, favorite }) => {

    const typesString = types.map(elem => elem.type.name).join(', ')

    const dispatch = useDispatch()

    const handleOnClick = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }
    return(
        <Card 
            title={name}
            key={name}
            cover={<img src={image} alt={name}></img>}
            extra={<StarButton isFavorite={favorite} onClick={handleOnClick} />}
        >
            <Meta description={typesString}></Meta>  
        </Card>
    )
}

export { PokeCard }