import React from "react";
import { Checkbox } from "antd";
import { StyledCol } from "../styled";
import { data } from "../Projects/data";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

interface CheckBoxProps {
    setCheckedValue: React.Dispatch<React.SetStateAction<CheckboxValueType[]>>;
}

const CheckBoxes: React.FC<CheckBoxProps> = ({ setCheckedValue }) => {
    const onChange = (checkedValues: CheckboxValueType[]) => {
        setCheckedValue(checkedValues);
    };

    return (
        <>
            <Checkbox.Group
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    color: "#fefefe",
                    marginLeft: "30px",
                }}
                onChange={onChange}
            >
                {data.map((item: any) => {
                    return (
                        <StyledCol span={24} key={item.id}>
                            <Checkbox value={item.value}>{item.name}</Checkbox>
                        </StyledCol>
                    );
                })}
            </Checkbox.Group>
        </>
    );
};

export default CheckBoxes;
