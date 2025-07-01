import styled from "styled-components";

export const Container = styled.View`
    
    display:flex;
    flex:1;
    width:100%;
    background-color: #1e1e20;
    align-items: center;
    justify-content: center;


`

export const CameraBox = styled.View`
    
    display:flex;
    border-width: 2;
    border-color: #fff;
    position: relative;
    width:350px;
    height:90%;
    overflow: hidden;
    border-radius:10px;


`
export const TriagleCorner = styled.View`
    

    display: flex;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-top-width: 20px;
    border-top-color: #fff;
    border-right-width: 20px;
    border-right-color: transparent;


`

export const TriagleCornerTopRight = styled(TriagleCorner)`
    
    top: 0;
    right: 0;
    transform: rotate(90deg);

` 
export const TriagleCornerBottonLeft = styled(TriagleCorner)`
    
    bottom: 0;
    left: 0;
    transform: rotate(270deg);

` 
export const TriagleCornerBottonRight = styled(TriagleCorner)`
    
    bottom: 0;
    right: 0;
    transform: rotate(180deg)

` 


