import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokeCard = ({ name, image, types }) => {
    return(
        <Card 
            title={name}
            key={name}
            cover={<img src={image} alt={name}></img>}
            extra={<StarOutlined />}
        >
            Types:
            {types.map((type) => {
                return <Meta description={type.type.name}></Meta>
            })}   
        </Card>
    )
}

export { PokeCard }