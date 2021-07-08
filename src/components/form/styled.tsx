import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transform: scaleY(1.1);
    text-align-last: center;
    padding: 6em 6em;
    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Input = styled.input`
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 15px;
    padding: 6px;
    height: 25px;
    width: 250px; // ...existing styles
    outline: none;
    margin-top: 10px;
`;

// export const StyledInput = styled(Input)`
// border-color:red;
// `

export const TextArea = styled.textarea`
    display: inline-block;
    width: 100%;
    border: 1px solid #dedede;
    border-radius: 15px;
    padding: 6px;
    // ...existing styles
    outline: none;
    width: 250px;
    vertical-align: middle;
    height: 85px;
    margin-top: 10px;
`;

export const Label = styled.label`
    display: inline-block;
    font-size: 1.1em;
    width: 190px;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    width: 50%;
    padding: 10px;
`;
export const Select = styled.select`
    // Additional resets for further consistency
    background-color: transparent;
    border: 1px solid gray;
    padding: 3px;
    border-radius: 25px;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    width: 250px;
    align-items: center; // ...existing styles
    outline: none;
    margin-top: 10px;

    :after {
        // ...existing styles
        justify-self: end;
    }
`;
export const StyledBTn = styled.button<{ StyleCl: string }>`
    /* background-image: linear-gradient(#8f65f6, #7b4af1); */
    color: ${(props) => (props.StyleCl === 'primary' ? '#ffffff' : '#2c2c2c')};
    background-color: ${(props) => (props.StyleCl === 'primary' ? '#8f65f6' : '#d8d8d8')};
    outline: none;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    height: 27px;
    width: 100px;
    margin: 2px;
`;
export const ParentStyle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 33px 86px;
`;
export const ParDate = styled.div`
    padding: 25px;
    margin-right: 184px;
   input{
    direction: ltr;
    width: 250px;
    border-radius: 25px;
    padding: 4px;
    border: 1px solid #d1cdcd;
   }
`;
