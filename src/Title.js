import React from 'react'
import styled from 'styled-components'

export default function Title({ title, center }) {
    return (
        <TitleWrapper>
            <div className="row">
                <div className="col">
                    <h2 className="text-title">{title}</h2>
                    <div className="title-underline"></div>
                </div>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
text-align:center;
color:#007bff    ;
.text-title{

font-size:4rem;
text-shadow:4px 4px 2px rgba(0,0,0,.3);
}
    .title-underline{
    height:.3rem;
    width:10rem;
    background:#007bffa8 ;
    margin:0 auto;
    }
`