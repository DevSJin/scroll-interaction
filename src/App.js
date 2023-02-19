import React from 'react'
import styled from 'styled-components'


const App = () => {
    window.onload = function() {
        let text = document.querySelector('.text');
	    let bar = document.querySelector('.bar');
        
        function getPercent () {
            let totalHeight = document.body.scrollHeight
            let realScrollHeight = totalHeight - window.innerHeight
            let curScrollTop = window.scrollY
            console.log(totalHeight, realScrollHeight, curScrollTop)
            let percent = Math.round((curScrollTop / realScrollHeight) * 100)
            render(percent)
        }
        
        function render (percent) {
            text.innerText = percent + "%"
            bar.style.width = percent + "%"
        }

        function init() {
            getPercent()
        }

        document.addEventListener('scroll', function() {
            getPercent()
        }, false)

        init()
    }


  return (
    <Wrapper className='wrapper'>
        <Sec1>
            <Box>
                <Bar className='bar'>
                </Bar>
                <Wrapper className='text'>
                    0%
                </Wrapper>
            </Box>
        </Sec1>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sec1 = styled.section`
  display: flex;
  flex-direction: column;
  height: 2500px;
`

const Box = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 50px;
  border: 3px solid #e5e5e5;
`

const Bar = styled.div`
display: block; 
width: 0%;
height: 100%; 
background-color: #111;
`

const Content = styled.div`
font-size: 170px;
`