import image_forgery from "../assets/Projects/image_forgery.png"
import Kylo_folio from "../assets/Projects/Kylo_folio.png"
import kylo_movie from "../assets/Projects/KyloMovie_app.png"
import spark from "../assets/Projects/Smart_parking.png"
import medapp from "../assets/Projects/MedStore_app.png"
import Footwear from "../assets/Projects/Footwear.png"





const projects = [

    {
        img: Kylo_folio,
        name: "Kylo_folio",
        code: "",
        description: "Kylofolio: Alan's Personal portfolio built with React Js, Tailwind CSS and Vite Js",
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: kylo_movie,
        name: "kylo_movie",
        code: "https://github.com/kylo1330/Movie-Booking-application-Django-React",
        description: " KyloMovie: this app is used for booking movie tickets in userside and creating movie shows in adminside.This app uses React as Frontend and Django for a secure backend",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: spark,
        name: "spark",
        code: "https://github.com/kylo1330/smart-parking-project-using-IOT",
        description: "The proposed project is a smart parking booking system.This is a iot project with node MCU esp 832 connected with firebase databse with html css front end  .",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: medapp,
        name: "medapp",
        code: "https://github.com/kylo1330/MEDSTORE-Django-React",
        description: "MedStore: This applicaton is used as pharmacy. In this project  the Logged in users can create, list, update, delete the medicines in the store. ",
        style: {
            shadow: "shadow-[#23CEEE]",
            cover: "from-[#23CEEE]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: image_forgery,
        name: "image_forgery",
        code: "https://github.com/kylo1330/image-forgery-and-object-detection-",
        description: "This project is  for detecting  image tampering and other manipulations. It also detects the class of objects from the given input image.This project is built with Keras and Flask ans backend with HTML-CSS as frontend.",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Footwear,
        name: "Footwear",
        code: "https://github.com/kylo1330/E-Commerce-footwear-shop",
        description:" Metrowear: this app is used as a e-commerce website for footwears with delivery option with payment.This app uses React as Frontend and Django for a secure backend",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },

]
export default projects;