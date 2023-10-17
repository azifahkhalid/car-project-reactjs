import React from "react";
import { carContainer, imageContainer } from "../../styles/componentStyle";

export const CarContent = (props) => {
    const { value, data } = props

    const selectedCar = 
        data &&
        data.filter(
            function(obj) {
                return obj.carType == value?.code;
          });

    return (
    <> 
        {
            selectedCar && selectedCar.map((obj) => {
                return (
                    <div key={obj?.code} style={carContainer}>
                        <div style={{textAlign: "left"}}>
                            <div>Type: {value?.type}</div>
                            <div>Brand: {obj?.brand}</div>
                            <div>Model: {obj?.model}</div>
                            <div>Features: </div>
                            <ul>
                            {
                                obj?.feature.map((obj) => {
                                    return (
                                        <li key={obj}>{obj}</li>
                                   )
                               })
                            }
                            </ul>
                        </div>
                        <img style={imageContainer} src={obj.image} />
                    </div>
                )
            }) 
        }
    </>
    )
}