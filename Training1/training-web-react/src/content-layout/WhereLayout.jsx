const anywhereData = [
    {
        img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg",
        contents: "Nơi nghỉ dưỡng ngoài trời"
    }, {
        img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg",
        contents: "Chỗ ở độc đáo"
    }, {
        img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg",
        contents: "Toàn bộ nhà"
    }, {
        img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg",
        contents: "Cho phép mang thú cưng"
    }
]

const AnywherePlace = (props) => {
    return (
        <div>
            <a href="#">
                <img
                    src={props.img}
                    width='262'
                    height='262'
                    style={{ borderRadius: '7px' }}
                />
                <h3 style={{ fontSize: "13pt" }}>{props.contents}</h3>
            </a>
        </div>
    )
}

const WhereLayout = () => {
    return (
        <div className="flex-container">
            {
                anywhereData.map(item => {
                    return (
                        <AnywherePlace
                            img={item.img}
                            contents={item.contents}
                        />
                    )
                })
            }
        </div>
    )
}

export default WhereLayout;