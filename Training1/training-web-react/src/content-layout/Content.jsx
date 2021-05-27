import 'antd/dist/antd.css';
import { ContentStyled } from './styled';
import { Button } from 'antd';

import AreaLayout from './AreaLayout';
import WhereLayout from "./WhereLayout";
import DiscoverLayout from './DiscoverLayout';

const ContentLayout = () => {
    return (
        <div className='content' style={{ width: "100%" }}>
            <ContentStyled>
                <div className='near-area' >
                    <h1 className='title-part'>Khám phá những điểm đến gần đây</h1>
                    <AreaLayout />
                </div>
                <div className='anywhere'>
                    <h1 className='title-part'>Ở bất cứ đâu</h1>
                    <WhereLayout />
                </div>
                <div className="host-coming">
                    <img
                        src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg"
                        width="100%"
                        height="100%"
                    />
                    <div className="description-img">
                        <div className='title-des'>Trở thành Chủ nhà</div>
                        <div className='suptitle-des'>Kiếm thêm thu nhập và khám phá các cơ hội mới bằng cách chia sẻ nơi ở của bạn.</div>
                        <Button>Tìm hiểu thêm</Button>
                    </div>
                </div>
                <div className="discover">
                    <div className="title">
                        <div className='title-part'>Khám phá trải nghiệm</div>
                        <div style={{ fontSize: '18pt' }}>Các hoạt động độc đáo với các chuyên gia địa phương – tham gia trực tiếp hoặc trực tuyến.</div>
                    </div>
                    <DiscoverLayout />
                </div>
            </ContentStyled>
        </div>
    )
}

export default ContentLayout;