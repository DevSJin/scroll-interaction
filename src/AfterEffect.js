import React, {useEffect} from 'react'
import testImage from './images/testImage.jpg'
import styled from 'styled-components'

const AfterEffect = () => {
    useEffect(() => {
        document.querySelector('.f_content').className += ' active'
        return
    }, [])

return (
    <div>
		<section style={{padding: '100px 0 0 0'}}>
			<Article style={{position:'relative', width:'70%', margin:'0 auto'}} className="f_content">
				<h2 style={{position:'relative', zIndex:'20', fontSize:'50px', opacity:'1', textAlign:'center'}}>애니메이션 애프터 이펙트</h2>
				<figure className="img">
					<img src={testImage} alt="" />
				</figure>
			</Article>
		</section>
	</div>
  )
}

export default AfterEffect

const Article = styled.article`
& .img img{width: 100%}
& .img {position:relative; transform:translateY(50px);  transition:4s .2s cubic-bezier(0.3, 1.01, 0.51, 1.04);}
.active .img{transform:translateY(-10px);}
& .img::after{position:absolute; left:0; top:0; z-index:10; width:100%; height:100%; content:""; background-color: #fff; transition:2s .3s cubic-bezier(0.3, 1.01, 0.51, 1.04);}
&.active .img::after{width:0px}
`
