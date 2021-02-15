
const styles = {
    palette: {
        primary: {
          light: '#33c9dc',
          main: '#00bcd4',
          dark: '#008394',
          contrastText: '#fff'
        },
        secondary: {
            main: "#FF4E00"
        },

    },
    homeComp: {
        root: {
            display: "flex",
            width: "100%"
        },
        margin: "0 auto 0 auto",
        background: {}
    },
    navComp: {
        basicText: {
            fontFamily: "Nunito"
        },
    },
    introComp: {
        root: {
            display: "flex",
            minWidth: "100%",
            minHeight: "45vh",
        },
        titleFont: {
            fontFamily: "Nunito",
            fontSize: "50px"
        },
        avatarSize: {
            width: "300px",
            height: "300px"
        },
        itemSize: {
            height: "200px",
            width: "600px"
        }
    },
    aboutComp: {
        root: {
            maxWidth: "80%",
            minHeight: "35vh",
            marginTop: "50px",
        },
        titleFont: {
            fontFamily: "Nunito",
            fontSize: "30px",
        },
        basicFont: {
            fontSize: "14px",
            fontFamily: "Nunito"
        }
    },
    projectComp: {
        root: {
            width: "100%",
            minHeight: "50vh",
            marginTop: "70px",
        },
        titleFont: {
            fontFamily: "Nunito",
            fontSize: "50px"
        },
        hintFont: {
            fontSize: "10px"
        }
    },
    mediaComp: {
        root: {
            maxWidth: "350px",
            maxHeight: "500px",
            margin: "25px"
        },
        contentRoot: {
            height: "150px"
        },
        media: {
            height: "17em",
            margin: "15px",
        },
        basicFont: {
            fontFamily: "Nunito",
        },
        titleFont: {
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "20px"
        }
    },
    contactComp: {
        root: {
            minWidth: "100%",
            minHeight: "15vh",
            marginTop: "55px",
        },
        iconStyle: {
            fontSize: "large"
        },
        basicText: {
            fontFamily: "Nunito",
        },
        titleFont: {
            fontFamily: "Nunito",
            fontSize: "40px",
        },
        anchor: {
            fontFamily: "Nunito",
            textDecoration: "none",
            color: "#FF4E00"
        }
    },
    skillComp: {
        root: {
            width: "100%",
            minHeight: "30vh",
            marginTop: "55px"
        },
        titleFont: {
            fontFamily: "Nunito",
            fontSize: "40px",
        },
    }
};

export default styles;