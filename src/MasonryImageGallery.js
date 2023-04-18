import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import './assets/CSS/style.css'



function MasonryImageGallery() {
    const Photos = [
        {
            id: "0",
            name: "monkey",
            type: "animal",
            img_url: require('../src/images/animals/A1.jpg')

        },
        {
            id: "1",
            name: "bird",
            type: "bird",
            img_url: require('../src/images/birds/B1.jpg')

        },
        {
            id: "2",
            name: "pink petaled flower",
            type: "flower",
            img_url: require('../src/images/flower/F1.jpg')

        },
        {
            id: "3",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H1.jpg')

        },
        {
            id: "4",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M1.jpg')

        },
        {
            id: "5",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S1.jpg')

        },
        {
            id: "6",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W1.jpg')

        },
        {
            id: "7",
            name: "elephant",
            type: "animal",
            img_url: require('../src/images/animals/A2.jpg')

        },
        {
            id: "8",
            name: "Blue Bird",
            type: "bird",
            img_url: require('../src/images/birds/B2.jpg')

        },
        {
            id: "9",
            name: "white daisy",
            type: "flower",
            img_url: require('../src/images/flower/F2.jpg')

        },
        {
            id: "10",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H2.jpg')

        },
        {
            id: "11",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M2.jpg')

        },
        {
            id: "12",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S2.jpg')

        },
        {
            id: "13",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W2.jpg')

        },
        {
            id: "14",
            name: "giraffe",
            type: "animal",
            img_url: require('../src/images/animals/A3.jpg')

        },
        {
            id: "15",
            name: "eagle",
            type: "bird",
            img_url: require('../src/images/birds/B3.jpg')

        },
        {
            id: "16",
            name: "red and white petaled flower",
            type: "flower",
            img_url: require('../src/images/flower/F3.jpg')

        },
        {
            id: "17",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H3.jpg')

        },
        {
            id: "18",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M3.jpg')

        },
        {
            id: "19",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S3.jpg')

        },
        {
            id: "20",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W3.jpg')

        },
        {
            id: "21",
            name: "raccoon",
            type: "animal",
            img_url: require('../src/images/animals/A4.jpg')

        },
        {
            id: "22",
            name: "bird",
            type: "bird",
            img_url: require('../src/images/birds/B4.jpg')

        },
        {
            id: "23",
            name: "pink petaled flower",
            type: "flower",
            img_url: require('../src/images/flower/F4.jpg')

        },
        {
            id: "24",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H4.jpg')

        },
        {
            id: "25",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M4.jpg')

        },
        {
            id: "26",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S4.jpg')

        },
        {
            id: "27",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W4.jpg')

        },
        {
            id: "28",
            name: "Lion",
            type: "animal",
            img_url: require('../src/images/animals/A5.jpg')

        },
        {
            id: "29",
            name: "sparrow",
            type: "bird",
            img_url: require('../src/images/birds/B5.jpg')

        },
        {
            id: "30",
            name: "white and pink petaled flower",
            type: "flower",
            img_url: require('../src/images/flower/F5.jpg')

        },
        {
            id: "31",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H5.jpg')

        },
        
        {
            id: "32",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M5.jpg')

        },
        {
            id: "33",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S5.jpg')

        },
        {
            id: "34",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W5.jpg')

        },
        {
            id: "35",
            name: "deer",
            type: "animal",
            img_url: require('../src/images/animals/A6.jpg')

        },
        {
            id: "36",
            name: "macaw",
            type: "bird",
            img_url: require('../src/images/birds/B6.jpg')

        },
        {
            id: "37",
            name: "sakura flower",
            type: "flower",
            img_url: require('../src/images/flower/F6.jpg')

        },
        {
            id: "38",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H6.jpg')

        },
        {
            id: "39",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M6.jpg')

        },
        {
            id: "40",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S6.jpg')

        },
        {
            id: "41",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W6.jpg')

        },
        {
            id: "42",
            name: "dog",
            type: "animal",
            img_url: require('../src/images/animals/A7.jpg')

        },
        {
            id: "43",
            name: "bird",
            type: "bird",
            img_url: require('../src/images/birds/B7.jpg')

        },
        {
            id: "44",
            name: "dahlia flower",
            type: "flower",
            img_url: require('../src/images/flower/F7.jpg')

        },
        {
            id: "45",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H7.jpg')

        },
        {
            id: "46",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M7.jpg')

        },
        {
            id: "47",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S7.jpg')

        },
        {
            id: "48",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W7.jpg')

        },
        {
            id: "49",
            name: "tiger",
            type: "animal",
            img_url: require('../src/images/animals/A8.jpg')

        },
        {
            id: "50",
            name: "birds",
            type: "bird",
            img_url: require('../src/images/birds/B8.jpg')

        },
        {
            id: "51",
            name: "sunflower",
            type: "flower",
            img_url: require('../src/images/flower/F8.jpg')

        },
        {
            id: "52",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H8.jpg')

        },
        {
            id: "53",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M8.jpg')

        },
        {
            id: "54",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S8.jpg')

        },
        {
            id: "55",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W8.jpg')

        },
        {
            id: "56",
            name: "fox",
            type: "animal",
            img_url: require('../src/images/animals/A9.jpg')

        },
        {
            id: "57",
            name: "birds",
            type: "bird",
            img_url: require('../src/images/birds/B9.jpg')

        },
        {
            id: "58",
            name: "rose",
            type: "flower",
            img_url: require('../src/images/flower/F9.jpg')

        },
        {
            id: "59",
            name: "home",
            type: "house",
            img_url: require('../src/images/house/H9.jpg')

        },
        {
            id: "60",
            name: "boy",
            type: "man",
            img_url: require('../src/images/man/M9.jpg')

        },
        {
            id: "61",
            name: "beach",
            type: "sea",
            img_url: require('../src/images/sea/S9.jpg')

        },
        {
            id: "62",
            name: "girl",
            type: "woman",
            img_url: require('../src/images/woman/W9.jpg')

        }


    ]

    const [filteredphoto, setFilteredphoto] = useState(Photos)

    const filterfunction = (str) => {
        if (str === "all") {
            setFilteredphoto(Photos);
        } else {
            setFilteredphoto(Photos.filter((item) =>
                item.type.toLocaleLowerCase().includes(str.toLocaleLowerCase())
            ))
        }
    }


    const sortfunction = (sortdata, x, y) => {
        if (sortdata) {
            const sortedphotos = [...filteredphoto].sort((a, b) => {
                return a[sortdata] > b[sortdata] ? x : y;
            })
            setFilteredphoto(sortedphotos);
        }
    }


    const [searchQuery, setSearch] = useState()
    const searchphoto = (e) => {
        e.preventDefault()
        if (searchQuery) {
            setFilteredphoto(Photos.filter((item) =>
                item.type.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) |
                item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
            ))
        }
    }

    return (
        <>
           {/*  <div>
                <nav className="navbar navbar-expand-lg background bg-body-tertiary" >
                    <div className="container-fluid  "  >
                        <a className="navbar-brand" href="#" onClick={() => { filterfunction("all") }}>Masonry Gallery</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => { filterfunction("all") }}>All</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => { filterfunction("bird") }}>Birds</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => { filterfunction("animal") }}>Animals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => { filterfunction("insect") }}>Insects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => { filterfunction("pet") }}>Pets</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort With
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" onClick={() => { sortfunction("name", '1', '-1') }}>Name(A-Z)</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={() => { sortfunction("name", '-1', '1') }}>Name(Z-A)</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e) => { searchphoto(e) }}>
                                <input className=" form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setSearch(e.target.value) }} />
                                <button className="btn  btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div> */}

            <div style={{ padding: "10px" }}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                    <Masonry gutter="20px">
                        {filteredphoto.map((item, index) => {
                            return (
                                <div className="img" key={item.id}>
                                    <div>
                                        <img
                                            className="inner-img"
                                            src={item.img_url}
                                            style={{ borderRadius: "20px", width: "100%", height: "80%", display: "block" }}
                                            alt={item.name} />
                                    </div>
                                </div>
                            )
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    )
}
export default MasonryImageGallery;