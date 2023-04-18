import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import Images from "./images";
function MasonryGallery() {
    const Images=[
        {
            id:0,
            img:require('../src/images/animals/A1.jpg')},
            {
                id:1,
                img:require('../src/images/birds/B1.jpg')
            }
    ]

    return (<div className="images" style={{ padding: "10px" }}>


        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry gutter="20px">
                <img src={Images.img} alt=""/>
                {/* <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.img} alt="" /> */}
                {/* <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a4} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a2} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a3} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a5} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a6} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a7} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a8} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.animal.a9} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b1} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b2} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b3} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b4} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b5} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b6} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b7} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b8} alt="" />
                <img style={{ borderRadius: "15px", width: "100%", height: "80%", display: "block" }} src={Images.birds.b9} alt="" /> */}
            </Masonry>
        </ResponsiveMasonry>
    </div>)
}
export default MasonryGallery;