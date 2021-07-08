import styled from 'styled-components';

const StyledButton = styled.button<{ styleType: string }>`
    border: none;
    outline: none;
    color: ${(props) => (props.styleType === 'primary' ? '#1EB441' : '#C81818')};
    border-radius: 5px;
    display: inline-block;
    padding: 1px 2px;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
`;

interface ButtonProps {
    title: string;
    styleType: string;
}

const Button: React.FC<ButtonProps> = ({ title, styleType }) => {
    return (
        <StyledButton type="submit" className="btn" styleType={styleType}>
            {title}
        </StyledButton>
    );
};

export default Button;
