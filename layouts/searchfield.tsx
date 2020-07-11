import { Input } from 'antd';
import { Row } from 'antd'
import { ChangeEvent } from 'react';
const { Search } = Input;

interface ISearchField {
    handleSearch: (value: ChangeEvent<HTMLInputElement> | string) => {},
    handleChange: (value: ChangeEvent<HTMLInputElement> | string) => {}
}
const SearchField: React.FC<ISearchField> = ({ handleSearch, handleChange }): JSX.Element => {
    return (
        <Row style={{
            width: '100vw',
            background: 'white',
            marginLeft: '-50px',
            padding: '50px',
            paddingTop: '60px',
            marginBottom: '50px',
            minHeight: '12rem'
        }}
            justify="center">

            <Search
                placeholder="Search for a Hospital"
                style={{ maxWidth: '77%' }}
                onChange={e => handleChange(e.target.value)}
                onSearch={value => handleSearch(value)}
                allowClear
                enterButton />
        </Row>
    )
}


export default SearchField