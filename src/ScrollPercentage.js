import React, {useEffect, useState} from 'react'
import styled from 'styled-components'


const ScrollPercentage = () => {
    // window.onload = function() {
    //     let text = document.querySelector('.text');
	  //     let bar = document.querySelector('.bar');
        
    //     function getPercent () {
    //         let totalHeight = document.documentElement.scrollHeight; // 요소 컨텐츠의 총 높이
    //         let realScrollHeight = totalHeight - document.documentElement.clientHeight;
    //         let curScrollTop = document.documentElement.scrollTop;
    //         let percent = Math.round((curScrollTop / realScrollHeight) * 100)
    //         render(percent)
    //     }    
    //     function render (percent) {
    //         text.innerText = percent + "%"
    //         bar.style.width = percent + "%"
    //     }

    //     function init() {
    //         getPercent()
    //     }

    //     document.addEventListener('scroll', function() {
    //         getPercent()
    //     }, false)

    //     init()
    // }
    const [text, setText] = useState('0')
    const [bar, setBar] = useState('0%')
    
    const getScrollPercentage = () => {
      const curScrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
  
      const realScrollHeight = scrollHeight - clientHeight;
      const percentage = Math.floor((curScrollTop / realScrollHeight) * 100);
      setText(percentage)
      setBar(percentage + '%')
    };
  
    useEffect(() => {
      window.addEventListener('scroll', getScrollPercentage);
      return () => window.removeEventListener('scroll', getScrollPercentage);
    }, []);

  return (
    <Wrapper className='wrapper'>
        <Sec1>
            <Box>
                <Bar width={bar}>
                </Bar>
                <Wrapper className='text'>
                    {text}%
                </Wrapper>
            </Box>
        </Sec1>
    </Wrapper>
  )
}

export default ScrollPercentage

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
width: ${(props) => props.width};
height: 100%; 
background-color: #111;
`