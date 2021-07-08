import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyleRow = styled.div`
    display: flex;
    padding: 35px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
`;

const StyleSearch = styled.input`
    width: 320px;
    height: 45px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 3px 6px grey;
    padding: 5px 21px;
    outline: none;
    margin: 25px;

    &:focus {
        border: 1px solid #afafaf;
    }
`;
const StyledBTn = styled.button`
    background-image: linear-gradient(#8f65f6, #7b4af1);
    width: 200px;
    height: 59px;
    outline: none;
    border: none;
    border-radius: 7px;
    color: white;
    margin: 25px;

    cursor: pointer;
`;
const StyleIcon = styled.span`
    font-size: 16;
    padding: 5px;
`;
interface DataProps {
    dataButtons: { icon: any; title: string; route: string };
}

const Dashboard: React.FC<DataProps> = ({ dataButtons }) => {
    return (
        <StyleRow>
            <StyleSearch
                className="font"
                type="search"
                id="site-search"
                name="q"
                placeholder="جستجو در محصولات"
            />
            <Link to={dataButtons.route}>
                <StyledBTn className="font">
                    <StyleIcon>{dataButtons.icon}</StyleIcon>
                    {dataButtons.title}
                </StyledBTn>
            </Link>
        </StyleRow>
    );
};

export default Dashboard;
