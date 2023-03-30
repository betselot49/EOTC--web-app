import jesuswithchildren from './../Assets/Images/jesuswithchildren.jpg'
import "./History.css"
import * as FaIcons from "react-icons/fa";
//import {GiBookmarklet} from "react-icons/all-files/GiBookmarklet"

const books = [
    {
        name:"The Birth of Christ",
        linkTo : ""
    },
    {
        name:"The Baptism of Christ",
        linkTo : ""
    },
    {
        name:"Transfiguration",
        linkTo : ""
    },
    {
        name:"Joseph's glory",
        linkTo : ""
    },
    {
        name:"Holy Week",
        linkTo : ""
    },
    {
        name:"Ressurrection",
        linkTo : ""
    },
    {
        name:"The Doubting Thomas",
        linkTo : ""
    },
    {
        name:"Christ Walks on Water",
        linkTo : ""
    },
    {
        name:"Change Water to Wine",
        linkTo : ""
    },
    {
        name:"The Prodigal Son",
        linkTo : ""
    },
    {
        name:"The parable of Talent",
        linkTo : ""
    },
    {
        name:"The Ascension of Jesus",
        linkTo : ""
    },

]
const videos = [
    {
       name : "Miracle at Cana",
       linkTo : ""
    },
    {
        name : "Samson",
        linkTo : ""
     },
     {
        name : "Ruth",
        linkTo : ""
     },
     {
        name : "Samuel the Prophet",
        linkTo : ""
     },
     {
        name : "Gideon",
        linkTo : ""
     },
     {
        name : "The Wise Men",
        linkTo : ""
     },
     {
        name : "Simon the Elder",
        linkTo : ""
     },
     {
        name : "The birth of Moses",
        linkTo : ""
     },
     {
        name : "The Ten plagues",
        linkTo : ""
     },
     {
        name : "Crossing the Jordan River",
        linkTo : ""
     },
     {
        name : "David the King",
        linkTo : ""
     },
     {
        name : "The Burning Bush",
        linkTo : ""
     },
     {
        name : "Saint Paul",
        linkTo : ""
     },
]
const ForKids =()=>{
    return <div className='the-body'>
        <div>
            <div><h1 className='heading__text'>Children Teaching Materials</h1></div>
            <div  className='image__container'>
                <img className='jesuswithchildren' src={jesuswithchildren} alt="fdgn"></img>
            </div>
        </div>
        <div className='contain-element'>
            <h3>Books</h3>
        
        <div className='link-container'>
           {
            books.map(book=>{
                return <a className='ancher' href={book.linkTo} >{book.name} <FaIcons.FaBookOpen /> </a>
            })
           } 
            
        </div>
        </div>
        <div className='contain-element'>
            <h3>Videos</h3>
        
        <div className='link-container'>
           {
            videos.map(video=>{
                return <a className='ancher' href={video.linkTo} >{video.name} <FaIcons.FaVideo/> </a>
            })
           } 
            
        </div>
        </div>
    </div>
}
export default ForKids