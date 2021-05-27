const discoverData = [
    {
        imgDiscover: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg",
        title: "Bộ sưu tập nổi bật: Phiêu du",
        subTitle: "Du lịch tại nhà với Trải nghiệm trực tuyến."
    }, {
        imgDiscover: "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg",
        title: "Trải nghiệm trực tuyến",
        subTitle: "Các hoạt động tương tác, truyền trực tiếp dưới sự dẫn dắt của Người tổ chức."
    }, {
        imgDiscover: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg",
        title: "Trải nghiệm",
        subTitle: "Những điều nên trải nghiệm của địa phương, dù bạn đang ở bất cứ đâu."
    }
]

const Discover = (props) => {
    return (
        <div className='discover-container'>
            <a href='#'>
                <img
                    src={props.imgDiscover}
                    width="340"
                    height="340"
                    style={{ borderRadius: "7px" }}
                />
                <div className='discover-title'>{props.title}</div>
                <div>{props.subTitle}</div>
            </a>
        </div>
    )
}

const DiscoverLayout = () => {
    return (
        <div className='flex-discover'>
            {
                discoverData.map(item => {
                    return (
                        <Discover
                            imgDiscover={item.imgDiscover}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    )
                })
            }
        </div>
    )
}

export default DiscoverLayout;