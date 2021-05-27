import 'antd/dist/antd.css';
import { GlobalOutlined, FacebookFilled, TwitterSquareFilled, InstagramFilled } from '@ant-design/icons';
import { FooterStyled } from './styled';

const Footer = () => {
    return (
        <footer>
            <FooterStyled>
                <div className='footer-container'>
                    <div className='main-menu-footer'>
                        <div className='menu-footer'>
                            <h4>GIỚI THIỆU</h4>
                            <ul className='listul'>
                                <li><a href='#'>Phương thức hoạt động của Airbnb</a></li>
                                <li><a href='#'>Trang tin tức</a></li>
                                <li><a href='#'>Nhà đầu tư</a></li>
                                <li><a href='#'>Airbnb Plus</a></li>
                                <li><a href='#'>Airbnb Luxe</a></li>
                                <li><a href='#'>HotelTonight</a></li>
                                <li><a href='#'>Airbnb for Work</a></li>
                                <li><a href='#'>Nhờ có Host, mọi điều đều có thể</a></li>
                                <li><a href='#'>Cơ hội nghề nghiệp</a></li>
                                <li><a href='#'>Thư của nhà sáng lập</a></li>
                            </ul>
                        </div>
                        <div className='menu-footer'>
                            <h4>CỘNG ĐỒNG</h4>
                            <ul className='listul'>
                                <li><a href='#'>Sự đa dạng và Cảm giác thân thuộc</a></li>
                                <li><a href='#'>Tiện nghi phù hợp cho người khuyết tật</a></li>
                                <li><a href='#'>Đối tác liên kết Airbnb</a></li>
                                <li><a href='#'>Chỗ ở cho tuyến đầu</a></li>
                                <li><a href='#'>Chỗ ở cho tuyến đầu</a></li>
                                <li><a href='#'>Airbnb.org</a></li>
                            </ul>
                        </div>
                        <div className='menu-footer'>
                            <h4>ĐÓN TIẾP KHÁCH</h4>
                            <ul className='listul'>
                                <li><a href='#'>Cho thuê nhà</a></li>
                                <li><a href='#'>Tổ chức Trải nghiệm trực tuyến</a></li>
                                <li><a href='#'>Tổ chức trải nghiệm</a></li>
                                <li><a href='#'>Đón tiếp khách có trách nhiệm</a></li>
                                <li><a href='#'>Trung tâm tài nguyên</a></li>
                                <li><a href='#'>Trung tâm cộng đồng</a></li>
                            </ul>
                        </div>
                        <div className='menu-footer'>
                            <h4>HỖ TRỢ</h4>
                            <ul className='listul'>
                                <li><a href='#'>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</a></li>
                                <li><a href='#'>Trung tâm trợ giúp</a></li>
                                <li><a href='#'>Các tùy chọn hủy</a></li>
                                <li><a href='#'>Hỗ trợ khu dân cư</a></li>
                                <li><a href='#'>Tin cậy và an toàn</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-ref'>
                        <div className='option-footer'>
                            <ul className='listul'>
                                <li>© 2021 Airbnb, Inc.</li>
                                <li><a href='#'>Quyền riêng tư</a></li>
                                <li><a href='#'>Điều khoản</a></li>
                                <li><a href='#'>Sơ đồ trang web</a></li>
                            </ul>
                        </div>
                        <div className='icon-footer'>
                            <div><a href=''><GlobalOutlined /> Tiếng Việt (VN)</a></div>
                            <div><a href=''>$ USD</a></div>
                            <div className='icon'><a href=''><FacebookFilled /></a></div>
                            <div className='icon'><a href=''><TwitterSquareFilled /></a></div>
                            <div className='icon'><a href=''><InstagramFilled /></a></div>
                        </div>
                    </div>
                </div>
            </FooterStyled>

        </footer>
    )
}

export default Footer;