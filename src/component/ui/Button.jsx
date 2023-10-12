import React from "react";
import styled from "styled-components";


//styled 버튼을 사용해서 StyledButton 컴포넌트 만듬
const StyledButton = styled.button`
    padding : 8px 16px;
    font-size: 16px;
    border-wdith : 1px;
    border-radius: 8px;
    cursor: pointer;
`;

//Button 함수 컴퍼넌트
function Button(props) {
    const {title, onClick} = props;
    
    return (
        // Click 이벤트를 상위에서 처리 할수 있도록 (상속의 개념)
        // props 로 받은 title 이 버튼 목록에 표시 될수 있게 
        <StyledButton onClick={onClick}> {title || "button"} </StyledButton>
    );
}

export default Button; 