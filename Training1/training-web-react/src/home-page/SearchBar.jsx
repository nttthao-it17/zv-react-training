import { Button, DatePicker } from "antd";
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
    return (
        <div className="form-search">
            <form className="form-control">
                <div className="place-input">
                    <label>Địa điểm</label>
                    <input type='text' placeholder='Bạn sắp đi đâu?'
                        style={{ border: "none" }}
                    />
                </div>

                <div className="date-input">
                    <label>Ngày</label>
                    <DatePicker
                        picker="week"
                        placeholder='Thêm thời điểm bạn muốn tham gia'
                        style={{ width: "245px", border: "none", padding: 0 }}
                    />
                </div>
                <Button type='submit' value='Search' icon={<SearchOutlined />} />
            </form>
        </div>
    )
};

export default SearchBar;