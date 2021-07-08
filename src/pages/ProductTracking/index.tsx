import React from 'react';
import { DatePicker } from 'jalali-react-datepicker';
import styled from 'styled-components';
const StyleParent=styled.div`
    line-height: 60px;
    padding: 44px;
`
const Index: React.FC = () => {
    return (
        <StyleParent className="font">
            <h3>پیگیری مرسوله</h3>
            <h3>تاریخ ارسال مرسوله</h3>

            <div>
                <DatePicker label="تاریخ :" />
            </div>
        </StyleParent>
    );
};

export default Index;
