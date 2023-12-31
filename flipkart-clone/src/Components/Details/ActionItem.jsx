import { Box, Button, styled } from '@mui/material'
import React from 'react'
import BoltIcon from '@mui/icons-material/Bolt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const LeftContainer = styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}))


const Image = styled('img')({
padding:'15px'
})

const StyledButton = styled(Button)(({theme})=>({
    width:'48%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
        width:'44%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}))



const ActionItem = ({product}) => {
    return (
        <LeftContainer>
            <Box style={{    padding:'15px 20px',
    border:'1px solid #f0f0f0',
    width:'90%'}}>
            <Image src={product.detailUrl}/>
            </Box>
            <StyledButton style={{marginRight:10,background:'#ff9f00'}} variant='contained'><ShoppingCartIcon/> ADD TO CART</StyledButton>
            <StyledButton style={{background:'#fb541b'}} variant='contained'><BoltIcon/>Buy now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem
