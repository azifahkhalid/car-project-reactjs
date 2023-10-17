import React, { useState } from "react";
import { Dropdown } from "../common-component/dropdown";
import { carList, carType } from "../../mockData/carMockData";
import { CarContent } from "./carContent";
import { contentContainer, dashboardTitle } from "../../styles/componentStyle";

export const Dashboard = () => {

    const [type, setType] = useState(null)

    return (
        <div style={contentContainer}>
            <div style={dashboardTitle}>
                <div>Find A Car</div>
            </div>
            <Dropdown
                placeholder={'Select Car Type'}
                data={carType} 
                value={type} 
                onChange={setType}
            />
            {    
                type &&
                <CarContent 
                    value={type}
                    data={carList}
                />
            }
        </div>
    )
}