import styled from 'styled-components';
const StyleRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 35px;
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
const StyleCateg = styled.select`
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
    cursor: pointer;
    margin: 25px;
`;

const BtnCategSearch = () => {
    return (
        <StyleRow>
            <StyleSearch
                className="font"
                type="search"
                id="site-search"
                name="q"
                placeholder="جستجو در محصولات"
            />
            <StyleCateg className="font" id="site-select" name="se" placeholder="دسته بندی محصولات">
                <option value="optionA">دسته بندی محصولات</option>
                <option value="optionB">Option B</option>
                <option value="optionC">Option C</option>
            </StyleCateg>

            <StyledBTn className="font">افزودن محصول</StyledBTn>
        </StyleRow>
    );
};

export default BtnCategSearch;
