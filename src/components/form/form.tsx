import { DatePicker } from 'jalali-react-datepicker';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    StyledForm,
    FormGroup,
    Label,
    Input,
    TextArea,
    Select,
    StyledBTn,
    ParentStyle,
    ParDate
} from './styled';
// import Button from '../button/button'

interface FormProps {
    inputs: { label: string; type: string; placeholder: string; name: string }[];

    onSubmit: (payload: Object) => void;
    buttons: { title: string; cssClass: string; icon?: any; route?: any }[];
}

const Form: React.FC<FormProps> = ({ inputs, onSubmit, buttons }) => {
    const [selectValue, setSelectValue] = useState<string>('optionA');
    const [fields, setFields] = useState(Object);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFields({ ...fields, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(fields);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            {inputs.map((input) => (
                <FormGroup>
                    <Label>{input.label}</Label>
                    {(() => {
                        switch (input.type) {
                            case 'file':
                                return <input type="file" placeholder={input.placeholder} />;
                            case 'date':
                                return (
                                    <ParDate>
                                        {' '}
                                        <DatePicker />
                                    </ParDate>
                                );
                            case 'textarea':
                                return <TextArea placeholder={input.placeholder} />;
                            case 'select':
                                return (
                                    <Select
                                        value={selectValue}
                                        onBlur={(ev: React.ChangeEvent<HTMLSelectElement>): void =>
                                            setSelectValue(ev.target.value)
                                        }>
                                        <option value="optionA">Option A</option>
                                        <option value="optionB">Option B</option>
                                        <option value="optionC">Option C</option>
                                    </Select>
                                );

                            default:
                                return (
                                    <Input
                                        name={input.name}
                                        onChange={handleChange}
                                        value={fields[input.name]}
                                        placeholder={input.placeholder}
                                        type={input.type}
                                    />
                                );
                        }
                    })()}
                </FormGroup>
            ))}
            {/* <StyledBTn title="Submit" /> */}
            <ParentStyle>
                {buttons.map((btn) => {
                    return (
                        <Link to={btn.route}>
                            <StyledBTn className="font" StyleCl={btn.cssClass}>
                                {btn.title}
                            </StyledBTn>
                        </Link>
                    );
                })}
            </ParentStyle>
        </StyledForm>
    );
};

export default Form;
