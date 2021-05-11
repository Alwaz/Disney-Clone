import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import db from '../firebase'

const Details = () => {
   const {id} = useParams();
   const[movie,setMovie]=useState()

   useEffect(()=>{
       db.collection('movies').doc(id).get().then((doc)=>{
           if(doc.exists){
               setMovie(doc.data())
               //save movie data
           }else{
            //    redirect to home page
           }
       })

   },[])
   console.log("Movie is", movie);
   

    return (
        <Container>
            {movie && (
            <>
                <Background>
                <img src={movie.backgroundImg}/>
            </Background>

            <ImgTitle>
                <img src={movie.titleImg}/>
            </ImgTitle>

            <Controls>
                 <PlayButton>
                     <img src='images\play-icon-black.png'/><span>Play</span>
                 </PlayButton>

                 <TrailerButton>
                       <img src='images\play-icon-white.png'/><span>Trailer</span>
                 </TrailerButton>

                 <Addbutton>
                     <span>+</span>
                 </Addbutton>

                 <GroupWatchButton>
                     <img src='images\group-icon.png'/>
                 </GroupWatchButton>
            </Controls>

            <SubTitle>
                {movie.subTitle}
            </SubTitle>

            <Description>
                {movie.description}
            </Description>
         </>
         )}
         </Container>
    )
}

export default Details

const Container=styled.div`
   height: 100vh;
   padding: 0 calc(3.5vw + 5px);
   position: relative;
`

const Background=styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgTitle=styled.div`
    height: 50vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

   img {
    width: 100%;
    height: 100%;
    object-fit: contain;
   }
    
`
const Controls=styled.div`
    display: flex;
    align-items: center;
    margin-left: 5%;

`
const PlayButton=styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 50px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spaceing: 1.8px;
  cursor: pointer;
  padding: 0px 24px;
  margin-right: 22px;
  outline: none;

  &:hover {
      background: rgb(198, 198, 198);
  }
`
const TrailerButton=styled(PlayButton)`
   background: rgb(0, 0, 0, 0.3);
   border: 1px solid rgb(249, 249, 249);
   color: rgb(249,249, 249);
   text-transform: uppercase;
`
const Addbutton=styled.button`
     width: 44px;
     height: 44px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 50%;
     border: 2px solid white;
     background: rgb(0, 0, 0, 0.6);
     color: white;
     cursor: pointer;
     margin-right: 16px;

     &:hover {
        background: rgb(0, 0, 0, 0.3);
     }
     span {
         font-size:30px;
     }
`
const GroupWatchButton=styled(Addbutton)`
      background: black;
`

const SubTitle=styled.div`
   color: white;
   font-size: 15px;
   min-height: 20px;
   margin-top: 26px;
   margin-left: 5%;     
`

const Description=styled.div`
     color: white;
     font-size: 18px;
     min-height: 20px;
     margin-top: 16px;
     margin-left: 5%;  
     line-height: 1.4; 
     max-width: 500px;  
`


