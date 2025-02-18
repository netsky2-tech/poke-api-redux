import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokeCard = () => {
    return(
        <Card 
            title="Ditto"
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"></img>}
            extra={<StarOutlined />}
        >
            <Meta description="Fire type"></Meta>
        </Card>
    )
}

export { PokeCard }