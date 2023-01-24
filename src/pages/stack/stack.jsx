import "./stack.css"

import { Tooltip } from '@mantine/core';
import JavaIcon from "../../assets/java.png"
import JsIcon from "../../assets/javascript.png"
import NodeIcon from "../../assets/nodejs.png"
import ReactIcon from "../../assets/react.png"
import RqIcon from "../../assets/reactquery.png"
import RecoilIcon from "../../assets/recoil.jpg"
import sqlIcon from "../../assets/sql.png"
import MongoIcon from "../../assets/mongo.jpg"

const Stack = () => {
    return (
        <div id="stuck">
            <h1 className="firstTitle">
                My Tech Stack
            </h1>
            <h2 className="secondTitle">
                Technologies I’ve been working with recently
            </h2>
            <div className='stackBody' >
                <Tooltip label="java">
                    <img src={JavaIcon} />
                </Tooltip>
                <Tooltip label="javaScript">
                    <img src={JsIcon} />
                </Tooltip>
                <Tooltip label="node js">
                    <img src={NodeIcon} />
                </Tooltip>
                <Tooltip label="react js">
                    <img src={ReactIcon} />
                </Tooltip>
                <Tooltip label="react query">
                    <img src={RqIcon} />
                </Tooltip>
                <Tooltip label="recoil">
                    <img src={RecoilIcon} />
                </Tooltip>
                <Tooltip label="SQL">
                    <img src={sqlIcon} />
                </Tooltip>
                <Tooltip label="MongoDB">
                    <img src={MongoIcon} />
                </Tooltip>
            </div>
        </div>
    )
}
export default Stack