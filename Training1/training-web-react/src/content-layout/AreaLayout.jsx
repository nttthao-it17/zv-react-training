const areaData = [
    {
        imgURL: "https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg",
        cityName: "Thành phố Hồ Chí Minh",
        timer: "15 phút lái xe",
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/ac2086c9-df0d-4085-94c0-94fe3fb94862.jpg",
        cityName: "Thành phố Pleiku",
        timer: "7,5 giờ lái xe",
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg",
        cityName: "Cần Thơ",
        timer: "3 giờ lái xe",
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg",
        cityName: "Nha Trang",
        timer: "6,5 giờ lái xe",
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg",
        cityName: "Phú Quốc"
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg",
        cityName: "Thành phố Tuy Hòa",
        timer: "7,5 giờ lái xe"
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg",
        cityName: "Thành phố Biên Hòa",
        timer: "45 phút lái xe"
    }, {
        imgURL: "https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg",
        cityName: "Thị xã Thuận An",
        timer: "30 phút lái xe",
    }
]

const AreaFlex = (props) => {
    return (
        <div className='area-container'>
            <a href="#">
                <img
                    src={props.imgURL}
                    width="60"
                    height="58"
                    style={{ borderRadius: '9px' }}
                />
                <div className='title-area'>
                    <div><strong>{props.cityName}</strong></div>
                    <div>{props.timer}</div>
                </div>
            </a>
        </div>
    )
}

const AreaLayout = () => {
    return (
        <div className='flex-area-flex'>
            {
                areaData.map(item => {
                    return (
                        <AreaFlex
                            imgURL={item.imgURL}
                            cityName={item.cityName}
                            timer={item.timer}
                        />
                    )
                })
            }
        </div>
    )
}

export default AreaLayout;