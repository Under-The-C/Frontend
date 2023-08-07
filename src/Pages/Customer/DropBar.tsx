import React, { useState } from 'react';
import styled from "styled-components";
import { Button as BootstrapButton, Dropdown, FormControl} from "react-bootstrap";

const CustomDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #28a745;
  border-color: #28a745;
  width: 100%;
  margin-bottom:1vw;
  margin-left: 1vh;
`;

const CustomFormControl = styled(FormControl)`
  width: 100%;
`;
export const DropBar = () => {

const [quantity, setQuantity] = useState(1);
const [area, setArea] = useState("도서산간지역을 선택하세요");

return (
        <>
            <Dropdown>
             <CustomDropdownToggle id="dropdown-basic">
                구매옵션
             </CustomDropdownToggle>
                <Dropdown.Menu>
                        <Dropdown.Header>도서산간지역 선택</Dropdown.Header>
                        <Dropdown.Item onClick={() => setArea("기본")}>기본배송지역</Dropdown.Item>
                        <Dropdown.Item onClick={() => setArea("도서산간지역")}>도서산간지역</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Header>수량 선택</Dropdown.Header>
                        <CustomFormControl
                        type="number"
                        placeholder="수량을 입력하세요"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                </Dropdown.Menu>
            </Dropdown>

        </>
    )

}