import React from 'react'
import styled from 'styled-components'

const Login = () => {
    return (
        <Container>
            
                <CTA>
                    <CTALogoOne src='images\cta-logo-one.svg'/>
                    
                    <SignUp>GET ALL THERE</SignUp>
                    
                    <Description>
                        Audio Description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. 
                        In this work we propose a novel dataset which contains transcribed ADs,
                    </Description>
                    <CTALogoTwo src='images\cta-logo-two.png'></CTALogoTwo>
                
                </CTA>

        </Container>
    )
}

export default Login


const Container=styled.main`
        display: flex;
        align-items: top;
        justify-content: center;
        height:100vh;
        padding: 0 calc(3.5vw + 5px);
        position: relative;

         &:before {
            background: url("images/login-background.jpg");
            background-size: cover;
            backgound-position: top;
            background-repeat: no-repeat;
            content:"";
            position: absolute;
            opacity: 0.8;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;    
}
`

const CTA=styled.div`
  max-width: 650px;
  padding: 60px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CTALogoOne=styled.img`
`

const CTALogoTwo=styled.img`
  width: 600px;
`

const SignUp=styled.a`
   width: 100%;
   background-color: #0063e5;
   font-weigth: bolder;
   padding: 17px 0;
   color: #f9f9f9;
   border-raduis: 20px;
   text-align: center;
   cursor: pointer;
   font-size: 18px;
   letter-spacing: 1.5px;
   marging-top: 8px;
   margin-bottom: 12px;
   transition: all 250ms;

   &:hover {
       background: #0483ee;
   }
`
const Description=styled.p`
   font-size: 11px;
   letter-spacing: 1.5px;
   text-align: center;
   line-height: 1.5;
`

